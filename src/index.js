import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

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
    console.log("getAllUsers");
    axios
      .get("http://www.mocky.io/v2/5ce46dc53100007ea5742d31")
      .then(response =>
        this.setState({ users: [...this.state.users, ...response.data] })
      );
  }
  render() {
    return <div>Hello</div>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Page />, rootElement);
