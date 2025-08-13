import React from 'react'

function Education({data,handleChange,setFormData,formData}) {
  return (
    <div>

     

<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${data}`}>
 Add Education
</button>


<div className="modal fade px-5" id={`${data}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Add Education</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body ">
     <select className="form-select w-100" aria-label="Default select example" name="degree" value={formData.degree}
            onChange={handleChange}>
  <option selected>Course</option>
  <option value="B.tech">B.tech</option>
  <option value="M.tech">M.tech</option>
  <option value="MBA">MBA</option>
  <option value="BCA">BCA</option>
  <option value="MCA">MCA</option>
</select>
      </div>
      <div class="mb-3 px-3">
          <label for="college" class="form-label">
            College Name
          </label>
          <input
            type="input"
            value={formData.college}
            onChange={handleChange}
             name="college"
            class="form-control"
            id="college"
            placeholder="Enter your college"
          />
        </div>
        <div className='d-flex gap-5 px-3'>
            <div class="mb-3">
          <label for="start" class="form-label">
            Start date
          </label>
          <input
            type="date"
            value={formData.cStart}
            onChange={handleChange}
             name="cStart"
            class="form-control"
            id="start"
            // placeholder="Enter your first name..."
          />
        </div>
        <div class="mb-3">
          <label for="end" class="form-label">
            End date
          </label>
          <input
            type="date"
            value={formData.cEnd}
            onChange={handleChange}
             name="cEnd"
            class="form-control"
            id="end"
            // placeholder="Enter your first name..."
          />
        </div>

        </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Education