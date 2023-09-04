import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { NavLink } from "react-router-dom";

// api
// https://64f0dc548a8b66ecf77a2f9d.mockapi.io/fakeData

// react-router-v6

import { Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Create from "./Components/Create";
import Read from "./Components/Read";
import Update from "./Components/Update";

// Note: mockapi
// https://mockapi.io/ and create your account.

function App() {
  return (
    <div className="App">
      <div className="main">
        {/* ===============  Links__START  =============== */}
        <div className="sidemenu">
          <div className="sidemenuwrap">
            <header className="header bd-navbar sticky-top">
              <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                  <Link to="/" className="navbar-brand">
                    React Crud App
                  </Link>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse d-flex flex-wrap align-items-end justify-content-end"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav meauto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <Link to="/" className="nav-link">
                          Home
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/read" className="nav-link">
                          Read
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/create" className="nav-link">
                          Create
                        </Link>
                      </li>                      
                      <li className="nav-item">
                        <Link to="/update" className="nav-link">
                          Update
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </header>
          </div>
        </div>
        {/* ===============  Links__CLOSE  =============== */}

        {/* ===============  Routes__START  =============== */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/read" element={<Read />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update" element={<Update />} />
        </Routes>
        {/* ===============  Routes__CLOSE  =============== */}
      </div>
    </div>
  );
}

export default App;
