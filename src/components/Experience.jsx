import React from "react";

function Experience({ experience, setFormData }) {
  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedExperience = [...experience];

    updatedExperience[index] = {
      ...updatedExperience[index],
      [name]: value,
    };
    setFormData((prev) => ({
      ...prev,
      experience: updatedExperience,
    }));
  };

  const handleAddMore = () => {
    setFormData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        { exp: "", company: "", companyStart: "", companyEnd: "" },
      ],
    }));
  };

  const handleclose = () => {
    setFormData((prev) => {
      return {
        ...prev,
        experience: [
          { exp: "", company: "", companyStart: "", companyEnd: "" },
        ],
      };
    });
  };
  const handleRemove = (index) => {
    const updatedExperience = experience.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      experience: updatedExperience,
    }));
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#experienceModal"
      >
        Add Experience
      </button>

      <div
        className="modal fade px-5"
        id="experienceModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="experienceModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="experienceModalLabel">
                Add Experience
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleclose}
              ></button>
            </div>

            <div className="modal-body">
              {experience.map((exp, index) => (
                <div key={index} className="border p-3 mb-3 rounded">
                  <div className="mb-3">
                    <label className="form-label">Total Experience</label>
                    <input
                      type="text"
                      value={exp.exp}
                      onChange={(e) => handleChange(e, index)}
                      name="exp"
                      className="form-control"
                      placeholder="Enter your experience"
                    />
                  </div>

                  <select
                    className="form-select mb-3"
                    name="company"
                    value={exp.company}
                    onChange={(e) => handleChange(e, index)}
                  >
                    <option value="">Company</option>
                    <option value="google">Google</option>
                    <option value="microsoft">Microsoft</option>
                    <option value="dell">Dell</option>
                    <option value="writlabs">Writ Labs</option>
                  </select>

                  <div className="d-flex gap-3">
                    <div className="mb-3 w-50">
                      <label className="form-label">Start date</label>
                      <input
                        type="date"
                        value={exp.companyStart}
                        onChange={(e) => handleChange(e, index)}
                        name="companyStart"
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3 w-50">
                      <label className="form-label">End date</label>
                      <input
                        type="date"
                        value={exp.companyEnd}
                        onChange={(e) => handleChange(e, index)}
                        name="companyEnd"
                        className="form-control"
                      />
                    </div>
                  </div>

                  {experience.length > 1 && (
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

export default Experience;
