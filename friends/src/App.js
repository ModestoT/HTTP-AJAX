import React, { Component } from 'react';
import axios from 'axios';
import {Route, NavLink } from 'react-router-dom';

import FriendsList from './components/FriendsList';
import Form from './components/form/Form';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
        friends: [],
        name: '',
        age: '',
        email: ''
    };
  }


  handleInput = e => {
    const target = e.target.placeholder.toLowerCase();

    switch(target){
      case 'name':
        this.setState({name: e.target.value});
        break;
      case 'age':
        this.setState({age: e.target.value});
        break;
      case 'email':
        this.setState({email: e.target.value});
        break;
      default:
        console.log("invalid input")
    }
  }

  addNewFriend = e => {
    e.preventDefault();
    const newFriend = {name: this.state.name, age: this.state.age, email: this.state.email};

    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(res => {
        this.setState({friends: res.data, name: '', age: '', email: '' });
      })
      .catch(err => {
        console.log(err.response);
      })
  }

  updateFriend = id => {
    const updatedFriend = {name: this.state.name, age: this.state.age, email: this.state.email};

    axios
      .put(`http://localhost:5000/friends/${id}`, updatedFriend)
      .then(res => {
        this.setState({friends: res.data, name: '', age: '', email: '' });
      })
      .catch(err => {
        console.log(err.response);
      })
  }

  deleteFriend = id => {

    axios
     .delete(`http://localhost:5000/friends/${id}`)
     .then(res => {
       this.setState({friends: res.data});
     })
     .catch(err => {
       console.log(err.response);
     })
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        this.setState({friends: res.data})
      })
      .catch(err => {
        console.log(err.response);
      });
  }

  render() {
    return (
      <div className="App">
        <nav className="nav-links">
          <NavLink to = "/friend-form">Add Friend</NavLink>
        </nav>
        <Form name={this.state.name} age={this.state.age} email={this.state.email} handleInput={this.handleInput} addNewFriend={this.addNewFriend} />
        <Route exact path ="/" render={props => <FriendsList {...props} friends={this.state.friends} updateFriend={this.updateFriend} deleteFriend={this.deleteFriend} />} />
         {/* {<div className="friends-list">
            {this.state.friends.map(friend => {
             return <FriendsList friend={friend} key={friend.id} updateFriend={this.updateFriend} deleteFriend={this.deleteFriend} />
          })}
          </div>} */}
      </div>
    );
  }
}

export default App;
