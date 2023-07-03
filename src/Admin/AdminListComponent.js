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
import { AdminGetInitiative,  deleteRow } from "../service/auth";

class AdminListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.handleData = this.handleData.bind(this);
  }

  componentDidMount() {
    try {
      AdminGetInitiative().then((res) => {
        this.handleData();
        if (res.data.data) {
          this.setState({ data: res.data.data });
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.date !== prevProps.date) {
      this.setState({ data: []});
      AdminGetInitiative(this.props.date.fromdate,this.props.date.todate).then((res) => {
        if (res.data.data) {
          this.setState({ data: res.data.data });
        }
      });
    }
   }

  handleData() {
    $(document).ready(function () {
      $("#datatable").DataTable({
        order: [[1, "desc"]],
        bDestroy: true,
      });
    });
  }

  delRowData= async (id)=>{
    let data = await deleteRow(id);
    if (data.data) {
      let res = await AdminGetInitiative();
      this.setState({ data: res.data.data });
      this.forceUpdate();
    }
  };

  delRow =  (id) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className='custom-ui'>
            <h1>Are you sure?</h1>
            <p>You want to delete this record?</p>
            <button class="btn btn-danger" onClick={onClose}>No</button>
            &nbsp;
            <button class="btn btn-primary"
              onClick={() => {
                this.delRowData(id);
                onClose();
              }}
            >
              Yes, Delete it!
            </button>
          </div>
        );
      }
    });
  };

  render() {
    return (
      <>
        <div className="MainDiv">
          <div className="container">
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
                    {/* <th>Consultation</th>
                    <th>Regstration Date</th> */}
                    <th>Initiative</th>
                    <th>Scorecard Name</th>
                    <th>Situation</th>
                    <th>Version</th>
                    <th>Opt Score</th>
                    <th>Execution Score</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    
                  this.state.data.map((result, i) => {
                    let id = "/user/initiative/" + result.evaluation_id;

                    let str = "";
                    if (result.situation === "1") {
                      str = "Evaluate an idea";
                    }
                    if (result.situation === "2") {
                      str = "Evaluating an investment opportunity";
                    }
                    if (result.situation === "3") {
                      str = "Evaluating exiting Product";
                    }
                    if (result.situation === "4") {
                      str = "Evaluating in development Product";
                    }

                    return (
                      <tr key={i}>
                        <td>{result.email}</td>
                        <td>{result.country}</td>
                        <td>{result.name}</td>
                        {/* <td>{result.typefree}</td>
                        <td>{result.typeconsultation}</td> */}
                        <td>{result.created_at}</td>
                        <td><Link to={id}>{result.initiative_name}</Link></td>
                        <td><Link to={"/user/results/"+result.evaluation_id}>{result.scorecard_name}</Link></td>
                        <td>{str}</td>
                        <td>{result.version}</td>
                        <td>{result.opt_score}</td>
                        <td>{result.execution_score}</td>
                        <td>
                          <ul className="table-icon">
                            <li>
                              <Link to={id} variant="primary">
                                <i className="fa-solid fa-pencil"></i>
                              </Link>
                            </li>
                            {/* <li>
                              <button>
                                <i className="fa-solid fa-book"></i>
                              </button>
                            </li> */}
                            <li>
                              <button>
                                <i className="fa-solid fa-cloud-arrow-down"></i>
                              </button>
                            </li>
                            <li>
                              <button
                                className="btn btn-danger btn-sm"
                                onClick={(e) =>
                                  this.delRow(result.evaluation_id)
                                }
                              >
                                <i className="fa-solid fa-trash-can"></i>
                              </button>
                            </li>
                          </ul>
                        </td>
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
export default AdminListComponent;
