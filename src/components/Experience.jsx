import React from 'react'

function Experience({setFormData,handleChange,formData}) {
  return (
    <div>

     

<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
  Add Experience
</button>


<div className="modal fade px-5" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Add Experience</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">

        <div class="mb-3">
          <label for="exp" class="form-label">
            Total Experience:
          </label>
          <input
            type="input"
            value={formData.exp}
            onChange={handleChange}
            name="exp"
            class="form-control"
            id="exp"
            placeholder="Enter your experience"
          />
        </div>
     <select class="form-select" aria-label="Default select example" name="company" value={formData.company}
            onChange={handleChange}>
  <option selected>Company</option>
  <option value="google">Google</option>
  <option value="microsoft">Microsoft</option>
  <option value="dell">Dell</option>
  <option value="writlabs">Writ Labs</option>
</select>
      </div>
     
        <div className='d-flex gap-5 px-3'>
            <div class="mb-3 ">
          <label for="start" class="form-label">
            Start date
          </label>
          <input
            type="date"
            value={formData.companyStart}
            onChange={handleChange}
            name="companyStart"
            class="form-control"
            id="start"
            // placeholder="Enter your first name..."
          />
        </div>
        <div class="mb-3 ">
          <label for="end" class="form-label">
            End date
          </label>
          <input
            type="date"
            value={formData.companyEnd}
            onChange={handleChange}
             name="companyEnd"
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

export default Experience