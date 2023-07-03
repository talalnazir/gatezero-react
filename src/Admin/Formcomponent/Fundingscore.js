import { Container, Form, Row, Button, Table } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setFundingscore } from "../../Reducer/reducer";
import Header2 from "./Header2";
import Initiativeheader from "../Component/Initiativeheader";
import ReactLoading from "react-loading";
import { setJson, getJson } from "../../service/auth";

export default function Fundingscore() {
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
  const [total, setTotal] = useState("");
  const [state, setState] = useState({
    funding: null,
  });

  if (state.funding === 3) {
    check1 = true;
  }
  if (state.funding === 1) {
    check2 = true;
  }
  if (state.funding === 0) {
    check3 = true;
  }
  if (state.funding === -2) {
    check4 = true;
  }
  if (state.funding === -1) {
    check5 = true;
  }
  if (state.funding === -10) {
    check6 = true;
  }

  const setRedux = (data, json, evaluation_id) => {
    dispatch(
      setFundingscore({
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
    setRedux(state, JSON.stringify({ fundingscore: state }), evaluation_id);
    navigate("/user/marketingscore");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setSubmit(true);
    getJson(evaluation_id).then((res) => {
      let data = JSON.parse(res.data.data.json);
      if (data.fundingscore) {
        setState({ ...data.fundingscore });
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
                <h2>Funding Score</h2>{loader}
                <p>
                  The funding scorecard is designed to understand how far the
                  available funds will last. Is it enough to build a
                  revenue-making product?
                </p>
              </div>
              <div className="table-list Fundingscore-table">
                <Table striped responsive>
                  <thead>
                    <tr>
                      <th>Funding Option Available </th>
                      <th>Select any one option </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="Solutionriskscore-list">
                          <h2>
                            2X funding is available till deep differentiator
                            milestone
                          </h2>
                        </div>
                      </td>
                      <td>
                        <div className="Revenuescore-parity">
                          <Form.Check
                            type="radio"
                            aria-label="radio 1"
                            name="funding"
                            value="3"
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
                            Just enough funding is available till deep
                            differentiator milestone
                          </h2>
                        </div>
                      </td>
                      <td>
                        <div className="Revenuescore-parity">
                          <Form.Check
                            type="radio"
                            aria-label="radio 1"
                            name="funding"
                            value="1"
                            checked={check2}
                            onChange={(e) => setData(e)}
                          />
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="Solutionriskscore-list">
                          <h2>2X funding till MRMP</h2>
                        </div>
                      </td>
                      <td>
                        <div className="Revenuescore-parity">
                          <Form.Check
                            type="radio"
                            aria-label="radio 1"
                            name="funding"
                            value="0"
                            checked={check3}
                            onChange={(e) => setData(e)}
                          />
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="Solutionriskscore-list">
                          <h2>Unlimited sweat equity till MRMP</h2>
                        </div>
                      </td>
                      <td>
                        <div className="Revenuescore-parity">
                          <Form.Check
                            type="radio"
                            aria-label="radio 1"
                            name="funding"
                            value="-2"
                            checked={check4}
                            onChange={(e) => setData(e)}
                          />
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="Solutionriskscore-list">
                          <h2>
                            Unlimited sweat equity till MRMP + funds upto
                            $100,000
                          </h2>
                        </div>
                      </td>
                      <td>
                        <div className="Revenuescore-parity">
                          <Form.Check
                            type="radio"
                            aria-label="radio 1"
                            name="funding"
                            value="-1"
                            checked={check5}
                            onChange={(e) => setData(e)}
                          />
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="Solutionriskscore-list">
                          <h2>Any lower level of funding</h2>
                        </div>
                      </td>
                      <td>
                        <div className="Revenuescore-parity">
                          <Form.Check
                            type="radio"
                            aria-label="radio 1"
                            name="funding"
                            value="-10"
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
                        <div class="scrop-alignment-serch Fundingscore-serch">
                          <h3>Total</h3>
                          <div class="form-group">
                            <Form.Control
                              type="text"
                              readOnly
                              value={state.funding}
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
