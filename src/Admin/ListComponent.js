import React, { Component } from "react";

//jQuery libraries

import "jquery/dist/jquery.min.js";

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import { GetInitiative, deleteRow, newVersion, getSteps } from "../service/auth";

class ListComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.handleData = this.handleData.bind(this);
  }

  componentDidMount() {
    this.getInitiative();
  }

  getInitiative(){
    try {
      GetInitiative().then((res) => {
        if (res.data.data) {
          this.setState({ data: res.data.data });
          this.handleData();
          this.forceUpdate();
        }
      });
    } catch (err) {
      console.log(err);
    }
  }

  handleData() {
    $(document).ready(function () {
      $("#datatable").DataTable({
        order: [[1, "desc"]],
        bDestroy: true,
        "language": {
          "emptyTable": "No scorecards created yet"
        }
      });
    });
  }

  exportPdf(id) {
    //let result = <Results/>
    window.location = "/user/results/" + id;
  }

  delRowData = async (id) => {
    let data = await deleteRow(id);
    if (data.data) {
      let res = await GetInitiative();
      this.setState({ data: res.data.data });
      this.forceUpdate();
    }
  };

  delRow = (id) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <h1>Are you sure?</h1>
            <p>
              Are you sure you want to delete this scorecard? <br />
              You will not be able recover the scorecard once you delete it.
            </p>
            <button class="btn btn-danger" onClick={onClose}>
              No
            </button>
            &nbsp;
            <button
              class="btn btn-primary"
              onClick={() => {
                this.delRowData(id);
                onClose();
              }}
            >
              Yes, Delete it!
            </button>
          </div>
        );
      },
    });
  };

  newVersionData = async (id) => {
    let data = await newVersion(id);
    if (data.data) {
      let res = await GetInitiative();
      this.setState({ data: res.data.data });
      this.forceUpdate();
    }

  };

  newVersion = (id) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="custom-ui">
            <h1>Create New Version...</h1>
            <p>
              Are you sure you want to create copy of existing scorecard? <br />
              This will create new copy of scorecard with -copy name.
            </p>
            <button class="btn btn-danger" onClick={onClose}>
              No
            </button>
            &nbsp;
            <button
              class="btn btn-primary"
              onClick={() => {
                this.newVersionData(id);
                onClose();
              }}
            >
              Yes, Create it!
            </button>
          </div>
        );
      },
    });
  };


  goSteps = async (id) => {
 
    let url = "/user/";
    let redirect;
    localStorage.setItem("evaluation_id", id);
    
    redirect =  await getSteps(id).then((res) => {
      if (res.data === "Initiative") {
        redirect = url + "problemdescription";
      } else if (res.data === "dimentionalProblem") {
        redirect = url + "problemdescription";
      } else if (res.data === "customeractorstakeholder") {
        redirect = url + "customeractor";
      } else if (res.data === "problemvalidationscore") {
        redirect = url + "problemvalidation";
      } else {
        redirect = url + res.data;
      }
      return redirect;
    });

    window.location.href= redirect;

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
                  {this.state.data.map((result, i) => {
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
                        <td>
                          <Link to={id}>{result.initiative_name}</Link>
                        </td>
                        <td>
                        <Link to={"/user/results/" + result.evaluation_id}>{result.scorecard_name}</Link>
                        </td>
                        <td>{str}</td>
                        <td>{result.version}</td>
                        <td>{result.opt_score}</td>
                        <td>{result.execution_score}</td>
                        <td>
                          <ul className="table-icon">
                            <li>
                              {/* <Link to={id} variant="primary">
                                <i className="fa-solid fa-pencil"></i>
                              </Link> */}
                              <button
                                onClick={(e) =>
                                  this.goSteps(result.evaluation_id)
                                }
                              >
                                <i className="fa-solid fa-pencil"></i>
                              </button>
                            </li>
                            <li>
                              <button
                                onClick={(e) =>
                                  this.newVersion(result.evaluation_id)
                                }
                              >
                                <i className="fa-solid fa-book"></i>
                              </button>
                            </li>
                            <li>
                              <button
                                onClick={(e) =>
                                  this.exportPdf(result.evaluation_id)
                                }
                              >
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
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default ListComponent;
