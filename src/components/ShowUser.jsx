import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

function ShowUser({setId}) {
  const { users } = useSelector((state) => {
    return state.users;
  });
  
  console.log(users, "ssssssssss");

  const dispatch = useDispatch();

  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(deleteUser(id));
  };
  const navigate=useNavigate()
  const handleEdit=(e, id)=>{
setId(id)
    navigate('/user')

  }
  return (
    <div>
      <h1>Your Details</h1>

      <div className="userData mx-auto">
        {users &&
          users.map((user, index) => {
            return (
              <div key={user.id} className="card mx-auto text-center">
                <div className="d-flex gap-3 ">
                  <label htmlFor="">First name:</label>
                  <h6>{user.firstName}</h6>
                  </div>
                  <div className="d-flex gap-3">
                  <label htmlFor="">Last name:</label> <h6>{user.lastName}</h6>
                </div>
                <div className="d-flex gap-3">
                  {" "}
                  <label htmlFor="">Email:</label> <h6>{user.email}</h6>
                </div>
                <div className="d-flex gap-3">
                  <label htmlFor="">Date of Birth:</label> <h6>{user.dob}</h6>
                </div>
                <div className="d-flex gap-3">
                  {" "}
                  <label htmlFor="">address:</label>
                  <h6>{user.address}</h6>
                </div>
                <div className="d-flex gap-3">
                  {" "}
                  <label htmlFor="">College:</label>
                  <h6>{user.college}</h6>
                </div>
                <div className="d-flex gap-3">
                  <label htmlFor="">College Start Date:</label>{" "}
                  <h6>{user.cStart}</h6>
                </div>
                <div className="d-flex gap-3">
                  {" "}
                  <label htmlFor="">College end Date:</label>{" "}
                  <h6>{user.cEnd}</h6>
                </div>
                <div className="d-flex gap-3">
                  {" "}
                  <label htmlFor="">Experience:</label> <h6>{user.exp}</h6>
                </div>
                <div className="d-flex gap-3">
                  {" "}
                  <label htmlFor="">Comapny Name:</label>{" "}
                  <h6>{user.company}</h6>
                </div>
                <div className="d-flex gap-3">
                  {" "}
                  <label htmlFor="">Company Start Date:</label>{" "}
                  <h6>{user.companyStart}</h6>
                </div>
                <div className="d-flex gap-3">
                  {" "}
                  <label htmlFor="">Company end Date:</label>{" "}
                  <h6>{user.companyEnd}</h6>
                </div>
                <button
                  class="btn btn-secondary"
                  onClick={(e) => handleEdit(e, user.id)}
                >
                  Edit User
                </button>
                <button
                  class="btn btn-danger"
                  onClick={(e) => handleDelete(e, user.id)}
                >
                  Delete User
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ShowUser;
