import { Component } from "react";
import Navbar from "./NavBar";

import axios from "react-router-dom";
import { Link } from "react-router-dom";

export default class DeleteNotice extends Component {
  constructor() {
    super();
    this.state = {
      notices: []
    };
  }

  getNotices = async () => {
    await axios
      .get("http://localhost:9001/api/v1/notices/")
      .then(response => {
        this.setState({
          notices: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getNotices();
  }

  deleteNotice = async id => {
    await axios.delete("http://localhost:9001/api/v1/notice/" + id);
    this.getNotices();
  };

  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}
