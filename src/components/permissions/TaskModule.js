import React, { Component } from "react";
import { Link } from 'react-router-dom';

class TaskModule extends Component {

    render() {


        return (



            <Link className="nav-link" to="/ListPermissions">
                <button type="button" class="btn btn-info text-white font-weight-bold p-3 px-3 py-4">Task Module</button>
            </Link>

        )
    }
}

export default TaskModule;