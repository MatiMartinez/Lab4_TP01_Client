import React, { Component } from "react";
import axios from "axios";

import NavBar from "./NavBar";
import { Link } from "react-router-dom";

export default class DeleteEnterprise extends Component {
  constructor() {
    super();
    this.state = {
      enterprises: []
    };
  }

  getEnterprises = async () => {
    await axios
      .get("http://localhost:9001/api/v1/enterprises/")
      .then(response => {
        console.log(response);
        this.setState({ enterprises: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getEnterprises();
  }

  deleteEnterprise = async id => {
    console.log(id);
    await axios.delete("http://localhost:9001/api/v1/enterprises/" + id);
    this.getEnterprises();
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="container row">
          {this.state.enterprises.map(enterprise => (
            <div className="col-md-4 p-2" key={enterprise.id}>
              <div className="card mb-3">
                <h3 className="card-header"> {enterprise.designation} </h3>
                <div className="card-body">
                  <h5 className="card-title"> {enterprise.address} </h5>
                  <h6 className="card-subtitle text-muted">
                    {enterprise.phone}
                  </h6>
                </div>
                <div className="card-body">
                  <p className="card-text">{enterprise.attention_time}</p>
                </div>
                <div className="card-body">
                  <a href="#" class="card-link">
                    {enterprise.email}
                  </a>
                </div>
                <div className="card-footer d-flex justify-content-around pt-4">
                  <button
                    className="btn btn-danger"
                    onClick={() => this.deleteEnterprise(enterprise.id)}
                  >
                    Eliminar
                  </button>
                  <Link
                    to={"/editEnterprise/" + enterprise.id}
                    className="btn btn-secondary"
                  >
                    Editar
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
