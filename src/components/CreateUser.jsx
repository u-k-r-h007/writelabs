import React, { useEffect, useState } from "react";
import Education from "./Education";
import Experience from "./Experience";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser({ id, setId }) {
  console.log(id, "ccccccccc");

  const [formData, setFormData] = useState({
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
  });

      
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updateUser({ ...formData, id: id }));

      navigate("/show");
    } else {
      dispatch(addUser(formData));
      navigate("/show");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
        
  return (
    <div>
      <h1 className="mx-auto">Create User</h1>
      <form action="" className="d-flex flex-column mx-auto w-75">
        <div class="mb-3">
          <label for="fname" class="form-label">
            First Name
          </label>
          <input
            type="input"
            value={formData.firstName}
            onChange={handleChange}
            class="form-control"
            id="fname"
            name="firstName"
            placeholder="Enter your first name..."
          />
        </div>
        <div class="mb-3">
          <label for="lname" class="form-label">
            Last Name
          </label>
          <input
            type="input"
            value={formData.lastName}
            onChange={handleChange}
            class="form-control"
            id="lname"
            name="lastName"
            placeholder="Enter your last name..."
          />
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">
            Email
          </label>
          <input
            type="input"
            value={formData.email}
            onChange={handleChange}
            class="form-control"
            name="email"
            id="email"
            placeholder="Enter your email..."
          />
        </div>
        <div class="mb-3">
          <label for="dob" class="form-label">
            Date of Birth
          </label>
          <input
            type="date"
            value={formData.dob}
            onChange={handleChange}
            name="dob"
            class="form-control"
            id="dob"
            placeholder="Enter your email..."
          />
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">
            Address
          </label>
          <textarea
            class="form-control"
            id="address"
            rows="3"
            value={formData.address}
            onChange={handleChange}
            name="address"
          ></textarea>
        </div>

        <div className="d-flex gap-5 mb-5">
          <div>
            <Education
              handleChange={handleChange}
              setFormData={setFormData}
              formData={formData}
            />
          </div>

          <div>
            {" "}
            <Experience
              handleChange={handleChange}
              setFormData={setFormData}
              formData={formData}
            />
          </div>
        </div>

        <button type="submit" class="btn btn-primary" onClick={handleSubmit}>
          {id ? "Edit user" : "create User"}
        </button>
      </form>
    </div>
  );
}

export default CreateUser;
