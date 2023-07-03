import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import ReactLoading from "react-loading";

import {
  AddInitiative,
  GetInitiativeById,
  UpdateInitiative,
} from "../service/auth";

import { setJson, getSteps } from "../service/auth";

import { useDispatch } from "react-redux";
import { setInitiative } from "../Reducer/reducer";

export default function Initiative() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let Id = useParams();

  let loader;

  const [issubmit, setSubmit] = useState(false);
  const [validated, setValidated] = useState(false);
  const [isupdate, setUpdate] = useState(false);

  const [showAlert, setAlert] = useState(false);
  const [showAlertMsg, setAlertMsg] = useState({ type: "", msg: "" });

  const [fullname, setFullName] = useState("");
  const [scorecard, setScoreCard] = useState("");
  const [situation, setSituation] = useState("");

  function AlertShow(props) {
    if (showAlert) {
      return (
        <Alert variant={props.type}>
          <Alert.Heading>Alert !</Alert.Heading>
          <p>{props.text}</p>
        </Alert>
      );
    }
  }

  const setRedux = (data, json, evaluation_id) => {
    dispatch(
      setInitiative({
        data,
        json,
        evaluation_id,
      })
    );
    setJson(json, evaluation_id);
  };

  const submitData = async (event) => {
    event.preventDefault();
    setValidated(true);

    let result;
    try {
      setSubmit(true);
      result = await AddInitiative(fullname, scorecard, situation);
      if (result.data.success) {
        localStorage.setItem("evaluation_id", result.data.data.evaluation_id);

        let data = {
          fullname,
          scorecard,
          situation,
        };

        let userData = JSON.parse(localStorage.getItem("User"));

        setRedux(
          data,
          JSON.stringify({ Initiative: data }),
          result.data.data.evaluation_id
        );
        setRedux(
          userData.user,
          JSON.stringify({ User: userData.user }),
          result.data.data.evaluation_id
        );
        setAlertMsg({ type: "success", msg: result.data.message });
      }
    } catch (err) {
      setSubmit(false);
      setAlertMsg({ type: "danger", msg: "Fill all the Fields.." });
    }

    setAlert(true);
    if (result.data.success) {
      navigate("/user/problemdescription");
    }
  };

  const updateData = async (event) => {
    event.preventDefault();
    setValidated(true);
    localStorage.setItem("evaluation_id", Id.paramId);

    let url = "/user/";
    let redirect;

    redirect =  await getSteps(Id.paramId).then((res) => {
      if (res.data === "Initiative") {
        redirect = url + "problemdescription";
      } else if (res.data === "dimentionalProblem") {
        redirect = url + "problemdescription";
      } else if (res.data === "customeractorstakeholder") {
        redirect = url + "customeractor";
      } else if (res.data === "problemvalidationscore") {
        redirect = url + "problemvalidation";
      } else {
        redirect = url + res.data;
      }
      return redirect;
    });

    try {
      let result = await UpdateInitiative(
        Id.paramId,
        fullname,
        scorecard,
        situation
      );

      let data = {
        fullname,
        scorecard,
        situation,
      };


      setRedux(
        data,
        JSON.stringify({ Initiative: data }),
        Id.paramId
      );



      if (result.data.success) {
        setAlertMsg({ type: "success", msg: result.data.message });
        if(redirect){
          navigate(redirect);
        }else{
          navigate("/user/problemdescription");
        }
      }
    } catch (err) {
      setAlertMsg({ type: "danger", msg: "Fill all the Fields.." });
    }
    setAlert(true);
  };

  useEffect(() => {
    setSubmit(true);
    if (Id.paramId) {
      GetInitiativeById(Id.paramId).then((res) => {
        setFullName(res.data.data[0].initiative_name);
        setScoreCard(res.data.data[0].scorecard_name);
        setSituation(res.data.data[0].situation);
        setUpdate(true);
      });
    }
    setSubmit(false);
  }, [Id.paramId]);

  if (issubmit) {
    loader = <ReactLoading type="bubbles" color="#162c5d" width={50} />;
  }

  return (
    <div>
      <div className="initiative-page">
        {/* <div className="new-title">
          <div className="container">
            <h4>
              <i className="fa-solid fa-arrow-left-long"></i> New Initiative
            </h4>
          </div>
        </div> */}
        <div className="container">
          <div className="Quickly-login">
          <h2> {isupdate === true ? "Edit Initiative Details" : "Start evaluation of a new Initiative"}</h2>
            <AlertShow type={showAlertMsg.type} text={showAlertMsg.msg} />
            <Form
              noValidate
              validated={validated}
              onSubmit={isupdate === true ? updateData : submitData}
            >
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Initiative Name</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={fullname}
                  required
                  onChange={(e) => setFullName(e.target.value)}
                />
                <Form.Control.Feedback></Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Scorecard Name</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={scorecard}
                  required
                  onChange={(e) => setScoreCard(e.target.value)}
                />
                <Form.Control.Feedback></Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>What’s the situation</Form.Label>
                <Form.Select
                  required
                  value={situation}
                  aria-label="Default select example"
                  onChange={(e) => setSituation(e.target.value)}
                >
                  <option value="">-- Select One --</option>
                  <option value="1">Evaluate an idea</option>
                  <option value="2">
                    Evaluating an investment opportunity
                  </option>
                  {/* <option value="3">Evaluating exiting Product</option> */}
                  <option value="4">Evaluating in development Product</option>
                </Form.Select>
                <Form.Control.Feedback></Form.Control.Feedback>
              </Form.Group>
              <div className="sign-up-button">
                {loader}
                <Button type="submit" variant="primary">
                  {isupdate === true ? "Update" : "Submit"}
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
