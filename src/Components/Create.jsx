import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const history = useNavigate();

  // method 1: axios
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit Clicked!");

    // Validation: Check if name and email are not empty
    if (!firstName.trim() || !lastName.trim()) {
      alert("Fields cannot be empty");
      return;
    }

    axios
      .post("https://64f0dc548a8b66ecf77a2f9d.mockapi.io/fakeData", {
        firstName,
        lastName,
        checkbox,
        // headers: header,
      })
      .then(() => {
        history("/read");
      });
  };

  return (
    <div className="createPage compWrapper">
      <h2 className="main-header text-center">
        <span className="badge text-dark fs-1">React Crud Operations</span>
      </h2>
      <div className="card">
        <div className="card-body">
          <div className="createTitle d-flex flex-wrap align-items-center justify-content-center">
            <h5 className="card-title">Create Component</h5>
            <Link to="/read">
              <button type="button" className="btn btn-warning ms-4">
                Show Data
              </button>
            </Link>
          </div>
          <form>
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                name="firstName"
                placeholder="First Name.."
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                name="lastName"
                placeholder="Last Name.."
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="createCheck"
                name="checkbox"
                onChange={(e) => setCheckbox(!checkbox)}
              />
              <label className="form-check-label">
                I agree to the Terms and Conditions
              </label>
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
