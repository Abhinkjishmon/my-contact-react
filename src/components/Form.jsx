import React from 'react'

const Form = () => {
    return (
        <div className="col-sm-4 shadow rounded g-5">
            <h1 className="text-center pt-3 text-secondary h2">Add Contact</h1>
            <form>
                <div className="form-group">
                    <label className="col-form-label">Name:</label>
                    <input type="text" className="form-control" />
                    <small className="text-danger">Name is Required</small>
                </div>
                <div className="form-group">
                    <label className="col-form-label">Email:</label>
                    <input type="text" className="form-control" />
                    <small className="text-danger">Email is Required</small>
                </div>
                <div className="form-group">
                    <label className="col-form-label">Phone:</label>
                    <input type="text" className="form-control" />
                    <small className="text-danger">Phone is Required</small>
                </div>
                <input type="submit" className="btn btn-primary my-3" value="Add Contact" />
            </form>
        </div>
    )
}

export default Form