import React from "react";
import { Container } from "react-bootstrap";

export default function ContactUs() {
    return (
        <div>
            <div className="contact-page">
                <Container>
                    <div className="row">
                        <div className="heading-inner-pages">
                            <h1 className="innr-heading">Contact <span>us</span></h1>
                            <p className="desc">Take one simple step to ensure your digital success</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="contact-content">

                            <div className="contact-info">
                                <div className="icon-c">
                                    <img src="img/email.png" alt="GATEZERO"></img>
                                </div>
                                <div className="info-c">
                                    <h3>Get in touch</h3>
                                    <a href={`mailto:Hemal.Patel@TheTakeoffPoint.com`}>
                                        Hemal.Patel@TheTakeoffPoint.com
                                    </a>
                                </div>

                            </div>
                            <div className="contact-info">
                                <div className="icon-c">
                                    <img src="img/telephone.png" alt="GATEZERO"></img>
                                </div>
                                <div className="info-c">
                                    <h3>contact no</h3>
                                    <a href="tel:+1-469-213-1692">1-469-213-1692</a>
                                </div>

                            </div>
                            <div className="contact-info">
                                <div className="icon-c">
                                    <img src="../img/home.png" alt="GATEZERO"></img>
                                </div>
                                <div className="info-c">
                                    <h3>Company Address</h3>
                                    <a href="https://goo.gl/maps/UhT3z38UanhFKbPu9" target="_blank">
                                        9808 Sota Grande Dr <br />Plano, TX 75025, USA
                                    </a>
                                </div>

                            </div>

                        </div>
                        <div className="contact-image">
                            <img src="img/contact_us.png" alt=""></img>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="arrow-left-bg contact-bg">
            </div>
        </div>
    );
}