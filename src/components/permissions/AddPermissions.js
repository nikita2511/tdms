import React, { Component } from "react";
import { Link } from "react-router-dom";
class AddPermissions extends Component {



    render() {


        return (
            <form>
                <div className="container card mt-5" id="addpermissionform">

                    <h2 className="text-center mt-3 font-weight-bold">Add Permission</h2>
                    <div className="container mt-5">
                        <input type="text" class="form-control" id="name" name="permissionName" placeholder="please enter the permission" />
                        <br />
                        <select class="custom-select">
                            <option selected>-----select module------</option>
                            <option value="1">Document Module</option>
                            <option value="2">User Module</option>
                            <option value="3">Group Module</option>
                            <option value="3">Assignment Module</option>
                            <option value="3">Task Module</option>

                        </select>

                        <br />
                        <br />

                        <button type="button" class="btn btn-info float-right">Add</button>

                        <Link className="nav-link" to="/Dashboard">
                        <button type="button" class="btn btn-info">cancel</button>
                        </Link>
                    </div>
                </div>
            </form>
        )
    }

}
export default AddPermissions;