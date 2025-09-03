import React from "react";

function Education({ education, setFormData, data }) {
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedEducation = [...education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [name]: value,
    };
    setFormData((prev) => ({
      ...prev,
      education: updatedEducation,
    }));
  };

  const handleClose = () => {
  setFormData((prev) => ({
    ...prev,
    education: [{ degree: "", college: "", cStart: "", cEnd: "" }],
  }));
};

  const handleAddMore = () => {
    setFormData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        { degree: "", college: "", cStart: "", cEnd: "" },
      ],
    }));
  };

  const handleRemove = (index) => {
    const updatedEducation = education.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      education: updatedEducation,
    }));
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#${data}`}
      >
        Add Education
      </button>

      <div
        className="modal fade px-5"
        id={`${data}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="educationModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="educationModalLabel">
                Add Education
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleClose}
              ></button>
            </div>

            <div className="modal-body">
              {education && education?.map((edu, index) => (
                <div key={index} className="border p-3 mb-3 rounded">
                  <select
                    className="form-select mb-3"
                    name="degree"
                    value={edu.degree}
                    onChange={(e) => handleChange(e, index)}
                  >
                    <option value="">Course</option>
                    <option value="B.tech">B.tech</option>
                    <option value="M.tech">M.tech</option>
                    <option value="MBA">MBA</option>
                    <option value="BCA">BCA</option>
                    <option value="MCA">MCA</option>
                  </select>

                  <div className="mb-3">
                    <label className="form-label">College Name</label>
                    <input
                      type="text"
                      name="college"
                      value={edu.college}
                      onChange={(e) => handleChange(e, index)}
                      className="form-control"
                      placeholder="Enter your college"
                    />
                  </div>

                  <div className="d-flex gap-3">
                    <div className="mb-3 w-50">
                      <label className="form-label">Start date</label>
                      <input
                        type="date"
                        name="cStart"
                        value={edu.cStart}
                        onChange={(e) => handleChange(e, index)}
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3 w-50">
                      <label className="form-label">End date</label>
                      <input
                        type="date"
                        name="cEnd"
                        value={edu.cEnd}
                        onChange={(e) => handleChange(e, index)}
                        className="form-control"
                      />
                    </div>
                  </div>

                  {education.length > 1 && (
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={() => handleRemove(index)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}

              <button
                type="button"
                className="btn btn-outline-secondary w-100"
                onClick={handleAddMore}
              >
                + Add More
              </button>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
