import React, { Component } from "react";
import { Link } from 'react-router-dom';

class GroupModule extends Component{

render(){


    return(
        

       
        <Link className="nav-link" to="/ListPermissions">
            <button type="button" class="btn btn-info text-white font-weight-bold p-3 py-4">Group Module</button>
        </Link>

    )
}
}

export default GroupModule;