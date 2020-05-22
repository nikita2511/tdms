import { Link } from 'react-router-dom';
import React from "react";
const AssignPermissionButton = () => {
    return (
        <Link className="nav-link" to="/assignmodulelist">
            <button type="button" class="btn btn-info py-5 font-weight-bold">Assign Permission</button>
        </Link>
    );
}

export default AssignPermissionButton;