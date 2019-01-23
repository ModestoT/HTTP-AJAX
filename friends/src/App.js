import React, { Component } from 'react';
import axios from 'axios';

import FriendsList from './components/FriendsList';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
        friends: []
    };
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
          <div className="friends-list">
            {this.state.friends.map(friend => {
              return <FriendsList friend={friend}/>
            })}
          </div>
      </div>
    );
  }
}

export default App;
