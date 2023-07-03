import { Container, Form, Row, Button, Table } from "react-bootstrap";
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setRevenuescore } from "../../Reducer/reducer";
import Header2 from "./Header2";
import Initiativeheader from "../Component/Initiativeheader";
import ReactLoading from "react-loading";
import { setJson, getJson } from "../../service/auth";

export default function Revenuescore() {
  let loader;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let evaluation_id = localStorage.getItem("evaluation_id");
  const totalValue = useRef();

  let check1_1 = false;
  let check1_2 = false;
  let check2_1 = false;
  let check2_2 = false;
  let check3_1 = false;
  let check3_2 = false;
  let check4_1 = false;
  let check4_2 = false;
  const [issubmit, setSubmit] = useState(false);
  const [motivanal, setMotivationScore] = useState();
  const [purchasedecision, setPurchasedecisionalignment] = useState();
  const [total, setTotal] = useState();
  const [state, setState] = useState({
    mentalmodelbarrier: 0,
    profitablemargin: 0,
    pricingband: 0,
    pricingmodel: 0,
    total: "",
  });

  if (state.pricingband === "1") {
    check1_1 = true;
  }
  if (state.pricingband === "1.2") {
    check1_2 = true;
  }

  if (state.pricingmodel === "1") {
    check2_1 = true;
  }
  if (state.pricingmodel === "2") {
    check2_2 = true;
  }

  if (state.mentalmodelbarrier === "5") {
    check3_1 = true;
  }
  if (state.mentalmodelbarrier === "0") {
    check3_2 = true;
  }

  if (state.profitablemargin === "1") {
    check4_1 = true;
  }
  if (state.profitablemargin === "0") {
    check4_2 = true;
  }

  const setRedux = (data, json, evaluation_id) => {
    dispatch(
      setRevenuescore({
        data,
        json,
        evaluation_id,
      })
    );
    setJson(json, evaluation_id);
  };

  const setData = (e) =>
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  const getTotal = () => {
    let total = 0;
    if (motivanal && purchasedecision) {
      total = parseInt(motivanal) * parseInt(purchasedecision);
    }
    return total;
  };

  const submitData = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setRedux(
      state,
      JSON.stringify({ revenuescore: { ...state, total: parseInt(total.toFixed(2)) } }),
      evaluation_id
    );
    navigate("/user/solutionriskscore");
  };

  useEffect(() => {
    
    if(state.pricingband!=" "){
      setTotal(getTotal() * parseFloat(state.pricingband));
    }
    if(state.pricingmodel!=" "){
      setTotal(getTotal() * parseFloat(state.pricingmodel));
    }

    if(state.pricingband!=" " && state.pricingmodel!=" "){
      setTotal(getTotal() * parseFloat(state.pricingband) * parseFloat(state.pricingmodel));
    }

    if(state.pricingband!=" " && state.pricingmodel!=" " && state.mentalmodelbarrier!=" "){
      setTotal((getTotal() * parseFloat(state.pricingband) * parseFloat(state.pricingmodel))/parseInt(state.mentalmodelbarrier));
    }

    if(state.pricingband!=" " && state.pricingmodel!=" " && state.profitablemargin!=" "){
      setTotal((getTotal() * parseFloat(state.pricingband) * parseFloat(state.pricingmodel)) + parseInt(state.profitablemargin));
    }

    if(state.pricingband!=" " && state.pricingmodel!=" " && state.mentalmodelbarrier!=" " && state.profitablemargin!=" "){
      setTotal(((getTotal() * parseFloat(state.pricingband) * parseFloat(state.pricingmodel))/parseInt(state.mentalmodelbarrier))+ parseInt(state.profitablemargin));
    }


  }, [state]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSubmit(true);
    getJson(evaluation_id).then((res) => {
      let data = JSON.parse(res.data.data.json);
      if (data.buyermotivation) {
        setMotivationScore(data.buyermotivation.score);
      }
      if (data.purchasedecisionalignment) {
        setPurchasedecisionalignment(data.purchasedecisionalignment.total);
      }
      if (data.revenuescore) {
        setState({ ...data.revenuescore });
      }
      setTotal(getTotal());
      setSubmit(false);
    });
  }, [motivanal, purchasedecision]);

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
                    
                    <div className="next-back-button">{loader}
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
                <h2>Revenue Score</h2>{loader}
                <p>
                  The revenue score measures the strength of your initiatives to
                  monetize.
                </p>
              </div>
              <div className="table-list Revenuescore-table">
                <Table striped responsive>
                  <tbody>
                    <tr>
                      <td>
                        <div className="Revenuescore-parity">
                          <h2>Motivation Parity</h2>
                          <div className="parity-form cont">
                            <input
                              type="text"
                              name="motivationparity"
                              class="form-control"
                              value={motivanal}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="Revenuescore-parity ">
                          <h2>Purchase Decision Alignment Score</h2>
                          <div className="parity-form cont">
                            <input
                              type="text"
                              name="purchasedecisionalignmentscore"
                              class="form-control"
                              value={purchasedecision}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="Revenuescore-parity">
                          <h2>Pricing Band</h2>
                          <div className="parity-form">
                            <div className="revenue-check-button">
                              <ul>
                                <li>
                                  <Form.Check
                                    inline
                                    label="Comodity"
                                    name="pricingband"
                                    type="radio"
                                    value={1}
                                    checked={check1_1}
                                    onChange={(e) => setData(e)}
                                  />
                                </li>
                                <li>
                                  <Form.Check
                                    inline
                                    label="Premium"
                                    name="pricingband"
                                    type="radio"
                                    value={1.2}
                                    checked={check1_2}
                                    onChange={(e) => setData(e)}
                                  />
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="Revenuescore-parity">
                          <h2>Pricing Model</h2>
                          <div className="parity-form">
                            <div className="revenue-check-button">
                              <ul>
                                <li>
                                  <Form.Check
                                    inline
                                    label="One time"
                                    name="pricingmodel"
                                    type="radio"
                                    value={1}
                                    checked={check2_1}
                                    onChange={(e) => setData(e)}
                                  />
                                </li>
                                <li>
                                  <Form.Check
                                    inline
                                    label="Subscription"
                                    name="pricingmodel"
                                    type="radio"
                                    value={2}
                                    checked={check2_2}
                                    onChange={(e) => setData(e)}
                                  />
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="Revenuescore-parity">
                          <h2>
                            Is there mental model barrier for the solution?
                          </h2>
                          <div className="parity-form">
                            <div className="revenue-check-button">
                              <ul>
                                <li>
                                  <Form.Check
                                    inline
                                    label="Yes"
                                    name="mentalmodelbarrier"
                                    type="radio"
                                    defaultValue={5}
                                    checked={check3_1}
                                    onChange={(e) => setData(e)}
                                  />
                                </li>
                                {/* <li>
                                  <Form.Check
                                    inline
                                    label="No"
                                    name="mentalmodelbarrier"
                                    type="radio"
                                    defaultValue={0}
                                    checked={check3_2}
                                    onChange={(e) => setData(e)}
                                  />
                                </li> */}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="Revenuescore-parity">
                          <h2>
                            Can the service be provided at a profitable margin
                          </h2>
                          <div className="parity-form">
                            <div className="revenue-check-button">
                              <ul>
                                <li>
                                  <Form.Check
                                    inline
                                    label="Yes"
                                    name="profitablemargin"
                                    type="radio"
                                    defaultValue={1}
                                    checked={check4_1}
                                    onChange={(e) => setData(e)}
                                  />
                                </li>
                                {/* <li>
                                  <Form.Check
                                    inline
                                    label="No"
                                    name="profitablemargin"
                                    type="radio"
                                    defaultValue={0}
                                    checked={check4_2}
                                    onChange={(e) => setData(e)}
                                  />
                                </li> */}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td>
                        <div class="scrop-alignment-serch Revenuescore-serch">
                          <h3>Revenue Score</h3>
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              ref={totalValue}
                              value={total ? parseInt(total.toFixed(2)) : 0}
                              onChange={(e) => setData(e)}
                            />
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
