import React, { Component } from "react";

//jQuery libraries

import "jquery/dist/jquery.min.js";

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import { Link } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import { GetUsers,  deleteRow } from "../../service/auth";

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    try {
      GetUsers().then((res) => {
        if (res.data.data) {
            console.log(res.data.data);
          this.setState({ data: res.data.data });
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

 
  render() {
    return (
      <>
          <div className='dashbord-page'>
                    <div className='container'>
            <div className="table-responsive">
              <table
                id="datatable"
                className="table-list cruxcompetitive-table table table-striped table-bordered"
              >
                <thead>
                  <tr>
                    <th>Email</th>
                    <th>Country</th>
                    <th>Name</th>
                    <th>Training</th>
                    <th>Consultation</th>
                 
                  </tr>
                </thead>
                <tbody>
                  {
                    
                  this.state.data.map((result, i) => {
                
                    return (
                      <tr key={i}>
                        <td>{result.email}</td>
                        <td>{result.country}</td>
                        <td>{result.name}</td>
                        <td>{result.typefree}</td>
                        <td>{result.typeconsultation}</td>
                       
                    
                      </tr>
                    );
                  })
                  
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default UserList;
