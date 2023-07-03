import { Container, Form, Row, Button, Table } from "react-bootstrap";
import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setDemandpeak } from "../../Reducer/reducer";
import Header2 from "./Header2";
import Initiativeheader from "../Component/Initiativeheader";
import ReactLoading from "react-loading";
import { setJson, getJson } from "../../service/auth";

export default function Demandpeak() {
  let loader;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let evaluation_id = localStorage.getItem("evaluation_id");

  let check1 = false;
  let check2 = false;
  let check3 = false;
  let check4 = false;
  let check5 = false;
  let check6 = false;

  const [issubmit, setSubmit] = useState(false);
  const [state, setState] = useState({ demand: "" });

  if (state.demand === -1) {
    check1 = true;
  }
  if (state.demand === -2) {
    check2 = true;
  }
  if (state.demand === 0) {
    check3 = true;
  }
  if (state.demand === 3) {
    check4 = true;
  }
  if (state.demand === 1) {
    check5 = true;
  }
  if (state.demand === -3) {
    check6 = true;
  }

  const setRedux = (data, json, evaluation_id) => {
    dispatch(
      setDemandpeak({
        data,
        json,
        evaluation_id,
      })
    );

    setTimeout(function () {
      navigate("/user/results");

  }, 1000);


  };

  const setData = (e) => {
    if (e.target.name && e.target.value) {
      const { name, value } = e.target;

      setState((prev) => ({
        ...prev,
        [name]: parseInt(value),
      }));
    }
  };

  const submitData = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setJson(JSON.stringify({ demandpeak: state }), evaluation_id);

    setRedux(state, JSON.stringify({ demandpeak: state }), evaluation_id);

  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setSubmit(true);
    getJson(evaluation_id).then((res) => {
      let data = JSON.parse(res.data.data.json);
      if (data.demandpeak) {
        setState({ ...data.demandpeak });
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
                <h2>Demand Peak Scorecard</h2>{loader}
                <p>
                  This scorecard notes when the demand for the solution will
                  start picking up? Or the peak has already arrived, or the peak
                  has already passed.
                </p>
              </div>
              <div className="table-list demandpeak-table">
                <Table striped responsive>
                  <thead>
                    <tr>
                      <th>
                        Cateogry <span>Select One</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="Demandpeak-box">
                          <h2>Steady Demand</h2>
                          <Form.Check
                            type="radio"
                            aria-label="radio 1"
                            name="demand"
                            value="-1"
                            checked={check1}
                            onChange={(e) => setData(e)}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="Demandpeak-box">
                          <h2>Demand peak right now</h2>
                          <Form.Check
                            type="radio"
                            aria-label="radio 1"
                            name="demand"
                            value="-2"
                            checked={check2}
                            onChange={(e) => setData(e)}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="Demandpeak-box">
                          <h2>Demand Peak 1 Year Away </h2>
                          <Form.Check
                            type="radio"
                            aria-label="radio 1"
                            name="demand"
                            value="0"
                            checked={check3}
                            onChange={(e) => setData(e)}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="Demandpeak-box">
                          <h2>Demand Peak 3 Year Away</h2>
                          <Form.Check
                            type="radio"
                            aria-label="radio 1"
                            name="demand"
                            value="3"
                            checked={check4}
                            onChange={(e) => setData(e)}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="Demandpeak-box">
                          <h2>Demand Peak More Than 3 years away</h2>
                          <Form.Check
                            type="radio"
                            aria-label="radio 1"
                            name="demand"
                            value="1"
                            checked={check5}
                            onChange={(e) => setData(e)}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="Demandpeak-box">
                          <h2>Demand Unknown</h2>
                          <Form.Check
                            type="radio"
                            aria-label="radio 1"
                            name="demand"
                            value="-3"
                            checked={check6}
                            onChange={(e) => setData(e)}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={2}>
                        <div class="scrop-alignment-serch demandpeak-serch">
                          <h3>Demand Peak Score</h3>
                          <div class="form-group">
                            <Form.Control
                              type="text"
                              readOnly
                              value={state.demand}
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
