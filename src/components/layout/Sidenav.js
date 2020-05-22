import React from "react";
import { Link } from 'react-router-dom'
function Sidenav() {
    return (


        <div className="container bg-light font-weight-bold " id="sidenav">

            <ul class="list-group list-group-flush">

                <Link className="nav-link" to="/dashboard">
                <button type="button" class="btn btn-info mt-3 px-5">Dashboard</button>
                </Link>
                
            </ul>


        </div>





    )
}
export default Sidenav;


