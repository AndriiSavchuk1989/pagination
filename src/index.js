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
    this.getAllUsers();
  }

  getAllUsers() {
    axios
      .get("http://www.mocky.io/v2/5ce46dc53100007ea5742d31")
      .then(response => console.log(response));
  }
  render() {
    return <div />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Page />, rootElement);
