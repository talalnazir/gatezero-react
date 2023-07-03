import { Container, Form, Row, Button, Table } from "react-bootstrap";
import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setMarketingscore } from "../../Reducer/reducer";
import Header2 from "./Header2";
import Initiativeheader from "../Component/Initiativeheader";
import ReactLoading from "react-loading";
import { setJson, getJson } from "../../service/auth";

export default function Marketingscore() {
  let loader;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let evaluation_id = localStorage.getItem("evaluation_id");

  let check1 = false;
  let check2 = false;
  let check3 = false;
  let check4 = false;

  const [issubmit, setSubmit] = useState(false);
  const [state, setState] = useState({ markating: "" });


  if (state.markating === 5) {
    check1 = true;
  }
  if (state.markating === 3) {
    check2 = true;
  }
  if (state.markating === 1) {
    check3 = true;
  }
  if (state.markating === -5) {
    check4 = true;
  }

  const setRedux = (data, json, evaluation_id) => {
    dispatch(
      setMarketingscore({
        data,
        json,
        evaluation_id,
      })
    );
    setJson(json, evaluation_id);
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
    setRedux(state, JSON.stringify({ markatingscore: state }), evaluation_id);
    navigate("/user/pmcmalignment");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setSubmit(true);
    getJson(evaluation_id).then((res) => {
      let data = JSON.parse(res.data.data.json);
      if (data.markatingscore) {
        setState({ ...data.markatingscore });
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
                <h2>Marketing Score</h2>{loader}
                <p>
                  The marketing scorecard is relatively simple. It measures the
                  experience of the team in sales and marketing.
                </p>
              </div>
              <div className="table-list Fundingscore-table">
                <Table striped responsive>
                  <thead>
                    <tr>
                      <th>Marketing expereince category</th>
                      <th>Select any one option</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="Solutionriskscore-list">
                          <h2>
                            Team has prior marketing experience of successfully
                            launching a similar digital product
                          </h2>
                        </div>
                      </td>
                      <td>
                        <div className="Revenuescore-parity">
                          <Form.Check
                            type="radio"
                            aria-label="radio 1"
                            name="markating"
                            value="5"
                            checked={check1}
                            onChange={(e) => setData(e)}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="Solutionriskscore-list">
                          <h2>
                            Team has prior marketing experience of successfully
                            launching a product but in a different domain
                          </h2>
                        </div>
                      </td>
                      <td>
                        <div className="Revenuescore-parity">
                          <Form.Check
                            type="radio"
                            aria-label="radio 1"
                            name="markating"
                            value="3"
                            checked={check2}
                            onChange={(e) => setData(e)}
                          />
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="Solutionriskscore-list">
                          <h2>
                            Team has prior marketing attempt experience but it
                            failed
                          </h2>
                        </div>
                      </td>
                      <td>
                        <div className="Revenuescore-parity">
                          <Form.Check
                            type="radio"
                            aria-label="radio 1"
                            name="markating"
                            value="1"
                            checked={check3}
                            onChange={(e) => setData(e)}
                          />
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="Solutionriskscore-list">
                          <h2>Team has no prior marketing experience</h2>
                        </div>
                      </td>
                      <td>
                        <div className="Revenuescore-parity">
                          <Form.Check
                            type="radio"
                            aria-label="radio 1"
                            name="markating"
                            value="-5"
                            checked={check4}
                            onChange={(e) => setData(e)}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={2}>
                        <div className="scrop-alignment-serch Fundingscore-serch">
                          <h3>Total</h3>
                          <div className="form-group">
                            <Form.Control
                              type="text"
                              readOnly
                              value={state.markating}
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
