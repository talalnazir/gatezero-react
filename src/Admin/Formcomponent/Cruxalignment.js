import { Container, Form, Row, Button, Table } from "react-bootstrap";
import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "./Header2";
import Initiativeheader from "../Component/Initiativeheader";
import { useSelector, useDispatch } from "react-redux";
import { setCruxalignment } from "../../Reducer/reducer";
import ReactLoading from "react-loading";
import { setJson, getJson } from "../../service/auth";

export default function Cruxalignment() {
  let loader;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let evaluation_id = localStorage.getItem("evaluation_id");
 
  const [issubmit, setSubmit] = useState(false);
  const [total, setTotal] = useState("");
  const [is_nogo, setNogo] = useState(false);

  const [state, setState] = useState({
    question1:"",
    question2:"",
    question3:"",
    question4:"",
    question5:"",
    question6:"",
    question7:"",
    total:0
  });

  const setRedux = (data, json, evaluation_id) => {
    dispatch(
      setCruxalignment({
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

  const totalData = (data) => {
    let sum = 0;
    setNogo(false)

    for (let [key, val] of Object.entries(data)) {
      if(key!="total"){

        if (key == "question1" && val == "0"){ 
          setNogo(true)
        } else if (key == "question2" && val == "0"){
          setNogo(true)
        }else if (key == "question4" && val == "0"){
          setNogo(true)
        } else if (key == "question6" && val == "0"){
          setNogo(true)
        }

      sum += (val?val:0);

      
      }
    }
    return parseInt(sum);
  };

  const submitData = (event) => {
    setRedux(
      state,
      JSON.stringify({ cruxalignment: {...state,total:parseInt(total)},is_nogo_crux:is_nogo }),
      evaluation_id
    );
    navigate("/user/cruximpact");
  };

  useEffect(() => {
    setTotal(totalData({...state}));
  }, [state]);


  useEffect(() => {
    window.scrollTo(0, 0);
    setSubmit(true);
    getJson(evaluation_id).then((res) => {
      let data = JSON.parse(res.data.data.json);
      if (data.cruxalignment) {
        setTotal(totalData(data.cruxalignment));
        setState({...data.cruxalignment});
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
                        onClick={(e) => {
                          submitData(e);
                        }}
                      >
                        Next
                      </Button>
                    </div>
                  </div> */}
              <div className="dimentional-title">
                <h2>CRUX - Alignment Scorecard </h2>{loader}
                <p>
                  CRUX - Alignment scorecard evaluates the alignment strength
                  amongst problem, root causes, solution, and business goals.
                </p>
              </div>
              <div className="table-list Cruxalignment-list">
                <Table striped responsive>
                  <thead>
                    <tr>
                      <th>Question</th>
                      <th>Ratings</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <h2>
                          Are you able to identify all the root causes for the
                          problem or need?
                        </h2>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name="question1"
                            value={state.question1}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="5">All root causes identified</option>
                            <option value="2">Some of the root causes are identified</option>
                            <option value="0">No root cause could be identified</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2>
                          Are you able to identify solution differentiators that
                          have significant impact on root cause elimination?
                        </h2>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name="question2"
                            value={state.question2}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="5">Yes</option>
                            <option value="1">Somewhat</option>
                            <option value="0">No</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2>
                          Are there any frequent root causes that are not
                          solvable?
                        </h2>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name="question3"
                            value={state.question3}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="-10">Yes</option>
                            <option value="5">No</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2>
                          Can you digitally implement the solution
                          differentiators?
                        </h2>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name="question4"
                            value={state.question4}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="5">All of it</option>
                            <option value="2">Some of it</option>
                            <option value="0">None of it</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2>What is Crux Competitive Score?</h2>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name="question5"
                            value={state.question5}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="5">More than 30% of winner and no losing differentiator.</option>
                            <option value="-5">Something different</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2>
                          Are you able to clearly identify how a successful
                          product will help your business?
                        </h2>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name="question6"
                            value={state.question6}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="5">Yes</option>
                            <option value="1">Somewhat</option>
                            <option value="0">No</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h2>
                          Is there consensus amongst stakeholders on product
                          business goal alignment?
                        </h2>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name="question7"
                            value={state.question7}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="5">Yes</option>
                            <option value="-1">Somewhat</option>
                            <option value="-5">No</option>
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
                        <Form.Control type="text" readOnly  value={total}/>
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
