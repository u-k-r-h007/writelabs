import React, { useEffect, useState } from "react";
import Education from "./Education";
import Experience from "./Experience";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser({ id, setId }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector((state) => state.users.users);

  const existingUser = id ? users.find((user) => user.id === id) : null;

 
  const emptyForm = {
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    address: "",
    education: [
      { degree: "", college: "", cStart: "", cEnd: "" }
    ],
    experience: [
      { exp: "", company: "", companyStart: "", companyEnd: "" }
    ]
  };

  const [formData, setFormData] = useState(emptyForm);

  useEffect(() => {
    if (existingUser) {
      setFormData(existingUser);
    } else {
      setFormData(emptyForm);
    }
  }, [existingUser]);

  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      dispatch(updateUser({ ...formData, id }));
      setId(null);
    } else {
      dispatch(addUser(formData));
    }

    setFormData(emptyForm);
    navigate("/show");
  };

  return (
    <div>
      <h1 className="text-center mt-5 underline text-primary fst-italic">
        {id ? "Edit User" : "Create User"}
      </h1>

      <form
        className="d-flex flex-column mx-auto w-75"
        onSubmit={handleSubmit}
      >
       
        <div className="mb-3">
          <label htmlFor="fname" className="form-label">First Name</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            className="form-control"
            id="fname"
            name="firstName"
            placeholder="Enter your first name..."
            required
          />
        </div>

      
        <div className="mb-3">
          <label htmlFor="lname" className="form-label">Last Name</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            className="form-control"
            id="lname"
            name="lastName"
            placeholder="Enter your last name..."
            required
          />
        </div>

      
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
            name="email"
            id="email"
            placeholder="Enter your email..."
            required
          />
        </div>

      
        <div className="mb-3">
          <label htmlFor="dob" className="form-label">Date of Birth</label>
          <input
            type="date"
            value={formData.dob}
            onChange={handleChange}
            name="dob"
            className="form-control"
            id="dob"
          />
        </div>

      
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <textarea
            className="form-control"
            id="address"
            rows="3"
            value={formData.address}
            onChange={handleChange}
            name="address"
          ></textarea>
        </div>

     
        <div className="d-flex gap-5 mb-5">
          <Education
            education={formData.education}
            setFormData={setFormData}
          />
          <Experience
            experience={formData.experience}
            setFormData={setFormData}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          {id ? "Update User" : "Create User"}
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
