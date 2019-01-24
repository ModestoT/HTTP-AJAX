import React, { Component } from 'react';
import axios from 'axios';
import {Route, NavLink, Redirect, Switch, withRouter } from 'react-router-dom';

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
        email: '',
        friendId: '',
        isUpdating: false
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

  addNewFriend = () => {
    const newFriend = {name: this.state.name, age: this.state.age, email: this.state.email};

    axios
      .post('http://localhost:5000/friends', newFriend)
      .then(res => {
        this.setState({friends: res.data, name: '', age: '', email: ''});
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err.response);
      });
  }

  updateFriend = (id) => {
    const updatedFriend = {name: this.state.name, age: this.state.age, email: this.state.email};

    axios
      .put(`http://localhost:5000/friends/${id}`, updatedFriend)
      .then(res => {
        this.setState({friends: res.data, name: '', age: '', email: '', isUpdating:false});
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err.response);
      })
  }

  deleteFriend = (e, id) => {
    e.preventDefault();

    axios
     .delete(`http://localhost:5000/friends/${id}`)
     .then(res => {
       this.setState({friends: res.data});
     })
     .catch(err => {
       console.log(err.response);
     })
  }

  populateForm = (e, id) => {
    e.preventDefault();
    const tempFriend = this.state.friends.find(friend => friend.id === id);

    this.setState({ 
      name: tempFriend.name,
      email: tempFriend.email,
      age: tempFriend.age,
      friendId: tempFriend.id,
      isUpdating: true
    });
    this.props.history.push('/friend-form');
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
          <NavLink to = "/">Home</NavLink>
          <NavLink to = "/friend-form">Add Friend</NavLink>
        </nav>
        <Switch>
          <Route exact path ="/" render={props => <FriendsList {...props} friends={this.state.friends} updateFriend={this.updateFriend} deleteFriend={this.deleteFriend} populateForm={this.populateForm} />} />
          <Route path ="/friend-form" render={props => <Form {...props} friends={this.state.friends} friendId={this.state.friendId} name={this.state.name} age={this.state.age} email={this.state.email} handleInput={this.handleInput} addNewFriend={this.addNewFriend} isUpdating={this.state.isUpdating} updateFriend={this.updateFriend}/>} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
