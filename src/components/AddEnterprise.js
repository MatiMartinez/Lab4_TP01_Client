import React, { Component } from "react";
import Axios from "axios";

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
      adress: "",
      email: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
    console.log(evt.target.value);
  }

  onSubmit = async evt => {
    evt.preventDefault();
    await Axios.post("http://localhost:9001/api/v1/enterprises/", this.state);
    console.log(this.state);
  };

  render() {
    return (
      <div className="container w-25">
        <form onSubmit={this.onSubmit} className="form-group">
          <label className="col-form-label col-form-label-sm">
            Denominación
          </label>
          <input
            className="form-control form-control-sm"
            type="text"
            name="designation"
            onChange={this.handleInputChange}
            value={this.state.designation}
          />
          <label className="col-form-label col-form-label-sm">Teléfono</label>
          <input
            className="form-control form-control-sm"
            type="text"
            name="phone"
            onChange={this.handleInputChange}
            value={this.state.phone}
          />
          <label className="col-form-label col-form-label-sm">
            Horarios de Atención
          </label>
          <input
            className="form-control form-control-sm"
            type="text"
            name="attention_time"
            onChange={this.handleInputChange}
            value={this.state.attention_time}
          />
          <label className="col-form-label col-form-label-sm">
            Quienes Somos
          </label>
          <textarea
            className="form-control form-control-sm"
            type="text"
            name="about_us"
            onChange={this.handleInputChange}
            value={this.state.about_us}
          />
          <label className="col-form-label col-form-label-sm">Latitud</label>
          <input
            className="form-control form-control-sm"
            type="number"
            name="latitude"
            onChange={this.handleInputChange}
            value={this.state.latitude}
          />
          <label className="col-form-label col-form-label-sm">Longitud</label>
          <input
            className="form-control form-control-sm"
            type="number"
            name="longitude"
            onChange={this.handleInputChange}
            value={this.state.longitude}
          />
          <label className="col-form-label col-form-label-sm">Domicilio</label>
          <input
            className="form-control form-control-sm"
            type="text"
            name="adress"
            onChange={this.handleInputChange}
            value={this.state.adress}
          />
          <label className="col-form-label col-form-label-sm">E-mail</label>
          <input
            className="form-control form-control-sm"
            type="email"
            name="email"
            onChange={this.handleInputChange}
            value={this.state.email}
          />
          <div className="d-flex justify-content-around pt-4">
            <button type="button" className="btn btn-outline-primary w-100">
              Volver
            </button>
            <button type="submit" className="btn btn-outline-success w-100">
              Guardar
            </button>
          </div>
        </form>
      </div>
    );
  }
}
