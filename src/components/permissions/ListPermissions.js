

import React, { Component } from 'react';
import 'react-table-6/react-table.css';

class AssignPermissions extends Component {

  render() {

    return (
        <div className="container " id="listpermission"> 
      <table className="table table-striped table-bordered" id="view_table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Permissions</th>
            <th scope="col" className="text-center">Edit</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Delete Trainee</td>
            <td>
              <div className="text-center px-2">

                <div className="input-group mb-3 float-left ml-3" id="roles_checkbox">
                <button type="button" class="btn btn-success px-4">Edit</button>
                </div>

                <div className="input-group mb-3 float-left ml-4" id="roles_checkbox">
                <button type="button" class="btn btn-danger">Delete</button>
                </div>


               


              </div>

            </td>

          </tr>


        
        </tbody>
      </table>

      <div className="float-right"><nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <span class="page-link">Previous</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
      <span class="page-link">
        2
        <span class="sr-only">(current)</span>
      </span>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav></div>
      </div>
      )
  }}
  export default AssignPermissions;
