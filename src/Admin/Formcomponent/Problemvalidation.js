import { Container, Form, Row, Button, Table } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "./Header2";
import Initiativeheader from "../Component/Initiativeheader";
import $ from "jquery";
import { useSelector, useDispatch } from "react-redux";
import { setProblemValidation } from "../../Reducer/reducer";
import ReactLoading from "react-loading";
import { setJson, getJson } from "../../service/auth";

export default function Problemvalidation() {
  let loader;
  let total = 0;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let evaluation_id = localStorage.getItem("evaluation_id");

  const [issubmit, setSubmit] = useState(false);

  const [state, setState] = useState({
    Row11: 0,
    Row21: 0,
    Row31: 0,
    Row41: 0,
    Row51: 0,
    Row61: 0,
    Row71: 0,
    Row81: 0,
    total1: 0,
    total2: 0,
    total3: 0,
    alltotal: 0,
  });

  const setRedux = (data, json, evaluation_id) => {
    dispatch(
      setProblemValidation({
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
      if (
        key != "total1" &&
        key != "total2" &&
        key != "total3" &&
        key != "alltotal"
      ) {
        sum += val ? val : 0;
      }
    }
    return parseInt(sum);
  };

  const setData = (e) =>
    setState((prev) => ({
      ...prev,
      [e.target.name]: parseInt(e.target.value),
    }));

  total = totalData(state);

  const totalDataRow1 = () => {
    let totalVal = state.Row11
      ? state.Row11
      : 0 + state.Row21
      ? state.Row21
      : 0 + state.Row31
      ? state.Row31
      : 0 + state.Row41
      ? state.Row41
      : 0 + state.Row51
      ? state.Row51
      : 0 + state.Row61
      ? state.Row61
      : 0 + state.Row71
      ? state.Row71
      : 0 + state.Row81
      ? state.Row81
      : 0;
    return totalVal;
  };

  const submitData = (event) => {
    event.preventDefault();
    event.stopPropagation();

    let trace = false;

    $("select.Row").each(function () {
      if (this.value == 0) {
        trace = true;
        $(this).css("border", "solid 1px red");
        return;
      } else {
        $(this).css("border", "1px solid #ced3dd");
      }
    });
    if (trace) {
      trace = false;
      window.scrollTo(0, 0);
    } else {
      setRedux(
        state,
        JSON.stringify({
          problemvalidationscore: {
            ...state,
            total1: totalDataRow1(),
            alltotal: total,
          },
        }),
        evaluation_id
      );
       navigate("/user/solutionscorecard");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setSubmit(true);

    getJson(evaluation_id).then((res) => {
      let data = JSON.parse(res.data.data.json);
      if (data.problemvalidationscore) {
        setState({ ...data.problemvalidationscore });
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
          <Initiativeheader eid={evaluation_id} />
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
                <h2>Problem Validation Scorecard</h2>
                {loader}
                <p>
                  Problem validation is a research-based activity. You fill this
                  scorecard after you conduct customer research. For a first
                  pass evaluation, you can attribute a score that is your first
                  guess in each score below. For the second pass evaluation, you
                  would plug in actual research data. Generally, real research
                  data is vastly different from your initial understanding.
                  Therefore problem validation with actual research is one of
                  the most critical steps.
                </p>
              </div>
              <div className="table-list">
                <Table striped bordered responsive>
                  <thead>
                    <tr>
                      <th>Validation Topic</th>
                      <th>Validation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h2>Problem or need</h2>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            id="Row11"
                            name="Row11"
                            className="Row"
                            value={state.Row11}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="-5">Below 30%</option>
                            <option value="3">Between 30% to 50%</option>
                            <option value="5">Above 50%</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2>Situation in which the problem happens</h2>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            id="Row21"
                            name="Row21"
                            className="Row"
                            value={state.Row21}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="-5">Below 30%</option>
                            <option value="3">Between 30% to 50%</option>
                            <option value="5">Above 50%</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2>Who in the situation is facing the problem?</h2>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            id="Row31"
                            name="Row31"
                            className="Row"
                            value={state.Row31}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="-5">Below 30%</option>
                            <option value="3">Between 30% to 50%</option>
                            <option value="5">Above 50%</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <h2>
                          What activity is being done which includes the
                          problem?
                        </h2>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            id="Row41"
                            name="Row41"
                            className="Row"
                            value={state.Row41}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="-5">Below 30%</option>
                            <option value="3">Between 30% to 50%</option>
                            <option value="5">Above 50%</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <h2>What is the root cause of the problem?</h2>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            id="Row51"
                            name="Row51"
                            className="Row"
                            value={state.Row51}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="-5">Below 30%</option>
                            <option value="3">Between 30% to 50%</option>
                            <option value="5">Above 50%</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <h2>What is the ideal outcome?</h2>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            id="Row61"
                            name="Row61"
                            className="Row"
                            value={state.Row61}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="-5">Below 30%</option>
                            <option value="3">Between 30% to 50%</option>
                            <option value="5">Above 50%</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <h2>Objections to the proposed solution?</h2>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            id="Row71"
                            name="Row71"
                            className="Row"
                            value={state.Row71}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="-5">Below 30%</option>
                            <option value="3">Between 30% to 50%</option>
                            <option value="5">Above 50%</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <h2>
                          How does proposed solution causes ideal outcome?
                        </h2>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            id="Row81"
                            name="Row81"
                            className="Row"
                            value={state.Row81}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="-5">Below 30%</option>
                            <option value="3">Between 30% to 50%</option>
                            <option value="5">Above 50%</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td>
                        <h2>
                          <b>Total</b>
                        </h2>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Control type="text" readOnly value={total} />
                        </Form.Group>{" "}
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
                        id="submit"
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
