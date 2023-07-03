import { Container, Form, Row, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Header2 from "./Header2";
import Initiativeheader from "../Component/Initiativeheader";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import { useSelector, useDispatch } from "react-redux";
import { setBuyermotivation } from "../../Reducer/reducer";
import ReactLoading from "react-loading";
import { setJson, getJson } from "../../service/auth";


export default function Buyermotivation() {
  let loader;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let evaluation_id = localStorage.getItem("evaluation_id");

  const form4 = useSelector((state) => state.initiative.form4value);
  const [issubmit, setSubmit] = useState(false);
  const [validated, setValidated] = useState(false);
  const [score, setScore] = useState(form4.score);
  const [quadrant, setQuadrant] = useState("");
  const [values, setValues] = useState([]);


  const setRedux = (data, json, evaluation_id) => {
    dispatch(
      setBuyermotivation({
        data,
        json,
        evaluation_id,
      })
    );
    setJson(json, evaluation_id);
  };

  const submitData = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (isNaN(score) === false && score) {
      var num = [-1, 0, 1, 2, 3, 4, 5, 6, -10, -4];
      if (num.includes(score)) {
      
        let data ={ score , quadrant}
       setRedux(data, JSON.stringify({ "buyermotivation": data }), evaluation_id);
       navigate("/user/problemscorecard");


      } else {
        setValidated(false);
        $('.noalert').show();
        window.scrollTo(0, 0);
      }
    } else {
      setValidated(true);
      window.scrollTo(0, 0);
    }
  };

  const setData = (e) =>{
 
    setQuadrant(e.target.value)

    if (e.target.value == 1){

      setValues(quadrant1);

    }else if(e.target.value == 2){

      setValues(quadrant2);


    }else if(e.target.value == 3){

      setValues(quadrant3);


    }else if(e.target.value == 4){

      setValues(quadrant4);


    }else{

      setValues([]);

    }

}

const quadrant1 = [

  { id: 1, item: '1' },

  { id: 2, item: '0'},

  { id: 3, item: '-1'},
];

const quadrant2 = [

  { id: 1, item: '6' },

  { id: 2, item: '3'},

  { id: 3, item: '2'},
];

const quadrant4 = [

  { id: 1, item: '2' },

  { id: 2, item: '1'},

  { id: 3, item: '0'},
];

const quadrant3 = [

  { id: 1, item: '-1' },

  { id: 2, item: '-4'},

  { id: 3, item: '-10'},
];

  
  useEffect(() => {
    window.scrollTo(0, 0);
    setSubmit(true);
    getJson(evaluation_id).then((res) => {
      let data = JSON.parse(res.data.data.json);
      if (data.buyermotivation) {
        setScore(data.buyermotivation.score);
        setQuadrant(data.buyermotivation.quadrant);

        if (data.buyermotivation.quadrant == 1){

          setValues(quadrant1);
    
        }else if(data.buyermotivation.quadrant == 2){
    
          setValues(quadrant2);
    
    
        }else if(data.buyermotivation.quadrant == 3){
    
          setValues(quadrant3);
    
    
        }else if(data.buyermotivation.quadrant == 4){
    
          setValues(quadrant4);
    
    
        }else{
    
          setValues([]);
    
        }
    
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
                <h2>Buyer Motivation Parity Score</h2>{loader}
                <p>
                  Buyer motivation parity informs how likely a target customer
                  is to pay for the services you intend to provide. How
                  important and urgent is it for the customer to solve the
                  problem for which you are providing a solution? And what are
                  your customer's current options to solve the problem? Refer to
                  the chart. Pick a quadrant and then pick a sub-category. Enter
                  the score in the box below.
                </p>
                <h3>Enter the chosen score below</h3>
                {/* <Form noValidate validated={validated}>
                  <Form.Group className="below-form" controlId="formBasictext">
                    <Form.Control
                      type="number"
                      placeholder="Score"
                      required 
                      defaultValue={score}
                      onChange={(e) => setScore(parseInt(e.target.value))}
                    />
                    <Form.Control.Feedback></Form.Control.Feedback>
                    <span className="text-danger noalert" style={{display:'none'}}>Select number from below chart</span>
                  </Form.Group>
                </Form> */}
                <Form className="row" noValidate validated={validated}>
               <div className="col-md-3">
                <Form.Group
                      className="form-group"
                      controlId="formGridState"
                    >
                      <Form.Select
                       value={quadrant}
                       onChange={(e) => {
                         setData(e);
                       }}
                      >
                        <option value="">-- Select Quadrant --</option>
                        <option value="1">1st Quadrant</option>
                        <option value="2">2nd Quadrant</option>
                        <option value="3">3rd Quadrant</option>
                        <option value="4">4th Quadrant</option>
                      </Form.Select>
                    </Form.Group>
                    </div>
                    <div className="col-md-3">
                    <Form.Group
                      className="form-group"
                      controlId="formGridState"
                    >
                      <Form.Select
                        value={score}
                        onChange={(e) => setScore(parseInt(e.target.value))}
                      >
                        <option value="">-- Select Score --</option>
                        {values.map(item =>
      <option value={item.item}>{item.item}</option>
    )};

                      </Form.Select>
                    </Form.Group>
                    </div>
                    </Form>
              </div>
              <div className="buyer-motivation ">
                <div className="row">
                  <div className="col-md-12">
                    <div className="line-chart">
                      <img src="../img/line-chart.png" alt="" />
                    </div>
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
