import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Friend from './components/Friend';
import UpdateForm from './components/UpdateForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      name: '',
      age: '',
      email: '',
    };
  };

  textInput = (event) => {
    const target= event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
    console.log(this.state);
  };

  formPost = () => {
    axios.post("http://localhost:5000/friends", {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
      id: this.state.friends.length + 1
    })
      .then(result => {
        // reset state if positive
      })
      .catch(error => {
        // display error?
      });
  };

  friendDelete = (id) => {
    // const =
    axios.delete(`http://localhost:5000/friends/${id}`)
      .then(result => {
        this.setState({
          friends: result.data
        })
      })
      .catch(error => {console.log("argh")});
  };

  friendUpdate = (stuff) => {
    const friendData = { name: stuff.name, age: stuff.age, email: stuff.email, id: stuff.id };
    if (this.state.name.length > 0 && this.state.name !== undefined) {
      friendData.name = this.state.name
    }
    if (this.state.age.length > 0) {
      friendData.age = parseInt(this.state.age,10);
    }
    if (this.state.email.length > 0 && this.state.email !== undefined) {
      friendData.email = this.state.email
    };
    console.log(friendData);
    axios.put(`http://localhost:5000/friends/${friendData.id}`, {...friendData})
      .then(result => {
        console.log(result.data);
        this.setState({
          friends: result.data,
          name: '',
          age: '',
          email: ''
        })}
      )
      .catch(error => {console.log("argh")});
  };

  componentDidMount() {
    console.log('CDM begins.');
    axios.get("http://localhost:5000/friends")
      .then(result => {
        // mount the data in state?
        this.setState({
          friends: result.data
        });
      })
      .catch(error => {
        console.log(error)
        // if an error happens, resolve it.
      });
    console.log('CDM completes.');
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.friends.map(friend => <Friend {...friend} key={friend.id} friendDelete={this.friendDelete} friendUpdate={this.friendUpdate} />)}
          <form onSubmit={this.formPost}>
            <label>Name: <input value={this.state.name} type="text" onChange={this.textInput} name="name" /></label>
            <label>Age: <input value={this.state.age} type="text" onChange={this.textInput} name="age" /></label>
            <label>E-mail: <input value={this.state.email} type="text" onChange={this.textInput} name="email" /></label>
            <button>POST</button>
          </form>

        </header>
      </div>
    );
  }
}

// <UpdateForm formPut={this.formPut} />


// 1.  Inside your React application, create a component to display the list of friends coming from the server.
// 1.  Add a form to gather information about a new friend.
// 1.  Add a button to save the new friend by making a `POST` request to the same endpoint listed above.
// 1.  Each `friend` should have the properties listed below.
// 1.  Implement `Update` and `Delete` functionality.
//     * for `update` pass the friend id as a URL parameter, and the information you want to update about the friend inside the body. You can build a new form in the UI for this, or, if you set it up correctly, reuse the form you made for the `POST` request.
//     * for `delete`, add a `delete` button, or an `x` icon to each friend that will delete the friend when you click it. In the request url, pass the friend id as a URL parameter.
//
// For reference,
// ```js
// {
//   name: should be a string,
//   age: should be a number,
//   email: should be a string,
// }
// ```

export default App;
