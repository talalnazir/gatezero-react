import React, {useState, useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
// import Alert from "react-bootstrap/Alert";
// import ReactLoading from "react-loading";
import CountrySelect from "react-bootstrap-country-select";
import { checkoutForm, setFreetrail } from "../service/auth";
import PaypalExpressBtn from './Paypal';
import { isExpired, decodeToken } from "react-jwt";

export default function Checkout() {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("token");
        const isMyTokenExpired = isExpired(token);
        if (isMyTokenExpired) {
          navigate("/signingupcheckout");
        }
      },[]);
    let loader;
    const [validated, setValidated] = useState(false);
    const [issubmit, setSubmit] = useState(true);

    const location = useLocation();
    const { from } = location.state;
      console.log(from);
    if(from == 'free') {
        const componentDidMount = async () => {
            const email = localStorage.getItem("email");
            let result = await setFreetrail(email)
            navigate("/user");
        }
        componentDidMount();
    }
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [zip, setZip] = useState("");
    const [country, setCountry ] = useState("");
    const [city, setCity ] = useState("");
    const [packages, setPackage ] = useState("");
    const [display_string, setDisplayString ] = useState("")

    
    const submitData = async (event) => {
        event.preventDefault();
        setValidated(true);
        try {
            const u_email = localStorage.getItem("email");
            let result = await checkoutForm(firstname, lastname, email, address, phone, city, country.name, from, zip, u_email)
            setSubmit(false);
        } catch (err) {
            setSubmit(true);
            
        }
      };
    if(issubmit) {
        return (
            <div>
                <div className="login-page">
                    <div className="container">
                        <div className="checkout-form">
                            <h2>Checkout</h2>
                            <Form noValidate validated={validated} onSubmit={submitData}  className="row" >
                                <h4 className="mt-2 mb-4">Billing Information</h4>
                                <Form.Group className="mb-4 col-md-6" controlId="formBasicName">
                                    <Form.Control
                                        name="firstname" 
                                        label='First Name'
                                        placeholder='First Name'
                                        value={firstname}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                    <Form.Control.Feedback></Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-4 col-md-6" controlId="formBasicName">
                                    <Form.Control
                                        name="lastname" 
                                        label='Last Name'
                                        placeholder='Last Name'
                                        value={lastname}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                    <Form.Control.Feedback></Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-4 col-md-6" controlId="formBasicName">
                                    <Form.Control
                                        name="email" 
                                        label='Email'
                                        placeholder='Email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <Form.Control.Feedback></Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-4 col-md-6" controlId="formBasicName">
                                    <Form.Control
                                        name="phone"
                                        placeholder='Contact No.'
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                    <Form.Control.Feedback></Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-4 col-md-12" controlId="formBasicName">
                                    <Form.Control
                                        name="address"
                                        placeholder='Enter Your Address'
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                    <Form.Control.Feedback></Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-4 col-md-4" controlId="formBasicName">
                                    <Form.Control
                                        name="zip"
                                        placeholder='Zip Code'
                                        value={zip}
                                        onChange={(e) => setZip(e.target.value)}
                                    />
                                    <Form.Control.Feedback></Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-4 col-md-4" controlId="formBasicName">
                                <CountrySelect  value={country}   onChange={(e) => setCountry(e)}  required />
                                    <Form.Control.Feedback></Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-4 col-md-4" controlId="formBasicName">
                                    <Form.Control
                                        name="city" 
                                        placeholder='City'
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                    />
                                    <Form.Control.Feedback></Form.Control.Feedback>
                                </Form.Group>
                                
                                {/* <Form.Group>
                                    <Form.Select 
                                        required
                                        aria-label="Default select example"
                                        onChange={(e) => setPackage(e.target.value)}
                                    >
                                        <option value="">Buy Scorecard</option>
                                        <option value="one">1 User in $149 / Month</option>
                                        <option value="ten">1-10 Users $349 / Month</option>
                                        <option value="unlimited">Unlimited Users $649 / Month</option>
                                    </Form.Select>
                                </Form.Group> */}
                                <div className="sign-up-button">
                                    {loader}
                                    <Button type="submit" variant="primary">
                                        Pay ${from}
                                    </Button>
                                </div>
                            </Form>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
    else {
        if(from == 649) {
            return (
                <div>
                    <div className="login-page">
                        <div className="container">
                            <div className="checkout-form">
                            <div id="paypal-button-container-P-3AR57177Y1619363XML2SSQQ"></div>
                                <PaypalExpressBtn data={'unlimited'}></PaypalExpressBtn>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else if(from == 349) {
            return (
                <div>
                    <div className="login-page">
                        <div className="container">
                            <div className="checkout-form">
                            <div id="paypal-button-container-P-2GB94113Y3182014CML2SQLI"></div>
                                <PaypalExpressBtn data={'ten'}></PaypalExpressBtn>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else if(from == 149) {
            return (
                <div>
                    <div className="login-page">
                        <div className="container">
                            <div className="checkout-form">
                            <div id="paypal-button-container-P-21761821TN8123130ML2SOXY"></div>
                                <PaypalExpressBtn data={'one'}></PaypalExpressBtn>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        
    }
}