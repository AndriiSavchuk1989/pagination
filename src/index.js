import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Pagination from "./Pagination";
import Users from "./Users";

import "./styles.css";

const users = [
  {
    id: 1,
    first_name: "Alan",
    last_name: "Smith"
  },
  {
    id: 2,
    first_name: "Alan",
    last_name: "Smith"
  },
  {
    id: 3,
    first_name: "Alan",
    last_name: "Smith"
  },
  {
    id: 4,
    first_name: "Alan",
    last_name: "Smith"
  },
  {
    id: 5,
    first_name: "Alan",
    last_name: "Smith"
  }
];

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }
  render() {
    return (
      <Pagination data={users}>
        <Users />
      </Pagination>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Page />, rootElement);
