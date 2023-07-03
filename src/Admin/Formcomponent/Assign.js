import React,{useState,useEffect} from 'react';
import { Form, Button } from "react-bootstrap";
import { assignToken } from "../../service/auth";
import Alert from "react-bootstrap/Alert";

export default function Assignpackage() {
    const [validated, setValidated] = useState(false);
    const [token, setToken] = useState("");
    const [showAlert, setAlert] = useState(false);
    const [showAlertMsg, setAlertMsg] = useState({ type: "", msg: "" });

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

    let loader;
    const submitData = async (event) => {
        event.preventDefault();
        setValidated(true);
        const user_email = localStorage.getItem("email");
        let result = await assignToken(user_email, token)
        if(!result.data.error && !result.data.errorUser) {
            setAlertMsg({ type: "success", msg: "You have been assigned to "+token });
            setAlert(true);
        }
        else if(!result.data.errorUser) {
            setAlertMsg({ type: "danger", msg: "User limit for this package has already been exceeded. Please upgrade your package more suited to your needs"});
            setAlert(true);
        }
        else {
            setAlertMsg({ type: "danger", msg: "You have been already assigned to this package"});
            setAlert(true);
        }
            
        console.log(result.data.error);
    }

    return (
        <div>
            <div className='dashbord-page'>
                <div className='container'>
                    <h1>Assign Yourself</h1>
                    <AlertShow type={showAlertMsg.type} text={showAlertMsg.msg} />
                    <Form noValidate validated={validated} onSubmit={submitData}  className="row token-form" >
                        <h4 className="mt-2 mb-4">Enter Package Token</h4>
                        <Form.Group className="mb-4 col-md-12" controlId="formBasicName">
                            <Form.Control
                                name="token" 
                                label='Enter Token'
                                placeholder='Enter Token'
                                value={token}
                                onChange={(e) => setToken(e.target.value)}
                            />
                            <Form.Control.Feedback></Form.Control.Feedback>
                        </Form.Group>
                        <div className="sign-up-button col-md-12">
                        {loader}
                            <Button type="submit" variant="primary">
                                Submit
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>    
        </div>
    );
}