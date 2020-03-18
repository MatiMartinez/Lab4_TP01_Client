import React from "react";

import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarColor03">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/addEnterprise">
                Crear
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/deleteEnterprise">
                Editar
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
