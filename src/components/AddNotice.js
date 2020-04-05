import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";

export default class AddNotice extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      summary: "",
      image_file: "",
      html_content: "",
      published: false,
      publication_date: "",
      edit: false,
      _id: ""
    };
  }

  async componentDidMount() {
    if (this.props.match.params.id) {
      const res = await axios.get(
        "http://localhost:9001/api/v1/notices/" + this.props.match.params.id
      );
      this.setState({
        title: res.data.title,
        summary: res.data.summary,
        image_file: res.data.image_file,
        html_content: res.data.html_content,
        published: res.data.published,
        publication_date: res.data.publication_date,
        edit: true,
        _id: this.props.match.params.id
      });
    }
  }

  handleInputChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleCheckboxChange = () => {
    this.setState({
      published: !this.state.published
    });
  };

  onSubmit = async evt => {
    evt.preventDefault();
    const newNotice = {
      title: this.state.title,
      summary: this.state.summary,
      image_file: this.state.image_file,
      html_content: this.state.html_content,
      published: this.state.published,
      publication_date: this.state.publication_date
    };
    if (this.state.edit) {
      await axios.put(
        "http://localhost:9001/api/v1/notices/" + this.state._id,
        newNotice
      );
    } else {
      await axios.post("http://localhost:9001/api/v1/notices/", newNotice);
    }
    window.location.href = "/";
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="container w-25 pt-3">
          <form onSubmit={this.onSubmit} className="form-group">
            <label className="col-form-label col-form-label-sm">Título</label>
            <input
              className="form-control form-control-sm"
              type="text"
              name="title"
              onChange={this.handleInputChange}
              value={this.state.title || ""}
            />
            <label className="col-form-label col-form-label-sm">Summary</label>
            <input
              className="form-control form-control-sm"
              type="text"
              name="summary"
              onChange={this.handleInputChange}
              value={this.state.summary || ""}
            />
            <label className="col-form-label col-form-label-sm">Imagen</label>
            <input
              type="file"
              className="form-control-file"
              id="exampleInputFile"
              aria-describedby="fileHelp"
              name="image_file"
              onChange={this.handleInputChange}
              value={this.state.image_file || ""}
            />
            <label className="col-form-label col-form-label-sm">
              HTML Content
            </label>
            <textarea
              className="form-control form-control-sm"
              type="text"
              name="html_content"
              onChange={this.handleInputChange}
              value={this.state.html_content || ""}
            />
            <label className="col-form-label col-form-label-sm">
              Publicada
            </label>
            <input
              className="form-control form-control-sm"
              type="checkbox"
              onChange={this.handleCheckboxChange}
              defaultChecked={this.state.published}
              ref="published"
            />
            <label className="col-form-label col-form-label-sm">
              Fecha de Publicación
            </label>
            <input
              className="form-control form-control-sm"
              type="number"
              name="publication_date"
              onChange={this.handleInputChange}
              value={this.state.publication_date || ""}
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
