import React, { Component } from "react";
import { Link } from 'react-router-dom';

class UserModule extends Component{

render(){


    return(
        

       
        <Link className="nav-link" to="/ListPermissions">
            <button type="button" class="btn btn-info text-white font-weight-bold p-3 py-4 px-4">User Module</button>
        </Link>

    )
}
}

export default UserModule;