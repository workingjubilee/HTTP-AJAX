import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

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
          {this.state.friends.map(friend => {return <h1>Hi, my name is {friend.name}</h1>})}
          <pre>this.state = {JSON.stringify(this.state, null, 2)}</pre>
        </header>
      </div>
    );
  }
}


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
