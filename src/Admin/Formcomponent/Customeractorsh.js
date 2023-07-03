import { Container, Form, Row, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header2 from "./Header2";
import Initiativeheader from "../Component/Initiativeheader";
import { useSelector, useDispatch } from "react-redux";
import ReactLoading from "react-loading";
import { setCustomerActor } from "../../Reducer/reducer";
import { setJson, getJson } from "../../service/auth";

export default function Customeractorsh() {
  let loader;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let evaluation_id = localStorage.getItem("evaluation_id");


  const [customer, setCustomer] = useState("");
  const [actor, setActor] = useState("");
  const [stakeholder, setStakeholder] = useState("");
  const [issubmit, setSubmit] = useState(false);

  const setRedux = (data, json, evaluation_id) => {
    dispatch(
      setCustomerActor({
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
    
    let data = {
      customer,
      actor,
      stakeholder,
    };
    setRedux(data, JSON.stringify({ "customeractorstakeholder": data }), evaluation_id);
    navigate("/user/buyermotivation");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setSubmit(true);
    getJson(evaluation_id).then((res) => {
      let data = JSON.parse(res.data.data.json);
      if (data.customeractorstakeholder) {
        setCustomer(data.customeractorstakeholder.customer);
        setActor(data.customeractorstakeholder.actor);
        setStakeholder(data.customeractorstakeholder.stakeholder);
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
                <h2>
                  Describe who is the customer, actor, and stakeholder of the
                  initiative.
                </h2>{loader}
                <p>
                  <span>Customer:</span>Person who is responsible for paying you
                  and who has authority to cancel usage of your service.
                </p>
                <p>
                  <span>Actors:</span>Any person or system who interacts with
                  your service in order to accomplish a task. A customer can
                  also be an actor.
                </p>
                <p>
                  <span>Stakeholder:</span> Group of people interested in the
                  outcome of the initiative. They may or may not be customers or
                  actors.
                </p>
              </div>
              <div className="dimentional-list">
                <div className="row">
                  <div className="col-md-4">
                    <label>Customer</label>
                    <div className="dimentional-box">
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control
                          as="textarea"
                          defaultValue={customer}
                          onChange={(e) => setCustomer(e.target.value)}
                        />
                      </Form.Group>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <label>Actor</label>
                    <div className="dimentional-box">
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control
                          as="textarea"
                          defaultValue={actor}
                          onChange={(e) => setActor(e.target.value)}
                        />
                      </Form.Group>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <label>Stakeholder</label>
                    <div className="dimentional-box">
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control
                          as="textarea"
                          defaultValue={stakeholder}
                          onChange={(e) => setStakeholder(e.target.value)}
                        />
                      </Form.Group>
                    </div>
                  </div>

                  <div className="col-md-12">
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
