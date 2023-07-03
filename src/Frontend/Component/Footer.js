import React from "react";
import { Container, Row } from "react-bootstrap";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <Container>
                    <Row>
                        <div className="footer-content">
                            <div className="footer-list">
                                <div className="footer-logo">
                                    <a href="/"><img src="img/logo.png" alt="GATEZERO" /></a>
                                </div>
                                <p>Copyright © 2022 GATEZERO <br />All Rights Reserved.</p>
                            </div>
                            <div className="footer-list">
                                <h4>quick Links</h4>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/about-us">About Us</a></li>
                                    <li><a href="/contact-us">Contact Us</a></li>
                                </ul>
                            </div>
                            <div className="footer-list">
                                <h4>get in touch</h4>
                                <ul className="social">
                                    <li><a href=""><img src="img/in-icon.png" alt="GATEZERO" /></a></li>
                                    <li><a href=""><img src="img/twi-icon.png" alt="GATEZERO" /></a></li>
                                    <li><a href=""><img src="img/int-icon.png" alt="GATEZERO" /></a></li>
                                </ul>
                            </div>

                        </div>

                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Footer;