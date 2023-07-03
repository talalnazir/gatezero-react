import { Container, Form, Row, Button, Table } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "./Header2";
import Initiativeheader from "../Component/Initiativeheader";
import { useSelector, useDispatch } from "react-redux";
import { setSolutionscorecard } from "../../Reducer/reducer";
import ReactLoading from "react-loading";
import { setJson, getJson } from "../../service/auth";

export default function Solutionscorecard() {
  let loader;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let evaluation_id = localStorage.getItem("evaluation_id");

  const [issubmit, setSubmit] = useState(false);
  const [total, setTotal] = useState("");
  const [is_nogo, setNogo] = useState(false);

  const [state, setState] = useState({
    opportunitywindow: "",
    expectedsolutionlife: "",
    costofservice: "",
    timetoresults: "",
    solutionprovider: "",
    timetomarket: "",
    timetorevenue: "",
    productteamexperience: "",
    researchexperience: "",
    effortforresults: "",
    accesstosolution: "",
    domainexpertise: "",
    reliability: "",
    sustainedcompetitive: "",
    technologysolution: "",
    budgetforbuilding: "",
    techtalent: "",
    teamrecord: "",
    fullcontrol: "",
    total:""
  });

  const setRedux = (data, json, evaluation_id) => {
    dispatch(
      setSolutionscorecard({
        data,
        json,
        evaluation_id,
      })
    );
    setJson(json, evaluation_id);
   // alert(is_nogo);
   navigate("/user/cruxcompetitive");

  };

  const setData = (e) => {
    if (e.target.name && e.target.value) {
      const { name, value } = e.target;

      setState((prev) => ({
        ...prev,
        [name]:  parseInt(value),
      }));
    }
  };


  const totalData = (data) => {
    let sum = 0;
    setNogo(false)

    for (let [key, val] of Object.entries(data)) {
      if(key!="total"){

        console.log("Scorecard");

        console.log(key == "opportunitywindow" && val == "0");

        console.log(key);
        console.log(val);

        if (key == "opportunitywindow" && val == "0"){ 
          setNogo(true)
        } else if (key == "expectedsolutionlife" && val == "0"){
          setNogo(true)
        }else if (key == "timetomarket" && val == "2"){
          setNogo(true)
        } else if (key == "technologysolution" && val == "0"){
          setNogo(true)
        }else if (key == "techtalent" && val == "0"){
          setNogo(true)
        }
      if (key == "timetomarket" && val == "2"){

        sum += parseInt(0);

      }else{

        sum += parseInt(val?val:0);

      }
      }
    }
    return sum;
  };

  const submitData = (event) => {
    setRedux(
      state,
      JSON.stringify({ solutionscorecard: { ...state, total: totalData(state) } , is_nogo_solution:is_nogo }),
      evaluation_id
    );
  };

  useEffect(() => {
    setTotal(totalData({...state}));
  }, [state]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSubmit(true);
    getJson(evaluation_id).then((res) => {
      let data = JSON.parse(res.data.data.json);
      if (data.solutionscorecard) {
        setTotal(totalData(data.solutionscorecard));
        setState({...data.solutionscorecard});
      }
      setSubmit(false);
    });
  }, []);

  if (issubmit) {
    loader = <ReactLoading type="bubbles" color="#162c5d" width={100} />;
  }

  return (
    <div>
      {" "}
      <Header2 />
      <div className="page-wraper">
        <div className="Probdesc-page">
        <Initiativeheader eid={evaluation_id}/>
          <Container>
            <Row>
            {/* <div className="col-md-12">
                   
                    <div className="next-back-button">{loader}
                      <Button
                        variant="primary button-green"
                        onClick={() => navigate(-1)}
                      >
                        Back
                      </Button>
                      <Button
                        variant="primary button-blue"
                        onClick={(e) => {
                          submitData(e);
                        }}
                      >
                        Next
                      </Button>
                    </div>
                  </div> */}
              <div className="dimentional-title">
                <h2>Solution Scorecard </h2>{loader}
                <p>
                  Solution Scorecard evaluates effectiveness of your solution to
                  solve the problem. <br />
                  Solution scorecaed also enables you to understand many
                  critical aspect of the solution as your are evaluating it
                </p>
              </div>
              <div className="source-table">
                <Table striped cellSpacing="0" cellPadding="0">
                  <tbody>
                    <tr>
                      <td colSpan="6">
                        <Table striped cellSpacing="0" cellPadding="0">
                          <tbody>
                            <tr>
                              <td>
                                <Table
                                  className="table-pd"
                                  striped
                                  cellSpacing="0"
                                  cellPadding="0"
                                >
                                  <thead>
                                    <tr>
                                      <th>Category</th>
                                      <th>Score</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <h2>
                                          Opportunity Window ( Time available to
                                          launch a solution)
                                        </h2>
                                      </td>
                                      <td>
                                        <Form.Group
                                          className="form-group"
                                          controlId="formGridState"
                                        >
                                          <Form.Select
                                            name="opportunitywindow"
                                            value={state.opportunitywindow}
                                            onChange={(e) => {
                                              setData(e);
                                            }}
                                          >
                                            <option value="">
                                              -- Select One --
                                            </option>
                                            <option value="0">Months</option>
                                            <option value="1">Years</option>
                                          </Form.Select>
                                        </Form.Group>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2>Expected Solution Life</h2>
                                      </td>
                                      <td>
                                        <Form.Group
                                          className="form-group"
                                          controlId="formGridState"
                                        >
                                          <Form.Select
                                            name="expectedsolutionlife"
                                            value={state.expectedsolutionlife}
                                            onChange={(e) => {
                                              setData(e);
                                            }}
                                          >
                                            <option value="">
                                              -- Select One --
                                            </option>
                                            <option value="0">Months</option>
                                            <option value="1">Years</option>
                                          </Form.Select>
                                        </Form.Group>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2>Cost of Service</h2>
                                      </td>
                                      <td>
                                        <Form.Group
                                          className="form-group"
                                          controlId="formGridState"
                                        >
                                          <Form.Select
                                            name="costofservice"
                                            value={state.costofservice}
                                            onChange={(e) => {
                                              setData(e);
                                            }}
                                          >
                                            <option value="">
                                              -- Select One --
                                            </option>
                                            <option value="3">Low</option>
                                            <option value="1">Med</option>
                                            <option value="-2">High</option>
                                          </Form.Select>
                                        </Form.Group>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2>
                                          Time to Results (How long it takes for
                                          a customer to finish a meaningful
                                          action, interaction session time,
                                          series of actions )
                                        </h2>
                                      </td>
                                      <td>
                                        <Form.Group
                                          className="form-group"
                                          controlId="formGridState"
                                        >
                                          <Form.Select
                                            name="timetoresults"
                                            value={state.timetoresults}
                                            onChange={(e) => {
                                              setData(e);
                                            }}
                                          >
                                            <option value="">
                                              -- Select One --
                                            </option>
                                            <option value="3">Wow</option>
                                            <option value="2">Good</option>
                                            <option value="-3">Sucks</option>
                                            <option value="0">Unknown</option>
                                          </Form.Select>
                                        </Form.Group>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2>Reputation od Solution Provider</h2>
                                      </td>
                                      <td>
                                        <Form.Group
                                          className="form-group"
                                          controlId="formGridState"
                                        >
                                          <Form.Select
                                            name="solutionprovider"
                                            value={state.solutionprovider}
                                            onChange={(e) => {
                                              setData(e);
                                            }}
                                          >
                                            <option value="">
                                              -- Select One --
                                            </option>
                                            <option value="-2">Low</option>
                                            <option value="0">Mid</option>
                                            <option value="2">High</option>
                                          </Form.Select>
                                        </Form.Group>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2>
                                          Time to Market: How soon can you
                                          launch
                                        </h2>
                                      </td>
                                      <td>
                                        <Form.Group
                                          className="form-group"
                                          controlId="formGridState"
                                        >
                                          <Form.Select
                                            name="timetomarket"
                                            value={state.timetomarket}
                                            onChange={(e) => {
                                              setData(e);
                                            }}
                                          >
                                            <option value="">
                                              -- Select One --
                                            </option>
                                            <option value="1">
                                              {
                                                "Opportunity windows > Time to market by 1 year+"
                                              }
                                            </option>
                                            <option value="0">
                                              {
                                                "Opportunity windows > Time to market by less than 1 year"
                                              }
                                            </option>
                                            <option value="2">
                                              {
                                                "Opportunity windows > Time to market"
                                              }
                                            </option>
                                          </Form.Select>
                                        </Form.Group>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2>
                                          Time to Revenue: How soon can you make
                                          your first $
                                        </h2>
                                      </td>
                                      <td>
                                        <Form.Group
                                          className="form-group"
                                          controlId="formGridState"
                                        >
                                          <Form.Select
                                            name="timetorevenue"
                                            value={state.timetorevenue}
                                            onChange={(e) => {
                                              setData(e);
                                            }}
                                          >
                                            <option value="">
                                              -- Select One --
                                            </option>
                                            <option value="1">
                                              {" "}
                                              {"< 1 Y"}
                                            </option>
                                            <option value="0">
                                              {" "}
                                              {"> 1 Y"}
                                            </option>
                                          </Form.Select>
                                        </Form.Group>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2>Product Team Experience</h2>
                                      </td>
                                      <td>
                                        <Form.Group
                                          className="form-group"
                                          controlId="formGridState"
                                        >
                                          <Form.Select
                                            name="productteamexperience"
                                            value={state.productteamexperience}
                                            onChange={(e) => {
                                              setData(e);
                                            }}
                                          >
                                            <option value="">
                                              -- Select One --
                                            </option>
                                            <option value="3">
                                              Track Record of Profitable Product
                                            </option>
                                            <option value="-3">
                                              No Experience
                                            </option>
                                          </Form.Select>
                                        </Form.Group>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2>Research Experience</h2>
                                      </td>
                                      <td>
                                        <Form.Group
                                          className="form-group"
                                          controlId="formGridState"
                                        >
                                          <Form.Select
                                            name="researchexperience"
                                            value={state.researchexperience}
                                            onChange={(e) => {
                                              setData(e);
                                            }}
                                          >
                                            <option value="">
                                              -- Select One --
                                            </option>
                                            <option value="3">High</option>
                                            <option value="1">Mid</option>
                                            <option value="-3">Low</option>
                                          </Form.Select>
                                        </Form.Group>
                                      </td>
                                    </tr>
                                  </tbody>
                                </Table>
                              </td>
                              <td>
                                <Table
                                  className="table-pd"
                                  striped
                                  cellSpacing="0"
                                  cellPadding="0"
                                >
                                  <thead>
                                    <tr>
                                      <th>Category</th>
                                      <th>Score</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <h2>
                                          Effort for results(how much effort a customer has to put in to use your solution)
                                        </h2>
                                      </td>
                                      <td>
                                        <Form.Group
                                          className="form-group"
                                          controlId="formGridState"
                                        >
                                          <Form.Select
                                            name="effortforresults"
                                            value={state.effortforresults}
                                            onChange={(e) => {
                                              setData(e);
                                            }}
                                          >
                                            <option value="">
                                              -- Select One --
                                            </option>
                                            <option value="2">Wow</option>
                                            <option value="1">
                                              Acceptable
                                            </option>
                                            <option value="-2">Sucks</option>
                                          </Form.Select>
                                        </Form.Group>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2>
                                          Access to solution (customer on
                                          boarding effort)
                                        </h2>
                                      </td>
                                      <td>
                                        <Form.Group
                                          className="form-group"
                                          controlId="formGridState"
                                        >
                                          <Form.Select
                                            name="accesstosolution"
                                            value={state.accesstosolution}
                                            onChange={(e) => {
                                              setData(e);
                                            }}
                                          >
                                            <option value="">
                                              -- Select One --
                                            </option>
                                            <option value="1">Easy</option>
                                            <option value="0">Ok</option>
                                            <option value="-4">Hard</option>
                                          </Form.Select>
                                        </Form.Group>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2>Domain Expertise</h2>
                                      </td>
                                      <td>
                                        <Form.Group
                                          className="form-group"
                                          controlId="formGridState"
                                        >
                                          <Form.Select
                                            name="domainexpertise"
                                            value={state.domainexpertise}
                                            onChange={(e) => {
                                              setData(e);
                                            }}
                                          >
                                            <option value="">
                                              -- Select One --
                                            </option>
                                            <option value="4">High</option>
                                            <option value="1">Mid</option>
                                            <option value="-7">Low</option>
                                          </Form.Select>
                                        </Form.Group>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2>
                                          reliability: How often your solution
                                          works
                                        </h2>
                                      </td>
                                      <td>
                                        <Form.Group
                                          className="form-group"
                                          controlId="formGridState"
                                        >
                                          <Form.Select
                                            name="reliability"
                                            value={state.reliability}
                                            onChange={(e) => {
                                              setData(e);
                                            }}
                                          >
                                            <option value="">
                                              -- Select One --
                                            </option>
                                            <option value="1">99.99</option>
                                            <option value="0">
                                              {"<99.99"}
                                            </option>
                                          </Form.Select>
                                        </Form.Group>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2>
                                          Ability to have sustained Competitive
                                          advantage for 5 years
                                        </h2>
                                      </td>
                                      <td>
                                        <Form.Group
                                          className="form-group"
                                          controlId="formGridState"
                                        >
                                          <Form.Select
                                            name="sustainedcompetitive"
                                            value={state.sustainedcompetitive}
                                            onChange={(e) => {
                                              setData(e);
                                            }}
                                          >
                                            <option value="">
                                              -- Select One --
                                            </option>
                                            <option value="-1">Low</option>
                                            <option value="1">Mid</option>
                                            <option value="4">High</option>
                                          </Form.Select>
                                        </Form.Group>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2>Technology Solution Feasibility</h2>
                                      </td>
                                      <td>
                                        <Form.Group
                                          className="form-group"
                                          controlId="formGridState"
                                        >
                                          <Form.Select
                                            name="technologysolution"
                                            value={state.technologysolution}
                                            onChange={(e) => {
                                              setData(e);
                                            }}
                                          >
                                            <option value="">
                                              -- Select One --
                                            </option>
                                            <option value="1">Yes</option>
                                            <option value="0">No</option>
                                            <option value="-2">
                                              Round About
                                            </option>
                                          </Form.Select>
                                        </Form.Group>
                                      </td>
                                    </tr>
                                    {/* <tr>
                                      <td>
                                        <h2>Budget for building solution</h2>
                                      </td>
                                      <td>
                                        <Form.Group
                                          className="form-group"
                                          controlId="formGridState"
                                        >
                                          <Form.Select
                                            name="budgetforbuilding"
                                            value={state.budgetforbuilding}
                                            onChange={(e) => {
                                              setData(e);
                                            }}
                                          >
                                            <option value="">
                                              -- Select One --
                                            </option>
                                            <option value="0">
                                              See Funding Score
                                            </option>
                                          </Form.Select>
                                        </Form.Group>
                                      </td>
                                    </tr> */}
                                    <tr>
                                      <td>
                                        <h2>Tech Talent to build solution</h2>
                                      </td>
                                      <td>
                                        <Form.Group
                                          className="form-group"
                                          controlId="formGridState"
                                        >
                                          <Form.Select
                                            name="techtalent"
                                            value={state.techtalent}
                                            onChange={(e) => {
                                              setData(e);
                                            }}
                                          >
                                            <option value="">
                                              -- Select One --
                                            </option>
                                            <option value="1">Confident</option>
                                            <option value="-1">
                                              Experimental
                                            </option>
                                            <option value="0">No</option>
                                          </Form.Select>
                                        </Form.Group>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2>Team Record</h2>
                                      </td>
                                      <td>
                                        <Form.Group
                                          className="form-group"
                                          controlId="formGridState"
                                        >
                                          <Form.Select
                                            name="teamrecord"
                                            value={state.teamrecord}
                                            onChange={(e) => {
                                              setData(e);
                                            }}
                                          >
                                            <option value="">
                                              -- Select One --
                                            </option>
                                            <option value="1">Success</option>
                                            <option value="-1">No</option>
                                            <option value="-4">Failure</option>
                                          </Form.Select>
                                        </Form.Group>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <h2>Full Control over Tech Stack</h2>
                                      </td>
                                      <td>
                                        <Form.Group
                                          className="form-group"
                                          controlId="formGridState"
                                        >
                                          <Form.Select
                                            name="fullcontrol"
                                            value={state.fullcontrol}
                                            onChange={(e) => {
                                              setData(e);
                                            }}
                                          >
                                            <option value="">
                                              -- Select One --
                                            </option>
                                            <option value="1">Yes</option>
                                            <option value="-5">No</option>
                                          </Form.Select>
                                        </Form.Group>
                                      </td>
                                    </tr>
                                  </tbody>
                                </Table>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </td>
                    </tr>
                  </tbody>

                  <tfoot>
                    <tr>
                      <td className="table-wh" width="50%">
                        <h2>
                          <b>Total</b>
                        </h2>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Control
                            type="text"
                            readOnly
                            defaultValue={total}
                          />
                        </Form.Group>
                      </td>

                      {/* <td className="table-wh-right" width="50%">
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Control
                            type="text"
                            readOnly
                            defaultValue={total2}
                          />
                        </Form.Group>
                      </td> */}
                    </tr>
                  </tfoot>
                </Table>
              </div>
              <div className="buyer-motivation ">
                <div className="row">
                  <div className="col-md-12">
                    <div className="what-video">
                      <h3>Watch the video</h3>
                      <img src="../img/what-video.png" alt="" />
                    </div>
                    <div className="next-back-button">{loader}
                      <Button
                        variant="primary button-green"
                        onClick={() => navigate(-1)}
                      >
                        Back
                      </Button>
                      <Button
                        variant="primary button-blue"
                        onClick={(e) => {
                          submitData(e);
                        }}
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}
