import React, { useEffect, useState } from "react";
import Education from "./Education";
import Experience from "./Experience";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser({ id, setId }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get users array from Redux
  const users = useSelector((state) => state.users.users);

  // If editing, find existing user
  const existingUser = id ? users.find((user) => user.id === id) : null;

  // Empty form template
  const emptyForm = {
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    address: "",
    degree: "",
    college: "",
    cStart: "",
    cEnd: "",
    exp: "",
    company: "",
    companyStart: "",
    companyEnd: "",
  };

  // Form state
  const [formData, setFormData] = useState(emptyForm);

  // Populate form when editing
  useEffect(() => {
    if (existingUser) {
      setFormData(existingUser);
    } else {
      setFormData(emptyForm);
    }
  }, [existingUser]);

  // Handle input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      dispatch(updateUser({ ...formData, id }));
      setId(null); // exit edit mode
    } else {
      dispatch(addUser(formData));
    }

    // Clear form fields
    setFormData(emptyForm);

    navigate("/show");
  };

  return (
    <div>
      <h1 className="mx-auto">{id ? "Edit User" : "Create User"}</h1>
      <form className="d-flex flex-column mx-auto w-75" onSubmit={handleSubmit}>
        {/* First Name */}
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
          />
        </div>

        {/* Last Name */}
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
          />
        </div>

        {/* Email */}
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
          />
        </div>

        {/* DOB */}
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

        {/* Address */}
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

        {/* Education and Experience */}
        <div className="d-flex gap-5 mb-5">
          <Education
            handleChange={handleChange}
            setFormData={setFormData}
            formData={formData}
          />
          <Experience
            handleChange={handleChange}
            setFormData={setFormData}
            formData={formData}
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          {id ? "Update User" : "Create User"}
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
