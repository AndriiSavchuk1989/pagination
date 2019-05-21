import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Users from "./Users";

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
    this.getAllUsers = this.getAllUsers.bind(this);
  }

  componentDidMount() {
    console.log("component did mount");
    this.getAllUsers();
    console.log("initial state", this.state);
  }

  getAllUsers() {
    console.log("getAllUsers()");
    console.log("this state before call getAllUsers()", this.state);
    axios.get("https://jsonplaceholder.typicode.com/users").then(response =>
      this.setState(function(prevState) {
        return { users: [...prevState.users, ...response.data] };
      })
    );
    console.log(this.state.users);
  }
  render() {
    console.log("from render", this.state.users);
    return (
      <div>
        {this.state.users.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <div>Users loaded</div>
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Page />, rootElement);
