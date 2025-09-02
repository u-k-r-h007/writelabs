import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

function ShowUser({ setId }) {
  const [show, setShow] = useState(false);
  const { users } = useSelector((state) => state.users);
  console.log(users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(deleteUser(id));
  };

  const handleEdit = (e, id) => {
    setId(id);
    navigate("/user");
  };

  return (
    <div>
      {users.length > 0 ? (
        <>
          <h1 className="text-center mt-5 underline text-primary fst-italic">
            Your Details
          </h1>
          <div className="userData mx-auto">
            {users.map((user) => (
              <div
                key={user.id}
                className="card p-3 shadow mx-auto  mt-4"
              >
                <div className="px-3">
                  <h4 className="text-secondary">
                    {user.firstName} {user.lastName}
                  </h4>
                  <h6 className="text-muted">{user.email}</h6>

                  <div className="d-flex gap-3">
                    <label>Date of Birth:</label> <span>{user.dob}</span>
                  </div>
                  <div className="d-flex gap-3">
                    <label>Address:</label> <span>{user.address}</span>
                  </div>

                 <div className="d-flex gap-5 justify-content-between">
                   <div className="mt-3">
                    <h5 className="text-primary">Education</h5>
                    {user.education && user.education.length > 0 ? (
                      user.education.map((edu, i) => (
                        <div key={i}>
                          <div className="d-flex gap-3">
                            <label>College:</label> <span>{edu.college}</span>
                          </div>
                          <div className="d-flex gap-3">
                            <label>Start Date:</label> <span>{edu.cStart}</span>
                          </div>
                          <div className="d-flex gap-3">
                            <label>End Date:</label> <span>{edu.cEnd}</span>
                          </div>
                          {i !== user.education.length - 1 && (
                            <hr className="my-2" />
                          )}
                        </div>
                      ))
                    ) : (
                      <p className="text-muted">No Education Added</p>
                    )}
                  </div>

                  <div className="mt-3">
                    <h5 className="text-primary">Experience</h5>
                    {user.experience && user.experience.length > 0 ? (
                      user.experience.map((exp, i) => (
                        <div key={i}>
                          <div className="d-flex gap-3">
                            <label>Total Exp:</label> <span>{exp.exp}</span>
                          </div>
                          <div className="d-flex gap-3">
                            <label>Company:</label> <span>{exp.company}</span>
                          </div>
                          <div className="d-flex gap-3">
                            <label>Start Date:</label>{" "}
                            <span>{exp.companyStart}</span>
                          </div>
                          <div className="d-flex gap-3">
                            <label>End Date:</label>{" "}
                            <span>{exp.companyEnd}</span>
                          </div>
                          {i !== user.experience.length - 1 && (
                            <hr className="my-2" />
                          )}
                        </div>
                      ))
                    ) : (
                      <p className="text-muted">No Experience Added</p>
                    )}
                  </div>
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
            ))}
          </div>
        </>
      ) : (
        <div>
          <h1 className="text-center mt-5 underline text-danger fst-italic">
            No user Found
          </h1>
        </div>
      )}
    </div>
  );
}

export default ShowUser;
