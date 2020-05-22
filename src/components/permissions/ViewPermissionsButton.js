import { Link } from 'react-router-dom';
import React from "react";
const ViewPermissionButton = () => {
    return (
        <Link className="nav-link" to="/viewpermissions">
            <button type="button" class="btn btn-info py-5 font-weight-bold">View Permission</button>
        </Link>
    );
}

export default ViewPermissionButton;