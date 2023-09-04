import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// reffrence
// https://www.freecodecamp.org/news/how-to-perform-crud-operations-using-react/

const Read = () => {
  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://64f0dc548a8b66ecf77a2f9d.mockapi.io/fakeData/`)
      .then((response) => {
        console.log(response.data);
        setAPIData(response.data);
      });
  }, []);

  // Setting data in the Local Storage
  const setData = (data) => {
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Checkbox Value", checkbox);
  };

  // ==================================================================================================
  // Note :::  getData
  // We need to load the table data after it has been deleted.
  // So, create a function to load the API data.

  const getData = () => {
    axios
      .get(`https://64f0dc548a8b66ecf77a2f9d.mockapi.io/fakeData`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  // Delete Record
  const onDelete = (id) => {
    axios
      .delete(`https://64f0dc548a8b66ecf77a2f9d.mockapi.io/fakeData/${id}`)
      .then(() => {
        getData();
      });
  };
  // ==================================================================================================

  return (
    <div className="readPage compWrapper">
      <div className="readtTitle d-flex flex-wrap align-items-center justify-content-center">
        <h2 className="main-header text-center">
          <span className="badge text-dark fs-1">Read Component</span>
        </h2>
        <Link to="/create">
          <button type="button" className="btn btn-info ms-4">
            Create Data
          </button>
        </Link>
      </div>
      <div className="card">
        <div className="card-body">
          <table className="table table-bordered table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Checkbox Value</th>
                <th scope="col">Update</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {APIData?.map((data) => {
                return (
                  <tr key={data.id} id={data.id}>
                    <td>{data.firstName}</td>
                    <td>{data.lastName}</td>
                    <td>{data.checkbox ? "Checked" : "Unchecked"}</td>
                    <td>
                      <Link to="/update">
                        <button
                          onClick={() => setData(data)}
                          type="button"
                          className="btn btn-success"
                        >
                          Edit
                        </button>
                      </Link>
                    </td>
                    <td>
                      <Link>
                        <button
                          onClick={() => onDelete(data.id)}
                          type="button"
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Read;
