import { Container, Form, Row, Button, Table } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSolutionriskscore } from "../../Reducer/reducer";
import Header2 from "./Header2";
import Initiativeheader from "../Component/Initiativeheader";
import ReactLoading from "react-loading";
import { setJson, getJson } from "../../service/auth";

export default function Solutionriskscore() {
  let loader;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let evaluation_id = localStorage.getItem("evaluation_id");

  const [issubmit, setSubmit] = useState(false);
  const [total, setTotal] = useState("");

  let [state, setState] = useState({
    question1: 0,
    question1checked: false,

    question2: 0,
    question2checked: false,

    question3: 0,
    question3checked: false,

    question4: 0,
    question4checked: false,

    question5: 0,
    question5checked: false,

    question6: 0,
    question6checked: false,

    question7: 0,
    question7checked: false,

    question8: 0,
    question8checked: false,

    total: 0,
  });

  const setRedux = (data, json, evaluation_id) => {
    dispatch(
      setSolutionriskscore({
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
        key != "total" &&
        key != "question1checked" &&
        key != "question2checked" &&
        key != "question3checked" &&
        key != "question4checked" &&
        key != "question5checked" &&
        key != "question6checked" &&
        key != "question7checked" &&
        key != "question8checked"
      ) {
        sum += parseInt(val ? val : 0);
      }
    }
    return sum;
  };

  const setData = (e) => {
    if(e.target.checked==true){
      setState((prev) => ({
        ...prev,
        [e.target.name]: parseInt(e.target.value),
        [e.target.name + "checked"]: e.target.checked,
      }));
    }else{
      setState((prev) => ({
        ...prev,
        [e.target.name]: 0,
        [e.target.name + "checked"]: false,
      }));
    }
  };

  const submitData = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setRedux(
      state,
      JSON.stringify({
        solutionriskscore: { ...state, total: totalData(state) },
      }),
      evaluation_id
    );
    navigate("/user/fundingscore");
  };

  useEffect(() => {
    setTotal(totalData({ ...state }));
  }, [state]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSubmit(true);
    getJson(evaluation_id).then((res) => {
      let data = JSON.parse(res.data.data.json);
      if (data.solutionriskscore) {
        setTotal(totalData(data.solutionriskscore));
        setState({ ...data.solutionriskscore });
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
                <h2>Solution Risk Scorecard </h2>{loader}
                <p>
                  The solution risk scorecard evaluates if the risks of using
                  the solution for the intended customer/user are acceptable.
                  This is the risk that happens when the solution works as
                  designed. We are not evaluating the risk of service outage
                  here.
                </p>
              </div>
              <div className="table-list Solutionriskscore-table">
                <Table striped responsive>
                  <thead>
                    <tr>
                      <th>Risk</th>
                      <th>Select all that apply</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="Solutionriskscore-list">
                          <h2>No perceived or real risk</h2>
                        </div>
                      </td>
                      <td>
                        <div className="Revenuescore-parity">
                          <input
                            name="question1"
                            aria-label="option 1"
                            type="checkbox"
                            class="form-check-input"
                            value="0"
                            checked={state.question1checked}
                            onChange={(e) => setData(e)}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="Solutionriskscore-list">
                          <h2>
                            User's concern of receiving spam emails as a result
                            of purchasing the service
                          </h2>
                        </div>
                      </td>
                      <td>
                        <div className="Revenuescore-parity">
                          <input
                            name="question2"
                            aria-label="option 2"
                            type="checkbox"
                            class="form-check-input"
                            value="-1"
                            checked={state.question2checked}
                            onChange={(e) => setData(e)}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="Solutionriskscore-list">
                          <h2>
                            Fear of Loss / theft of private data (Financial
                            account / SSN) as a result of purchasing the service
                          </h2>
                        </div>
                      </td>
                      <td>
                        <div className="Revenuescore-parity">
                          <input
                            name="question3"
                            aria-label="option 3"
                            type="checkbox"
                            class="form-check-input"
                            value="-5"
                            checked={state.question3checked}
                            onChange={(e) => setData(e)}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="Solutionriskscore-list">
                          <h2>Other Legal Law Suite Risk</h2>
                        </div>
                      </td>
                      <td>
                        <div className="Revenuescore-parity">
                          <input
                            name="question4"
                            aria-label="option 4"
                            type="checkbox"
                            class="form-check-input"
                            value="-10"
                            checked={state.question4checked}
                            onChange={(e) => setData(e)}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="Solutionriskscore-list">
                          <h2>Other Government Compliance Violation Risk</h2>
                        </div>
                      </td>
                      <td>
                        <div className="Revenuescore-parity">
                          <input
                            name="question5"
                            aria-label="option 5"
                            type="checkbox"
                            class="form-check-input"
                            value="-15"
                            checked={state.question5checked}
                            onChange={(e) => setData(e)}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="Solutionriskscore-list">
                          <h2>Health Risks</h2>
                        </div>
                      </td>
                      <td>
                        <div className="Revenuescore-parity">
                          <input
                            name="question6"
                            aria-label="option 6"
                            type="checkbox"
                            class="form-check-input"
                            value="-10"
                            checked={state.question6checked}
                            onChange={(e) => setData(e)}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="Solutionriskscore-list">
                          <h2>Loss of Life Risk</h2>
                        </div>
                      </td>
                      <td>
                        <div className="Revenuescore-parity">
                          <input
                            name="question7"
                            aria-label="option 7"
                            type="checkbox"
                            class="form-check-input"
                            value="-40"
                            checked={state.question7checked}
                            onChange={(e) => setData(e)}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="Solutionriskscore-list">
                          <h2>Other perceived risks</h2>
                        </div>
                      </td>
                      <td>
                        <div className="Revenuescore-parity">
                          <input
                            name="question8"
                            aria-label="option 8"
                            type="checkbox"
                            class="form-check-input"
                            value="-5"
                            checked={state.question8checked}
                            onChange={(e) => setData(e)}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={2}>
                        <div class="scrop-alignment-serch solutionriskscore-serch">
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
