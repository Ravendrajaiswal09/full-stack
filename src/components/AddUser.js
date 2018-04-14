import React, { Component } from 'react';


class AddUser extends Component {
    constructor(props) {
        super(props);
     }

    render(){
        return (
        <div className="row">
            <div className="col-md-6 well">
                <fieldset>
                    <legend>User</legend>
                    <div className="form-group">
                        <label>Name</label>
                        <input  id="name" type="text"  required className="form-control"/>
                        <span className="error"><p id="name_error"></p></span>
                        <div className="alert alert-danger">Name is required.</div>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input id="email" type="text" className="form-control"/>
                        <div className="alert alert-danger">Please type a valid email.</div>
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="text" className="form-control"/>
                    </div>
                </fieldset>
                <fieldset formGroupName="address">
                    <legend>Address</legend>
                    <div className="form-group">
                        <label>Street</label>
                        <input  id="street" type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Suite</label>
                        <input id="suite" type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>City</label>
                        <input id="city" type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>ZipCode</label>
                        <input id="zipcode" type="text" className="form-control"/>
                    </div>
                </fieldset>
                <button type="submit" className="btn btn-primary">Save</button>
            </div>
        </div>
        )
    }

}

export default AddUser
