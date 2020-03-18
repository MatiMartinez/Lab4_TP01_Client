import React, { Component } from "react";

import "../css/camera.css";
import "../css/search.css";
import "../css/google-map.css";
import "../";
import axios from "axios";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      enterprise: [],
      id: this.props.location.state
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:9001/api/v1/enterprises/" + this.state.id)
      .then(response => {
        console.log(response);
        this.setState({ enterprise: response.data });
      })
      .catch(error => {
        console.log(error);
      });
    console.log(this.state.id);
  }

  render() {
    return (
      <div>
        <div className="page">
          <header>
            <div className="container top-sect">
              <div className="navbar-header">
                <h1 className="navbar-brand">
                  <a data-type="rd-navbar-brand" href="./">
                    <small>{this.state.enterprise.title}</small>
                  </a>
                </h1>
                <a className="search-form_toggle" href="#"></a>
              </div>

              <div className="help-box text-right">
                <p>Telefono</p>
                <a href="callto:#"> {this.state.enterprise.phone} </a>
                <small>
                  <span>Horario:</span> 6am-4pm PST M-Th; &nbsp;6am-3pm PST Fri
                </small>
              </div>
            </div>

            <div id="stuck_container" className="stuck_container">
              <div className="container">
                <form
                  className="search-form"
                  action="search.php"
                  method="GET"
                  acceptCharset="utf-8"
                >
                  <label className="search-form_label">
                    <input
                      className="search-form_input"
                      type="text"
                      name="s"
                      autoComplete="off"
                      placeholder=""
                    />
                    <span className="search-form_liveout"></span>
                  </label>
                  <button
                    className="search-form_submit fa-search"
                    type="submit"
                  ></button>
                </form>
              </div>
            </div>
          </header>

          <main>
            <section className="well well1 well1_ins1">
              <div className="camera_container">
                <div id="camera" className="camera_wrap">
                  <div data-src="images/page-1_slide1.jpg">
                    <div className="camera_caption fadeIn">
                      <div className="jumbotron jumbotron1">
                        <em>Titulo Noticia</em>
                        <div className="wrap">
                          <p>Resumen</p>
                          <a href="#" className="btn-link fa-angle-right"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-src="images/page-1_slide2.jpg">
                    <div className="camera_caption fadeIn">
                      <div className="jumbotron jumbotron2">
                        <em>Titulo Noticia</em>
                        <div className="wrap">
                          <p>Resumen</p>
                          <a
                            href="#"
                            className="btn-link hov_prime fa-angle-right"
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-src="images/page-1_slide3.jpg">
                    <div className="camera_caption fadeIn">
                      <div className="jumbotron">
                        <em>Titulo Noticia</em>
                        <div className="wrap">
                          <p>Resumen</p>
                          <a href="#" className="btn-link fa-angle-right"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section
              className="well well2 wow fadeIn  bg1"
              data-wow-duration="3s"
            >
              <div className="container">
                <h2 className="txt-pr">Quienes Somos</h2>
                <div className="row">
                  <div className="col">
                    <p className="quienesSomos">
                      {this.state.enterprise.title}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <footer className="top-border">
            <section
              className="well well2 wow fadeIn  bg1"
              data-wow-duration="3s"
            >
              <div className="container">
                <h2 className="txt-pr">Donde estamos</h2>
              </div>
            </section>
            <div className="map">
              <div id="google-map" className="map_model" data-zoom="11"></div>
              <ul className="map_locations">
                <li
                  data-x="-73.9874068"
                  data-y="40.643180"
                  data-basic="images/gmap_marker.png"
                  data-active="images/gmap_marker_active.png"
                >
                  <div className="location">
                    <h3 className="txt-clr1">
                      <small>Denominación Empresa</small>
                    </h3>
                    <address>
                      <dl>
                        <dt>Telefono: </dt>
                        <dd className="phone">
                          <a href="callto:#"> 800-2345-6789</a>
                        </dd>
                      </dl>
                      <dl>
                        <dt>Domicilio: </dt>
                        <dd> 4578 Marmora Road,Glasgow D04 89GR</dd>
                      </dl>
                      <dl>
                        <dt> E-mail: </dt>
                        <dd>
                          <a href="mailto:#">info@demolink.org</a>
                        </dd>
                      </dl>
                    </address>
                  </div>
                </li>
              </ul>
            </div>

            <section className="well1">
              <div className="container">
                <p className="rights">
                  Denominación Empresa &#169; <span id="copyright-year"></span>
                  <a href="index-5.html">Privacy Policy</a>
                </p>
              </div>
            </section>
          </footer>
        </div>
      </div>
    );
  }
}
