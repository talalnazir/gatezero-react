import React, {useState, useEffect} from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getFreetrail } from "../service/auth";

export default function Product () {
    const [validated, setValidated] = useState(true);
    const [checkoutLink, setcheckoutLink] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const componentDidMount = async () => {
        
        const email = localStorage.getItem("email");
        if(!userEmail) {
            setUserEmail(email);
        }
        
        let result = await getFreetrail(email)
        console.log(result.data.response)
        if(result.data.response == 'error') {
            setValidated(false);
        }
    }
    componentDidMount();
    useEffect(() => {
        if(userEmail) {
            setcheckoutLink('/user/Checkout');
        }
        else {
            setcheckoutLink('/Checkout');
        }
    });
console.log(checkoutLink)
if(!checkoutLink) {
    return (
        <div>
            <h3 className="pricing-heading">Activate one of the value pack</h3>
            <div className="container">
                <div className="row product-section">
                    <div className="col-md-3">
                        <Card>
                            <Card.Body>
                            <Card.Text>
                                <ul>
                                    <li>Unlimited Users</li>
                                    <li>Unlimited scorecards</li>
                                </ul>
                                <div className="price-month">$649/Month</div>
                            </Card.Text>
                            <Link to='/Checkout' state={{ from: "649" }} className="btn btn-default">Activate</Link>
                            {/* <Button variant="default">Activate</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card>
                            <Card.Body>
                            <Card.Text>
                                <ul>
                                    <li>10 users</li>
                                    <li>10 scorecards/month</li>
                                </ul>
                                <div className="price-month">$349/Month</div>
                            </Card.Text>
                            <Link to='/Checkout' state={{ from: "349" }} className="btn btn-default">Activate</Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card>
                            <Card.Body>
                            <Card.Text>
                                <ul>
                                    <li>1 user</li>
                                    <li>2 scorecards/month</li>
                                </ul>
                                <div className="price-month">$149/Month</div>
                            </Card.Text>
                            <Link to='/Checkout' state={{ from: "149" }} className="btn btn-default">Activate</Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card>
                            <Card.Body>
                            <Card.Text>
                                <ul>
                                    <li>1 free scorecards</li>
                                    <li>7-days free trail</li>
                                </ul>
                                <div className="price-month">Free</div>
                            </Card.Text>
                            {validated ? (
                                <Link to='/Checkout' state={{ from: "free" }} className="btn btn-default">Activate</Link>
                            ) : (
                                <Link to='/Checkout' state={{ from: "free" }} className="btn btn-default disabled">Already Utilized</Link>
                            )}
                            
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
      </div>
    );  
}
else {
    return (
        <div>
            <h3 className="pricing-heading">Activate one of the value pack</h3>
            <div className="container">
                <div className="row product-section">
                    <div className="col-md-3">
                        <Card>
                            <Card.Body>
                            <Card.Text>
                                <ul>
                                    <li>Unlimited Users</li>
                                    <li>Unlimited scorecards</li>
                                </ul>
                                <div className="price-month">$649/Month</div>
                            </Card.Text>
                            <Link to='/user/Checkout' state={{ from: "649" }} className="btn btn-default">Activate</Link>
                            {/* <Button variant="default">Activate</Button> */}
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card>
                            <Card.Body>
                            <Card.Text>
                                <ul>
                                    <li>10 users</li>
                                    <li>10 scorecards/month</li>
                                </ul>
                                <div className="price-month">$349/Month</div>
                            </Card.Text>
                            <Link to='/user/Checkout' state={{ from: "349" }} className="btn btn-default">Activate</Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card>
                            <Card.Body>
                            <Card.Text>
                                <ul>
                                    <li>1 user</li>
                                    <li>2 scorecards/month</li>
                                </ul>
                                <div className="price-month">$149/Month</div>
                            </Card.Text>
                            <Link to='/user/Checkout' state={{ from: "149" }} className="btn btn-default">Activate</Link>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-3">
                        <Card>
                            <Card.Body>
                            <Card.Text>
                                <ul>
                                    <li>1 free scorecards</li>
                                    <li>7-days free trail</li>
                                </ul>
                                <div className="price-month">Free</div>
                            </Card.Text>
                            {validated ? (
                                <Link to='/user/Checkout' state={{ from: "free" }} className="btn btn-default">Activate</Link>
                            ) : (
                                <Link to='/user/Checkout' state={{ from: "free" }} className="btn btn-default disabled">Already Utilized</Link>
                            )}
                            
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
      </div>
    );
}

}