import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddPermissions from "./permissions/AddPermissions";
import AddPermissionsButton from "./permissions/AddPermissionsButton";
import AssignPermissionsButton from "./permissions/AssignPermissionsButton";
import ViewPermissionButton from "./permissions/ViewPermissionsButton";
import TrashListButton from "./permissions/TrashListButton";
import Graph from "./permissions/Graph";
// import AssignPermissions from "./components/permissions/AssignPermissions";

function Dashboard() {




    return (
    //     <div id="dashboard" className="container">
    //         <div className="card">

    //             <div className="card-body">

    //                 {/* MODAL CODE */}

    //                 {/* <div className="model" id="m" >

    //                     <Modal isOpen={modelIsOpen} onRequestClose={() => setModalIsOpen(false)}
    //                         style
    //                         =
    //                         {
    //                             {
    //                                 overlay: {
    //                                     backgroundColor: 'grey'
    //                                 },
    //                                 content: {
    //                                     color: "orange"
    //                                 }
    //                             }
    //                         }
    //                     >
    //                         <div className="container mt-5">
    //                             <input type="text" class="form-control" id="name" name="permissionName" placeholder="please enter the permission" />
    //                             <br />
    //                             <select class="custom-select">
    //                                 <option selected>-----select module------</option>
    //                                 <option value="1">Document Module</option>
    //                                 <option value="2">User Module</option>
    //                                 <option value="3">Group Module</option>
    //                                 <option value="3">Assignment Module</option>
    //                                 <option value="3">Task Module</option>

    //                             </select>

    //                             <br />
    //                             <br />
    //                             <button type="button" class="btn btn-info float-right">Add</button>
    //                         </div>
    //                         <div>
    //                             <button className="btn bg-info float-center" onClick={() => setModalIsOpen(false)}>close</button>
    //                         </div>
    //                     </Modal>
    //                 </div> */}






    //                 <div class="progress">
    //                     <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
    //                 </div>

    //                 <br />
    //                 <br />

    //                 <div class="progress">
    //                     <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
    //                 </div>

    //                 <br />
    //                 <br />

    //                 <div class="progress">
    //                     <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
    //                 </div>

    //             </div>
    //         </div>

    //         <div className="container mt-4" id="permissions">

    //             <div class="row mx-md-n5 ">




    //                 <Link className="nav-link"  to="/addpermissions">
    //                     <div class="col px-md-5 "><div class="p-3 border font-weight-bold py-5 module ">Add Permissions</div></div>
    //                 </Link>




    //                 <Link className="nav-link" to="/addpermissions">
    //                     <div class="col px-md-5 " ><div class="p-3 border font-weight-bold py-5 module ">Assign Permissions</div></div>
    //                 </Link>



    //             </div>

    //             <div class="row mx-md-n5">

    //                 <Link className="nav-link" to="/addpermissions">
    //                     <div class="col px-md-5"><div class="p-3 border font-weight-bold  py-5 module ">View Permissions</div></div>
    //                 </Link>

    //                 <Link className="nav-link" to="/addpermissions">
    //                     <div class="col px-md-5 "><div class="p-3 border font-weight-bold py-5 module "> Trash Permissions</div></div>
    //                 </Link>

    //             </div>


    //         </div>


    //     </div>

  // <div id="modules">  
  
  //     <AddPermissionsButton />
  //     <AssignPermissionsButton />
  //     <ViewPermissionButton />
  //     <TrashListButton />
 
  // </div>

 
    
     
  <div class="container" id="modules" >
    <Graph />
  <div class="row mt-4 ml-4">
    <div class="col-sm ">
    <AddPermissionsButton />
    </div>
    <div class="col-sm  ">
    <AssignPermissionsButton />
    </div>
    <div class="col-sm">
    <ViewPermissionButton />
    </div>
    <div class="col-sm ">
    <TrashListButton />
    </div>
  </div>
</div>

     )
}


export default Dashboard;