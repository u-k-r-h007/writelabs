import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

function ShowUser({setId}) {

    const [show,setShow]=useState(false)
  const { users } = useSelector((state) => {
    return state.users;
  });
  
  

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
      

     { users.length>0?
    ( <>
    <h1 className="text-center mt-5 underline text-primary fst-italic">Your Details</h1>
     <div className="userData mx-auto">
        {users &&
          users.map((user, index) => {
            return (
              <div key={user.id} className="card  p-2 shadow mx-auto text-center">
               <div className="px-3">
                 <div className="d-flex gap-3 text-secondary">
                 
                  <h4>{user.firstName} {user.lastName}</h4>
                  </div>
                 
                <div className="d-flex gap-3 text-secondary">
                  
                 <h5>{user.email}</h5>
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
               </div>
               <div className="d-flex justify-content-center gap-3 mt-3">
                 <button
                 type="button"
                   className="btn btn-outline-primary btn-lg rounded-pill"
                  onClick={(e) => handleEdit(e, user.id)}
                >
                  Edit User
                </button>
                <button
                  className="btn btn-outline-danger btn-lg rounded-pill"
                  onClick={(e) => handleDelete(e, user.id)}
                >
                  Delete User
                </button>
               </div>
              </div>
            );
          })}
      </div>
    </>): (
        <div>
            <h1 className="text-center mt-5 underline text-danger fst-italic">No user Found</h1>
        </div>
      )}
    </div>
  );
}

export default ShowUser;
