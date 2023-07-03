import { Container, Form, Row, Button, Table } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import Header2 from "./Header2";
import Initiativeheader from "../Component/Initiativeheader";
import { useSelector, useDispatch } from "react-redux";
import { setCruximpact } from "../../Reducer/reducer";
import ReactLoading from "react-loading";
import { setJson, getJson } from "../../service/auth";

export default function Cruximpact() {
  let loader;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let evaluation_id = localStorage.getItem("evaluation_id");

  const [issubmit, setSubmit] = useState(false);
  const [total, setTotal] = useState(0);
  const [state, setState] = useState({
    question0checked: false,
    question0: "",
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    total: 0,
  });

  const setRedux = (data, json, evaluation_id) => {
    dispatch(
      setCruximpact({
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
        [e.target.name + "checked"]: e.target.checked,
      }));
    }
  };

  const totalData = (data) => {
    let sum = 0;
    for (let [key, val] of Object.entries(data)) {
      if (key != "total" && key != "question0checked") {
        sum += val ? val : 0;
      }
    }
    return parseInt(sum);
  };

  const submitData = (event) => {
    setRedux(
      state,
      JSON.stringify({ cruximpact: { ...state, total: total } }),
      evaluation_id
    );
    navigate("/user/purchasedecisionalignment");
  };

  useEffect(() => {
   
    $(".question0").change(function () {
      let isChecked = $(".question0").is(":checked");
        if(isChecked==true){
          setTotal(-20);
          $('.allinput').attr('disabled',true);
        }else{
          $('.allinput').attr('disabled',false);
        }
    });

    setTotal(totalData({ ...state }));
  }, [state]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSubmit(true);
    getJson(evaluation_id).then((res) => {
      let data = JSON.parse(res.data.data.json);
      if (data.cruximpact) {
        setTotal(totalData(data.cruximpact));
        setState({ ...data.cruximpact });
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
                    onClick={(e) => {
                      submitData(e);
                    }}
                  >
                    Next
                  </Button>
                </div>
              </div> */}
              <div className="dimentional-title">
                <h2>CRUX - Impact Scorecard </h2>{loader}
                <p>
                  CRUX - Impact scorecard evaluates the strength of your core
                  solution - what kind of impact it will generate.
                </p>
              </div>
              <div className="table-list Cruximpact">
                <Table striped responsive>
                  <thead>
                    <tr>
                      <th>Question</th>
                      <th>Pain point improvement / Game changer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h2>Time</h2>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name="question1"
                            className="allinput"
                            value={state.question1}
                            disabled={state.question0 == -20 ? true : false}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option>-- Select One --</option>
                            <option value="5">Significant improvement</option>
                            <option value="0">
                              No significant imporvement
                            </option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2>Money</h2>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name="question2"
                            className="allinput"
                            value={state.question2}
                            disabled={state.question0 == -20 ? true : false}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option>-- Select One --</option>
                            <option value="5">Significant improvement</option>
                            <option value="0">
                              No significant imporvement
                            </option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2>Effort</h2>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name="question3"
                            className="allinput"
                            value={state.question3}
                            disabled={state.question0 == -20 ? true : false}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option>-- Select One --</option>
                            <option value="2">Significant improvement</option>
                            <option value="0">
                              No significant imporvement
                            </option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2>Life Saving</h2>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name="question4"
                            className="allinput"
                            value={state.question4}
                            disabled={state.question0 == -20 ? true : false}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option>-- Select One --</option>
                            <option value="10">Significant improvement</option>
                            <option value="0">
                              No significant imporvement
                            </option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2>Gratitude</h2>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name="question5"
                            className="allinput"
                            value={state.question5}
                            disabled={state.question0 == -20 ? true : false}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option>-- Select One --</option>
                            <option value="5">Significant improvement</option>
                            <option value="0">
                              No significant imporvement
                            </option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2>Health</h2>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name="question6"
                            className="allinput"
                            value={state.question6}
                            disabled={state.question0 == -20 ? true : false}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option>-- Select One --</option>
                            <option value="5">Significant improvement</option>
                            <option value="0">
                              No significant imporvement
                            </option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2>None of the above</h2>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <input
                            type="checkbox"
                            name="question0"
                            class="form-check-input question0"
                            style={{ "margin-right": "15%" }}
                           // value={-20}
                            checked={state.question0checked}
                            onChange={(e) => {
                              setData(e);
                            }}
                          />
                        </Form.Group>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td></td>

                      <td>
                        <div className="total-ft Cruximpact">
                          <h2>
                            <b>Total</b>
                          </h2>

                          <Form.Control type="text" readOnly value={total} />
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
