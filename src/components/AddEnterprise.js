import React, { Component } from "react";
import NavBar from "./NavBar";
import Axios from "axios";
import { Link } from "react-router-dom";

export default class AddEnterprise extends Component {
  constructor() {
    super();
    this.state = {
      designation: "",
      phone: "",
      attention_time: "",
      about_us: "",
      latitude: "",
      longitude: "",
      address: "",
      email: "",
      edit: false,
      _id: ""
    };
  }

  async componentDidMount() {
    console.log(this.props.match.params.id);
    if (this.props.match.params.id) {
      const res = await Axios.get(
        "http://localhost:9001/api/v1/enterprises/" + this.props.match.params.id
      );
      this.setState({
        designation: res.data.designation,
        phone: res.data.phone,
        attention_time: res.data.attention_time,
        about_us: res.data.about_us,
        latitude: res.data.latitude,
        longitude: res.data.longitude,
        address: res.data.address,
        email: res.data.email,
        edit: true,
        _id: this.props.match.params.id
      });
      console.log(this.state);
    }
  }

  handleInputChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  onSubmit = async evt => {
    evt.preventDefault();
    const newEnterprise = {
      designation: this.state.designation,
      phone: this.state.phone,
      attention_time: this.state.attention_time,
      about_us: this.state.about_us,
      latitude: this.state.latitude,
      longitude: this.state.longitude,
      address: this.state.address,
      email: this.state.email
    };
    if (this.state.edit) {
      await Axios.put(
        "http://localhost:9001/api/v1/enterprises/" + this.state._id,
        newEnterprise
      );
    } else {
      await Axios.post(
        "http://localhost:9001/api/v1/enterprises/",
        newEnterprise
      );
    }
    window.location.href = "/";
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="container w-25 pt-3">
          <form onSubmit={this.onSubmit} className="form-group">
            <label className="col-form-label col-form-label-sm">
              Denominación
            </label>
            <input
              className="form-control form-control-sm"
              type="text"
              name="designation"
              onChange={this.handleInputChange}
              value={this.state.designation || ""}
            />
            <label className="col-form-label col-form-label-sm">Teléfono</label>
            <input
              className="form-control form-control-sm"
              type="text"
              name="phone"
              onChange={this.handleInputChange}
              value={this.state.phone || ""}
            />
            <label className="col-form-label col-form-label-sm">
              Horarios de Atención
            </label>
            <input
              className="form-control form-control-sm"
              type="text"
              name="attention_time"
              onChange={this.handleInputChange}
              value={this.state.attention_time || ""}
            />
            <label className="col-form-label col-form-label-sm">
              Quienes Somos
            </label>
            <textarea
              className="form-control form-control-sm"
              type="text"
              name="about_us"
              onChange={this.handleInputChange}
              value={this.state.about_us || ""}
            />
            <label className="col-form-label col-form-label-sm">Latitud</label>
            <input
              className="form-control form-control-sm"
              type="number"
              name="latitude"
              onChange={this.handleInputChange}
              value={this.state.latitude || ""}
            />
            <label className="col-form-label col-form-label-sm">Longitud</label>
            <input
              className="form-control form-control-sm"
              type="number"
              name="longitude"
              onChange={this.handleInputChange}
              value={this.state.longitude || ""}
            />
            <label className="col-form-label col-form-label-sm">
              Domicilio
            </label>
            <input
              className="form-control form-control-sm"
              type="text"
              name="address"
              onChange={this.handleInputChange}
              value={this.state.address || ""}
            />
            <label className="col-form-label col-form-label-sm">E-mail</label>
            <input
              className="form-control form-control-sm"
              type="email"
              name="email"
              onChange={this.handleInputChange}
              value={this.state.email || ""}
            />
            <div className="d-flex justify-content-around pt-4">
              <Link to="/" className="btn btn-secondary w-100 m-1">
                Volver
              </Link>
              <button type="submit" className="btn btn-success w-100 m-1">
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
