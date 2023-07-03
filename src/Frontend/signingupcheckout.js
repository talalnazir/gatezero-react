import React, { useState } from "react";
import { Link,useNavigate, NavLink } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import ReactLoading from "react-loading";
import CountrySelect from "react-bootstrap-country-select";

import { Register,Sign } from "../service/auth";

export default function SignupCheckout() {
  let loader;
  const [validated, setValidated] = useState(false);
  const [issubmit, setSubmit] = useState(false);
  const [showAlert, setAlert] = useState(false);
  const [showAlertMsg, setAlertMsg] = useState({ type: "", msg: "" });

  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [working, setWorking] = useState("");
  const [country, setCountry ] = useState(""); 
  
  const navigate = useNavigate();

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
    setValidated(true);
    setSubmit(true);

    try {

      await Register(fullname, email, password, working,country.name);
          
      let result = await Sign(email, password); 

      localStorage.setItem("token", result.data.access_token);
      localStorage.setItem("User", JSON.stringify(result.data));
      localStorage.setItem("email", result.data.user.email);

      setAlertMsg({ type: "success", msg: "Wait Redirecting..." });
      if (result.data.user.role === "user") {
        navigate("/products");
      }
     
      setSubmit(false);
    } catch (err) {
      setSubmit(false);
      window.scrollTo(0, 0);
      if (err.response.status === 422) {
        setAlertMsg({type: "danger",msg: "Fill all the details",});
      }
      if (err.response.status === 401) {
        setAlertMsg({ type: "danger", msg: err.response.data.error.email[0] });
      }
      setAlert(true);
    }
  };

  if (issubmit) {
    loader = <ReactLoading type="bubbles" color="#162c5d" width={50} />;
  }

  return (
    <div>
      <div className="login-page">
        <div className="container">
          <h2>Quickly tell us a few things</h2>
          <div className="Quickly-login">
            <AlertShow type={showAlertMsg.type} text={showAlertMsg.msg} />
            <Form noValidate validated={validated} onSubmit={submitData}   >
              <Form.Group className="mb-4" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="username"
                  type="text"
                  placeholder="Your Name"
                  autoComplete="off"
                  required
                  value={fullname}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <Form.Control.Feedback></Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-4 password" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  autoComplete="off"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Control.Feedback></Form.Control.Feedback>
                <span class="check-aero">
                  <i class="fa-solid fa-circle-check"></i>
                </span>
              </Form.Group>
              <Form.Group
                className="mb-4 password"
                controlId="formBasicPassword"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="********"
                  maxLength="8"
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Form.Control.Feedback></Form.Control.Feedback>
                <span class="check-aero">
                  <i class="fa-solid fa-circle-check"></i>
                </span>
                <Form.Text className="text-muted">
                  Password need to be at least 8 characters long.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Working as</Form.Label>
                <Form.Select
                  required
                  aria-label="Default select example"
                  onChange={(e) => setWorking(e.target.value)}
                >
                  <option value="">-- Select One --</option>
                  <option value="individual">Individual</option>
                  <option value="corporate leadership">Corporate leadership</option>
                  <option value="entrepreneur">Entrepreneur</option>
                  <option value="investor">Investor</option>
                </Form.Select>
                <Form.Control.Feedback></Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Country</Form.Label>
                <CountrySelect  value={country}   onChange={(e) => setCountry(e)}  required />
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
                  Already registered?   <Button variant="link"> <Link to="/sign">Sign In</Link></Button>
                </h3>
                {/* <NavLink to="/sign">About us</NavLink> */}
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
