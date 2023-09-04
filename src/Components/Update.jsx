import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const [id, setID] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // ===================================================================================================================

  // Notes :::: get data from Local Storage.
  // get data we previously stored in Local Storage
  // and now Set the respective data according to your keys from Local Storage.
  // We need to set these values in form fields.
  // It will automatically populate the fields when the Update page loads.

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstName(localStorage.getItem("First Name"));
    setLastName(localStorage.getItem("Last Name"));
    setCheckbox(localStorage.getItem("Checkbox Value"));
  }, []);
  // ===================================================================================================================

  // Notes ::::
  // Here, you can see we are appending the API endpoint with an id field.
  // When we click the field in the table, its ID is getting stored into Local Storage.
  // And in the Update page, we are retrieving it. Then, we are storing that ID in the id state.
  // After that, we pass the id to the endpoint. This allows us to update the field of which we are passing the ID.
  // Bind the updateAPIData function to the Update button.

  const updateAPIData = () => {
    // Check if firstName and lastName are not null or empty
    if (!firstName || !lastName) {
      setError("All Fields are Mandatory!");
      return;
    }
    
    // if (!firstName || !lastName) {
    //   alert("All Fields are Mandatory!");
    //   return;
    // }

    axios
      .put(`https://64f0dc548a8b66ecf77a2f9d.mockapi.io/fakeData/${id}`, {
        firstName,
        lastName,
        checkbox,
      })
      .then(() => {
        navigate("/read"); // Redirect upon successful update
      })
      .catch((error) => {
        setError("An error occurred while updating data.");
        console.error(error); // Handle the error
      });
  };

  // ===================================================================================================================

  return (
    <div className="updatePage compWrapper">
      <h2 className="main-header text-center">
        <span className="badge text-dark fs-1">React Crud Operations</span>
      </h2>
      {error && <div className="alert alert-danger text-center">{error}</div>}
      <div className="card">
        <div className="card-body">
          <div className="createTitle d-flex flex-wrap align-items-center justify-content-center">
            <h5 className="card-title">Update Component</h5>
            <Link to="/read">
              <button type="button" className="btn btn-info ms-4">
                Show Data
              </button>
            </Link>
          </div>
          <form className="update-form">
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="createCheck"
                checked={checkbox}
                onChange={() => setCheckbox(!checkbox)}
              />
              <label className="form-check-label">
                I agree to the Terms and Conditions!
              </label>
            </div>
            <button
              type="submit"
              onClick={updateAPIData}
              className="btn btn-primary"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
