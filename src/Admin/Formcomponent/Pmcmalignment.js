import { Container, Form, Row, Button, Table } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setPmcmalignment } from "../../Reducer/reducer";
import Header2 from "./Header2";
import Initiativeheader from "../Component/Initiativeheader";
import ReactLoading from "react-loading";
import { setJson, getJson } from "../../service/auth";

export default function Pmcmalignment() {
  let loader;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let evaluation_id = localStorage.getItem("evaluation_id");

  const [issubmit, setSubmit] = useState(false);
  const [total, setTotal] = useState();
  const [state, setState] = useState({
    problemscore: 0,
    problemvalidationsscore: 0,
    marketscore: 0,
    cruxrectangularscore: 0,
    solutionscore: 0,
    frequencyofproblem: 0,
    revenuescore: 0,
    riskscore: 0,
    motivationparity: 0,
    businessgoals: 0,
    interfaceoption: 0,
    total: 0,
  });

  const setRedux = (data, json, evaluation_id) => {
    dispatch(
      setPmcmalignment({
        data,
        json,
        evaluation_id,
      })
    );
    setJson(json, evaluation_id);
  };

  const totalData = (data) => {
    let sum = 0;
    for (let [key, val] of Object.entries(data)) {
      if (key != "total") {
        sum += parseInt(val ? val : 0);
      }
    }
    return sum;
  };

  const setData = (e) =>
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: parseInt(e.target.value),
    }));

  const submitData = (event) => {
    event.preventDefault();
    event.stopPropagation();

    let totalVal = totalData(state);

    setRedux(
      state,
      JSON.stringify({ pmcmalignment: { ...state, total: totalVal } }),
      evaluation_id
    );
    navigate("/user/demandpeak");
  };

  useEffect(() => {
    setTotal(totalData({ ...state }));
  }, [total,state]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSubmit(true);
    getJson(evaluation_id).then((res) => {
      let data = JSON.parse(res.data.data.json);
      if (data) {
        
        if (data.problemscorecard.total >= 10) {
          data.problemscorecard.total = 2;
        } else {
          data.problemscorecard.total = -5;
        }

        if (data.problemvalidationscore.alltotal > 0) {
          data.problemvalidationscore.alltotal = 2;
        } else {
          data.problemvalidationscore.alltotal = -3;
        }

        if (data.problemscorecard.marketsize == 0 || data.problemscorecard.marketsize == 5) {
          data.problemscorecard.marketsize = 1;
        } else {
          data.problemscorecard.marketsize = -2;
        }

        if (data.cruxalignment.total >= 25) {
          data.cruxalignment.total = 4;
        } else {
          data.cruxalignment.total = -2;
        }

        if (data.solutionscorecard.total >= 10) {
          data.solutionscorecard.total = 2;
        } else {
          data.solutionscorecard.total = -10;
        }

        if (data.problemscorecard.problemfrequency == 3) {
          data.problemscorecard.problemfrequency = 2;
        } else {
          data.problemscorecard.problemfrequency = -3;
        }

        if (data.revenuescore.total <=5) {
          data.revenuescore.total = -3;
        } else {
          data.revenuescore.total = 1;
        }

        if (data.solutionriskscore.total == 0) {
          data.solutionriskscore.total = 0;
        } 
        else if(data.solutionriskscore.total <= 0) {
          data.solutionriskscore.total = -1;
        }


        if (data.buyermotivation.score >=2) {
          data.buyermotivation.score = 1;
        } else {
          data.buyermotivation.score = -1;
        }
        


        setState({
          problemscore: data.problemscorecard ? data.problemscorecard.total : 0,
          problemvalidationsscore: data.problemvalidationscore
            ? data.problemvalidationscore.alltotal
            : 0,
          marketscore: data.problemscorecard ? data.problemscorecard.marketsize : 0,
          cruxrectangularscore: data.cruxalignment
            ? data.cruxalignment.total
            : 0,
          solutionscore: data.solutionscorecard
            ? data.solutionscorecard.total
            : 0,
          frequencyofproblem: data.problemscorecard
            ? data.problemscorecard.problemfrequency
            : 0,
          revenuescore: data.revenuescore ? data.revenuescore.total : 0,
          riskscore: data.solutionriskscore ? data.solutionriskscore.total : 0,
          motivationparity: data.buyermotivation
            ? data.buyermotivation.score
            : 0,
          businessgoals: data.pmcmalignment
            ? data.pmcmalignment.businessgoals
            : 0,
          interfaceoption: data.pmcmalignment
            ? data.pmcmalignment.interfaceoption
            : 0,
          total: data.pmcmalignment ? data.pmcmalignment.total : 0,
        });
      }
      setSubmit(false);
    });
  }, []);

 

  if (issubmit) {
    loader = <ReactLoading type="bubbles" color="#162c5d" width={100} />;
  }

  return (
    <div>
      <Header2 />

      <div className="page-wraper">
        <div className="Probdesc-page">
        <Initiativeheader eid={evaluation_id}/>
          <Container>
            <Row>
            {/* <div className="col-md-12">
                   
                    <div className="next-back-button">
                      {loader}
                      <Button
                        variant="primary button-green"
                        onClick={() => navigate(-1)}
                      >
                        Back
                      </Button>
                      <Button
                        variant="primary button-blue"
                        onClick={(e) => submitData(e)}
                      >
                        Next
                      </Button>
                    </div>
                  </div> */}
              <div className="dimentional-title">
                <h2>Product - Market - Channel - Model (PMCM) Scorecard</h2>{loader}
                <p>
                  This scorecard evaluates the extent of alignment amongst
                  product - market -channel, and model.
                </p>
              </div>
              <div className="table-list Pmcmalignment-table">
                <Table striped responsive>
                  <thead>
                    <tr>
                      <th>Category </th>
                      <th>Dimension</th>
                      <th>Obtained Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h2>Market - Channel</h2>
                      </td>
                      <td>
                        <h2>Problem Score</h2>
                      </td>
                      <td>
                        <input
                          placeholder=""
                          type="text"
                          id="formBasicbuyar"
                          class="form-control"
                          value={state.problemscore}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2>Market - Channel</h2>
                      </td>
                      <td>
                        <h2>Problem Validation Score</h2>
                      </td>
                      <td>
                        <input
                          placeholder=""
                          type="text"
                          id="formBasicbuyar"
                          class="form-control"
                          value={state.problemvalidationsscore}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2>Market </h2>
                      </td>
                      <td>
                        <h2>Market Score</h2>
                      </td>
                      <td>
                        <input
                          placeholder=""
                          type="text"
                          id="formBasicbuyar"
                          class="form-control"
                          value={state.marketscore}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2>Product - Market</h2>
                      </td>
                      <td>
                        <h2>Crux Rectangle Score</h2>
                      </td>
                      <td>
                        <input
                          placeholder=""
                          type="text"
                          id="formBasicbuyar"
                          class="form-control"
                          value={state.cruxrectangularscore}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2>Product</h2>
                      </td>
                      <td>
                        <h2>Solution Score</h2>
                      </td>
                      <td>
                        <input
                          placeholder=""
                          type="text"
                          id="formBasicbuyar"
                          class="form-control"
                          value={state.solutionscore}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2>Market</h2>
                      </td>
                      <td>
                        <h2>Frequnecy of the Problem</h2>
                      </td>
                      <td>
                        <input
                          placeholder=""
                          type="text"
                          id="formBasicbuyar"
                          class="form-control"
                          value={state.frequencyofproblem}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2>Model</h2>
                      </td>
                      <td>
                        <h2>Revenue Score</h2>
                      </td>
                      <td>
                        <input
                          placeholder=""
                          type="text"
                          id="formBasicbuyar"
                          class="form-control"
                          value={state.revenuescore}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2>Product</h2>
                      </td>
                      <td>
                        <h2>Risk Score</h2>
                      </td>
                      <td>
                        <input
                          placeholder=""
                          type="text"
                          id="formBasicbuyar"
                          class="form-control"
                          value={state.riskscore}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2>Market</h2>
                      </td>
                      <td>
                        <h2>Motivation Parity</h2>
                      </td>
                      <td>
                        <input
                          placeholder=""
                          type="text"
                          id="formBasicbuyar"
                          class="form-control"
                          value={state.motivationparity}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2>Product - Market - Model</h2>
                      </td>
                      <td>
                        <h2>Business Goals</h2>
                      </td>
                      <td>
                        <select
                          value={state.businessgoals}
                          class="form-select"
                          id="formGridState"
                          name="businessgoals"
                          onChange={(e) => setData(e)}
                        >
                          <option>-- Select One --</option>
                          <option value={1}>Aligned</option>
                          <option value={-5}>
                            Not Aligned
                          </option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2>Channel</h2>
                      </td>
                      <td>
                        <h2>
                          Best interface option Web/Mobile or
                          <br /> Voice validated with situation the problem{" "}
                          <br /> happens? and user research?
                        </h2>
                      </td>
                      <td>
                        <select
                          value={state.interfaceoption}
                          class="form-select"
                          id="formGridState"
                          name="interfaceoption"
                          onChange={(e) => setData(e)}
                        >
                          <option>-- Select One --</option>
                          <option value={1}>Aligned</option>
                          <option value={-5}>
                            Not Aligned
                          </option>
                        </select>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={3}>
                        <div class="scrop-alignment-serch pmcmalignment-serch">
                          <h3>Total</h3>
                          <div class="form-group">
                            <Form.Control type="text" readOnly value={total} />
                          </div>
                        </div>
                      </td>
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
                    <div className="next-back-button">
                      {loader}
                      <Button
                        variant="primary button-green"
                        onClick={() => navigate(-1)}
                      >
                        Back
                      </Button>
                      <Button
                        variant="primary button-blue"
                        onClick={(e) => submitData(e)}
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
