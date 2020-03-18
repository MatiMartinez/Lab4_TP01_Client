import React, { Component } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

export default class TableEnterprise extends Component {
  constructor() {
    super();
    this.state = {
      enterprises: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:9001/api/v1/enterprises") //URL https://jsonplaceholder.typicode.com/posts
      .then(response => {
        console.log(response);
        this.setState({ enterprises: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div className="container">
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
                      Web
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
