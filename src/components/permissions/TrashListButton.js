import { Link } from 'react-router-dom';
import React from "react";
const TrashListButton = () => {
    return (
        <Link className="nav-link" to="/trashlist">
            <button type="button" class="btn btn-info px-5 py-5 font-weight-bold">Trash  List</button>
        </Link>
    );
}

export default TrashListButton;