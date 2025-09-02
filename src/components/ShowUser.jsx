import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

function ShowUser({ setId }) {
  const [show, setShow] = useState(false);
  const { users } = useSelector((state) => state.users);
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
    <div className="container py-5">
      {users.length > 0 ? (
        <>
          <h1 className="text-center mb-4 text-primary fw-bold">
            Your Details
          </h1>

          <div className="row justify-content-center">
            {users.map((user) => (
              <div
                key={user.id}
                className="col-md-8 col-lg-6 mb-4"
              >
                <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
                  <div className="card-body p-4">
                  
                    <div className="mb-3 text-center">
                      <h3 className="fw-bold text-secondary">
                        {user.firstName} {user.lastName}
                      </h3>
                      <p className="text-muted mb-0">{user.email}</p>
                    </div>

                  
                    <div className="bg-light p-3 rounded-3 mb-3">
                      <div className="d-flex justify-content-between mb-2">
                        <span className="fw-semibold">Date of Birth:</span>
                        <span className="badge bg-primary-subtle text-primary">
                          {user.dob}
                        </span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span className="fw-semibold">Address:</span>
                        <span className="badge bg-secondary-subtle text-dark">
                          {user.address}
                        </span>
                      </div>
                    </div>

                  
                   <div className="d-flex gap-3 justify-content-between">
                     <div className="mb-4">
                      <h5 className="text-primary border-bottom pb-1">
                        Education
                      </h5>
                      {user.education && user.education.length > 0 ? (
                        user.education.map((edu, i) => (
                          <div key={i} className="p-2 bg-light rounded-3 mb-2">
                            <p className="mb-1">
                              <strong>College:</strong> {edu.college}
                            </p>
                            <small className="text-muted">
                              {edu.cStart} → {edu.cEnd}
                            </small>
                          </div>
                        ))
                      ) : (
                        <p className="text-muted fst-italic">
                          No Education Added
                        </p>
                      )}
                    </div>

                   
                    <div>
                      <h5 className="text-primary border-bottom pb-1">
                        Experience
                      </h5>
                      {user.experience && user.experience.length > 0 ? (
                        user.experience.map((exp, i) => (
                          <div key={i} className="p-2 bg-light rounded-3 mb-2">
                            <p className="mb-1">
                              <strong>Company:</strong> {exp.company}
                            </p>
                            <p className="mb-1">
                              <strong>Total Exp:</strong> {exp.exp}
                            </p>
                            <small className="text-muted">
                              {exp.companyStart} → {exp.companyEnd}
                            </small>
                          </div>
                        ))
                      ) : (
                        <p className="text-muted fst-italic">
                          No Experience Added
                        </p>
                      )}
                    </div>
                   </div>
                  </div>

                 
                  <div className="card-footer bg-white border-0 d-flex justify-content-center gap-3 pb-4">
                    <button
                      type="button"
                      className="btn btn-primary rounded-pill px-4"
                      onClick={(e) => handleEdit(e, user.id)}
                    >
                      ✏️ Edit
                    </button>
                    <button
                      className="btn btn-danger rounded-pill px-4"
                      onClick={(e) => handleDelete(e, user.id)}
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center">
          <h1 className="text-danger fst-italic">No User Found</h1>
        </div>
      )}
    </div>
  );
}

export default ShowUser;
