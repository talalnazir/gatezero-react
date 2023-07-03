import { Container, Form, Row, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "./Header2";
import Initiativeheader from "../Component/Initiativeheader";
import { useSelector, useDispatch } from "react-redux";
import { setProblemScoreCard, setRevenuescore } from "../../Reducer/reducer";
import ReactLoading from "react-loading";
import { setJson, getJson } from "../../service/auth";

export default function Problemscorecard() {
  let loader;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let evaluation_id = localStorage.getItem("evaluation_id");
  const [issubmit, setSubmit] = useState(false);

  const [motivationscore, setMotivationScore] = useState("");
  const [marketsize, setMarketSize] = useState("");
  const [problemfrequency, setProblemFrequency] = useState("");
  const [timesaving, setTimeSaving] = useState("");
  const [lifeproblem, setLifeProblem] = useState("");
  const [lifesaving, setLifeSaving] = useState("");
  const [conveniencecomfort, setConvenienceComfort] = useState("");
  const [regulatory, setRegulatory] = useState("");
  const [security, setSecurity] = useState("");
  const [revenueopp, setRevenueopp] = useState("");
  const [total, setTotal] = useState("");
  

  const setRedux = (data, json, evaluation_id) => {
    dispatch(
      setProblemScoreCard({
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
      if(key!="total"){
      sum += (val?val:0);
      }
    }
    return parseInt(sum);
  };

  let data = {
    motivationscore,
    marketsize,
    problemfrequency,
    timesaving,
    lifeproblem,
    lifesaving,
    conveniencecomfort,
    regulatory,
    security,
    revenueopp,
    total
  };


  const submitData = (event) => {
    event.preventDefault();
    event.stopPropagation();

    setRedux(data, JSON.stringify({ problemscorecard: { ...data, total: totalData(data) } }), evaluation_id);
    setTotal(totalData(data));
    navigate("/user/problemvalidation");
  };

  useEffect(() => {
    setTotal(totalData({...data}));
  }, [data]);


  useEffect(() => {
    window.scrollTo(0, 0);
    setSubmit(true);
    getJson(evaluation_id).then((res) => {
      let data = JSON.parse(res.data.data.json);
      if (data.buyermotivation) {
        setMotivationScore(data.buyermotivation.score);
      }
      if (data.problemscorecard) {
        setMarketSize(data.problemscorecard.marketsize);
        setProblemFrequency(data.problemscorecard.problemfrequency);
        setTimeSaving(data.problemscorecard.timesaving);
        setLifeProblem(data.problemscorecard.lifeproblem);
        setLifeSaving(data.problemscorecard.lifesaving);
        setConvenienceComfort(data.problemscorecard.conveniencecomfort);
        setRegulatory(data.problemscorecard.regulatory);
        setSecurity(data.problemscorecard.security);
        setRevenueopp(data.problemscorecard.revenueopp);
        setTotal(totalData(data.problemscorecard));
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
                        onClick={(e) => submitData(e)}
                      >
                        Next
                      </Button>
                    </div>
                  </div> */}
              <div className="dimentional-title">
                <h2>Problem Scorecard </h2>{loader}
                <p>
                  The problem score inform you of the strength of the problem
                  you are trying to solve? It has a direct relation with your
                  ability to monetize your solution. The overall problem score
                  is seen with respect to the kind of funding and other
                  resources you have.
                </p>
              </div>
              <div className="problem-form">
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group
                      className="form-group"
                      controlId="formBasicbuyar"
                    >
                      <Form.Label>Buyer Motivation Parity Score</Form.Label>
                      <Form.Control
                        type="text"
                        readOnly
                        value={motivationscore}
                      />
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group
                      className="form-group"
                      controlId="formGridState"
                    >
                      <Form.Label>Market Size</Form.Label>
                      <Form.Select
                        value={marketsize}
                        onChange={(e) => {
                          setMarketSize(parseInt(e.target.value));
                        }}
                      >
                        <option value="">-- Select One --</option>
                        <option value="-4">Few Customers</option>
                        <option value="0">000s Thousands</option>
                        <option value="5">000,000s Millions</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group
                      className="form-group"
                      controlId="formGridState"
                    >
                      <Form.Label>Frequency of the Problem</Form.Label>
                      <Form.Select
                        value={problemfrequency}
                        onChange={(e) => {
                          setProblemFrequency(parseInt(e.target.value));
                        }}
                      >
                        <option value="">-- Select One --</option>
                        <option value="1">Low - Low</option>
                        <option value="2">Med - Low</option>
                        <option value="3">High - High</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group
                      className="form-group"
                      controlId="formGridState"
                    >
                      <Form.Label>Time saving opportunity</Form.Label>
                      <Form.Select
                        value={timesaving}
                        onChange={(e) => {
                          setTimeSaving(parseInt(e.target.value));
                        }}
                      >
                        <option value="">-- Select One --</option>
                        <option value="1">1x</option>
                        <option value="2">10x</option>
                        <option value="4">100x</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group
                      className="form-group"
                      controlId="formGridState"
                    >
                      <Form.Label>Life of a problem</Form.Label>
                      <Form.Select
                        value={lifeproblem}
                        onChange={(e) => {
                          setLifeProblem(parseInt(e.target.value));
                        }}
                      >
                        <option value="">-- Select One --</option>
                        <option value="0">Months</option>
                        <option value="1">Years</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group
                      className="form-group"
                      controlId="formGridState"
                    >
                      <Form.Label>Life Saving</Form.Label>
                      <Form.Select
                        value={lifesaving}
                        onChange={(e) => {
                          setLifeSaving(parseInt(e.target.value));
                        }}
                      >
                        <option value="">-- Select One --</option>
                        <option value="0">No</option>
                        <option value="10">Yes</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group
                      className="form-group"
                      controlId="formGridState"
                    >
                      <Form.Label>Convenience / Comfort</Form.Label>
                      <Form.Select
                        value={conveniencecomfort}
                        onChange={(e) => {
                          setConvenienceComfort(parseInt(e.target.value));
                        }}
                      >
                        <option value="">-- Select One --</option>
                        <option value="0">No</option>
                        <option value="1">Yes</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                    <Form.Group
                      className="form-group"
                      controlId="formGridState"
                    >
                      <Form.Label>Regulatory Requirement</Form.Label>
                      <Form.Select
                        value={regulatory}
                        onChange={(e) => {
                          setRegulatory(parseInt(e.target.value));
                        }}
                      >
                        <option value="">-- Select One --</option>
                        <option value="0">No</option>
                        <option value="5">Yes</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <Form.Group
                      className="form-group"
                      controlId="formGridState"
                    >
                      <Form.Label>Security</Form.Label>
                      <Form.Select
                        value={security}
                        onChange={(e) => {
                          setSecurity(parseInt(e.target.value));
                        }}
                      >
                        <option value="">-- Select One --</option>
                        <option value="1">Enhance</option>
                        <option value="4">Prevent</option>
                        <option value="2">Respond</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <div className="col-md-6">
                  <Form.Group
                      className="form-group"
                      controlId="formGridState"
                    >
                      <Form.Label>Revenue Impact Opportunity</Form.Label>
                      <Form.Select
                        value={revenueopp}
                        onChange={(e) => {
                          setRevenueopp(parseInt(e.target.value));
                        }}
                      >
                        <option value="">-- Select One --</option>
                        <option value="2">1X</option>
                        <option value="4">10X</option>
                        <option value="8">100X</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="problem-total">
                      <span>Total</span>
                      <Form.Control type="text" readOnly value={total} />
                    </div>
                  </div>
                </div>
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
