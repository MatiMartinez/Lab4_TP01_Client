import React, { Component } from "react";
import NavBar from "./NavBar";

import { Link } from "react-router-dom";
import axios from "axios";

export default class TableEnterprise extends Component {
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

  render() {
    return (
      <div>
        <NavBar />
        <div className="container pt-4">
          <table width="50%" align="center">
            <thead>
              <tr>
                <th>EMPRESA</th>
                <th>VER PÁGINA</th>
              </tr>
            </thead>
            <tbody>
              {this.state.enterprises.map(enterprise => (
                <tr>
                  <td width="50%" key={enterprise.id}>
                    {enterprise.designation}
                  </td>
                  <td>
                    <Link
                      to={{
                        pathname: "/home/",
                        state: {
                          id: enterprise.id
                        }
                      }}
                    >
                      http://www.{enterprise.designation}.com
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
