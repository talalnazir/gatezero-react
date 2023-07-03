import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import ReactLoading from "react-loading";

import { Forgotpassword } from "../service/auth";

export default function Sing() {
  let loader;

  const [validated, setValidated] = useState(false);
  const [issubmit, setSubmit] = useState(false);
  const [showAlert, setAlert] = useState(false);
  const [showAlertMsg, setAlertMsg] = useState({ type: "", msg: "" });

  const [email, setEmail] = useState("");


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

  const submitData = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);

    try {
      setSubmit(true);
      let result = await Forgotpassword(email);
      if (result) {
        setAlertMsg({ type: "success", msg: "Reset password send to your email. " + email });
      }
      setSubmit(false);
    } catch (err) {
      setSubmit(false);
      if (err.response.status === 422) {
        setAlertMsg({
          type: "danger",
          msg: "Fill all the details ",
        });
      }
      if (err.response.status === 401) {
        setAlertMsg({ type: "danger", msg: err.response.data.message });
      }
    }
    setAlert(true);
  };

  if (issubmit) {
    loader = <ReactLoading type="bubbles" color="#162c5d" width={50} />;
  }

  return (
    <div>
      <div className="login-page">
        <div className="container">

          <div className="Quickly-login">
            <div className="logo-login">
              <img src="img/login-logo.png" alt="GATEZERO" />
            </div>
            <h2>Forgot Password</h2>
            <AlertShow type={showAlertMsg.type} text={showAlertMsg.msg} />
            <Form noValidate validated={validated} onSubmit={submitData}>
              <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Your Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Control.Feedback></Form.Control.Feedback>
              </Form.Group>

              <div className="sign-up-button">
                {loader}
                <Button type="submit" variant="primary">
                  Submit
                </Button>
              </div>
              <div className="allredy0sign">
                <h3>
                  Don't have an account?{" "}
                  <Button variant="link">
                    {" "}
                    <Link to="/signup">Sign Up</Link>
                  </Button>
                </h3>
              </div>
            </Form>
          </div>
        </div>
      </div>

    </div>
  );
}
