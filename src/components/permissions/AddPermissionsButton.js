import { Link } from 'react-router-dom';
import React from "react";
const CreatePermissionButton = () => {
    return (
        <Link className="nav-link" to="/addpermissions">
            <button type="button" class="btn btn-info py-5 font-weight-bold">Add Permission</button>
        </Link>
    );
}

export default CreatePermissionButton;