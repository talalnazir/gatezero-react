import React from 'react';
import { Container } from "react-bootstrap";

export default function AboutUs() {
    return (
        <div className="about-page">
            <Container>
                <div className="row">
                    <div className="heading-inner-pages">
                        <h1 className="about-heading">about <span>us</span></h1>
                    </div>
                </div>
                <div className="row">
                    <div className="about-content">
                        <p>
                            Our only passion is to see our clients put their effort in the right direction and achieve tremendous success. Numerous digital
                            initiatives fail to produce results across the board, whether established corporations, startups, or midsize companies. with
                            our unique framework and tools, corporations, startups and investors now have a compelling way to ensure their digital endeavors
                            produce the results.
                        </p>
                        <p>
                            In alignment with our vision to democratize the knowledge and use of GateZero framework, we offer easy engagement
                            models. You can do it yourself or let us step in and help. We also provide training programs to quickly incorporate new tools
                            and methodology to build game-changing digital solutions.
                        </p>
                        <p>
                            With our tools, corporations, investors and entrepreneurs can pick the most promising investment options and formulate the
                            winning product every time. They can also prepare their entire portfolio and ensure leadership positions or significantly
                            increase their return on investment.
                        </p>
                        <p>
                            All great things start with the first step, so try our tools for free now. Run a known successful or failed digital initiative
                            through GateZero framework and see the results. Take a test drive now.
                            {/* - <a href="#">Start here</a> */}
                        </p>
                    </div>
                    <div className="about-image">
                        <img src="img/take2.jpg" alt="GATEZERO"></img>
                    </div>
                </div>
                <div className="about-beforehand">
                    <h3>
                        Experience the difference, once you leverage our services, you are not going back to the old ways!!
                    </h3>
                </div>


                <div className="about-founder-section">
                    <h2 className="">
                        Founder
                        <span>Hemal Patel</span>
                    </h2>
                    <div className="founder-image">
                        <img src="img/about_us_2.jpg" alt="GATEZERO"></img>
                    </div>
                    <p>
                        Hemal Patel is an author, entrepreneur and consultant in field of technology and digital products for over two decades.
                        In his long career, he has worked with giant multinationals to startups. Through his experience of being involved in deep
                        hands-on technology as well as product research and need, Hemal has invented GateZero framework as financial
                        gating solution & product formulation for IT initiatives to prevent billions of dollars of loss each year. He continues his
                        consulting passion to guide startups and multinationals towards successful digital products and strategies.
                    </p>
                </div>
                <div className="our-clients-section">
                    <h3 className="">
                        Notable Clients
                    </h3>
                    <div className="client-logos">
                        <div className="c-logos">
                            <img src="img/coca_cola.png" alt="GATEZERO" />
                        </div>
                        <div className="c-logos">
                            <img src="img/microsoft.png" alt="GATEZERO" />
                        </div>
                        <div className="c-logos">
                            <img src="img/verizon.png" alt="GATEZERO" />
                        </div>
                        <div className="c-logos">
                            <img src="img/loreal.jpg" alt="GATEZERO" />
                        </div>
                        <div className="c-logos">
                            <img src="img/wells_fargo_bank.png" alt="GATEZERO" />
                        </div>
                        <div className="c-logos">
                            <img src="img/mary_kay.png" alt="GATEZERO" />
                        </div>
                        <div className="c-logos">
                            <img src="img/american_airlines.png" alt="GATEZERO" />
                        </div>
                        <div className="c-logos">
                            <img src="img/nike.jpg" width="350" alt="GATEZERO" />
                        </div>
                        <div className="c-logos">
                            <img src="img/jpmorgan_chase.png" alt="GATEZERO" />
                        </div>

                    </div>

                </div>
            </Container>
            <div className="arrow-left-bg about-bg">
            </div>
            <div className="arrow-right-bg about-bg">
            </div>
        </div>

    )
}