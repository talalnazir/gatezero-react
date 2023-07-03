import React from "react";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";

export default function Roles() {
    var Scroll = require('react-scroll');
    var Element = Scroll.Element;
    var scroller = Scroll.scroller;
    let url = window.location.href;
    let url_split = '';
    let url_id = '';
    url_split = url.split('#');
    url_id = url_split[1];

    setTimeout(function () {
        scroller.scrollTo(url_id);
    }, 1000);

    return (
        <div>
            <div className="heading-inner-pages">
                <Container>
                    <Row className="">
                        <h1>Roles</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>

                    </Row>
                </Container>
            </div>
            <div className="services-page-v2">
                <Container>

                    <div className="section-end-v2" id="founders-and-ceos">
                        <Element name="founders-and-ceos"> </Element>
                        <Container>
                            <Row>
                                <Col className="service-content">
                                    <div className="service-content-details">
                                        <div className="heading-with-icon">
                                            <div className="_icon">
                                                <img src="img/founder.png" alt="GATEZERO" />
                                            </div>
                                            <h2>Founder & CEOs</h2>
                                        </div>
                                        <p>
                                            Founders and CEOs shoulder many responsibilities, and their decisions could make or break the organizations they
                                            lead. All businesses are digital businesses now. A large corporation cannot survive without cutting-edge technology.
                                            Enterprises are searching for a portfolio of advanced digital solutions to become their leadership instrument.
                                        </p>
                                        <p>
                                            However, this is easier said than done. The critical question is which innovation will pay back and which of the
                                            current or planned initiatives will fail? What should be done with existing solutions? How to transform them to
                                            become a game changers? Over 90% of innovative efforts fail, and about 50 to 70% of digital transformation
                                            initiatives do not pay back as expected. A large percentage of initiatives never get finished and get shelved.
                                            Leadership must keep the lights on, continue to provide incremental updates to the existing portfolio of
                                            applications, and at the same time make space for innovation in terms of time, resources, and finance. The margin of
                                            error is small. Failures cost not only capital and time loss but also high opportunity costs. What else could the
                                            organization have done or should have been doing past three years that was invested in a failed initiative? This
                                            pressure and lack of direction also cause a stressful environment, and employees do not know what is expected out of
                                            them and how to deliver it – a significant reason for employee attrition.
                                        </p>
                                        <h4>GateZero provides decisive services to counter these critical challenges.</h4>
                                        <ul>
                                            <li>Know which solutions will generate revenue, to what extent, and when?</li>
                                            <li>Clearly know your digital investment priorities</li>
                                            <li>Design path-breaking digital innovation</li>
                                            <li>Know the likely outcome of planned initiatives beforehand</li>
                                            <li>Accelerate adoption from customers</li>
                                            <li>Turn existing products into game changers</li>
                                            <li>Build high impact roadmap with accurate priorities</li>
                                            <li>Accelerate growth and revenue</li>
                                            <li>Troubleshoot existing digital solutions – why is it not working?</li>
                                            <li>Avoid loss of capital, time, and opportunity</li>
                                            <li>Avoid loss of reputation</li>
                                            <li>Align organization in one direction, provide clarity and improve the work environment</li>
                                        </ul>
                                        <div className="red-more-button">
                                            <Nav.Link href="/signup">
                                                <Button className="btn-primary-2 mr-l">Start a free evaluation</Button>
                                            </Nav.Link>
                                        </div>
                                    </div>
                                    <div className="aside-services">
                                        <h3>Recommended Services</h3>
                                        <ul>
                                            <li><a target="_blank" href="services#financial-gating-solution">Financial gating solution</a></li>
                                            <li> <a target="_blank" href="services#product-formulation">Product Formulation</a></li>
                                            <li><a target="_blank" href="services#true-agile">True Agile</a></li>
                                            <li><a target="_blank" href="services#team-formulation">Team Formulation</a></li>
                                            <li><a target="_blank" href="services#marketing-messages">Marketing Messages & 360 Marketing</a></li>
                                            <li> <a target="_blank" href="services#research">Research</a></li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>

                        </Container>
                    </div>
                </Container>
            </div>
            <div className="services-page-v2">
                <Container>

                    <div className="section-end-v2" id="venture-capitalists">
                        <Element name="venture-capitalists"> </Element>
                        <Container>
                            <Row>
                                <Col className="service-content _row-reverse">
                                    <div className="service-content-details">
                                        <div className="heading-with-icon">
                                            <div className="_icon">
                                                <img src="img/venture_capitalists.png" alt="GATEZERO" />
                                            </div>
                                            <h2>Venture Capitalists</h2>
                                        </div>
                                        <p>
                                            Typically startup failure rates are high. Over 90% of startups fail. Even well-funded startups have high failure
                                            rates. Venture capital firms count on a few of their investments making big, which covers all the failed ones. The
                                            more accurate investment venture capitalists make, the better the return.
                                        </p>
                                        <h4>
                                            We help our client venture capitalist firms to answer a few critical questions.
                                        </h4>
                                        <ul>
                                            <li>Should they invest in an opportunity? What is the likely outcome of a particular technology investment?</li>
                                            <li>Which of my current investment should be continued, and which needs to be pulled out?</li>
                                            <li>How to change existing investments into game changers</li>
                                            <li>Identify customers for current investments and run a better marketing campaign</li>
                                            <li>Which out of the current investment opportunity is best?</li>
                                        </ul>
                                        <p>
                                            Our framework, tools, and processes produce highly accurate predictions for a proposed investment, and our pivot and
                                            innovation designer tools significantly boost any digital initiative.
                                        </p>

                                        <div className="red-more-button">
                                            <Nav.Link href="/signup">
                                                <Button className="btn-primary-2 mr-l">Start a free evaluation</Button>
                                            </Nav.Link>
                                        </div>
                                    </div>
                                    <div className="aside-services">
                                        <h3>Recommended Services</h3>
                                        <ul>
                                            <li><a target="_blank" href="services#financial-gating-solution">Financial gating solution</a></li>
                                            <li><a target="_blank" href="services#product-formulation">Product Formulation</a></li>
                                            <li><a target="_blank" href="services#true-agile">True Agile</a></li>
                                            <li><a target="_blank" href="services#team-formulation">Team Formulation</a></li>
                                            <li><a target="_blank" href="services#marketing-messages">Marketing Messages & 360 Marketing</a></li>
                                            <li><a target="_blank" href="services#research">Research</a></li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>

                        </Container>
                    </div>
                </Container>
            </div>
            <div className="services-page-v2">
                <Container>

                    <div className="section-end-v2" id="executive-leadership">
                        <Element name="executive-leadership"> </Element>
                        <Container>
                            <Row>
                                <Col className="service-content">
                                    <div className="service-content-details">
                                        <div className="heading-with-icon">
                                            <div className="_icon">
                                                <img src="img/executive_leadership.png" alt="GATEZERO" />
                                            </div>
                                            <h2>Executive Leadership</h2>
                                        </div>
                                        <p>
                                            IT leadership has their task cut out and might manage hundreds of applications in their portfolio. There are
                                            corporate goals and targets to meet. How do you decide which digital solutions need to be invested in and which ones
                                            need to shut down? How do you make those decisions? At what point can you make those decisions? Are you pulling the
                                            plug too soon? Or are the decisions long overdue? Conflicting directions and limited budgets put much pressure on
                                            the leadership.
                                        </p>
                                        <h4>
                                            Our services provide invaluable differences to this situation. We provide key answers for IT leaders.
                                        </h4>
                                        <ul>
                                            <li>How to change your existing portfolio of applications into game-changing solutions?</li>
                                            <li>Which initiatives should be top priorities for the business goals?</li>
                                            <li>When will an initiative produce results before you can conclude?</li>
                                            <li>What kind of sales and marketing effort and conversion sales cycle can you expect?</li>
                                            <li>How to set a firm direction for initiatives that do not create panic at every fall of the hat.</li>
                                        </ul>
                                        <p>
                                            Our framework, tools, and processes produce highly accurate predictions for a proposed investment, and our pivot and
                                            innovation designer tools significantly boost any digital initiative.
                                        </p>
                                        <div className="red-more-button">
                                            <Nav.Link href="/signup">
                                                <Button className="btn-primary-2 mr-l">Start a free evaluation</Button>
                                            </Nav.Link>
                                        </div>
                                    </div>
                                    <div className="aside-services">
                                        <h3>Recommended Services</h3>
                                        <ul>
                                            <li><a target="_blank" href="services#financial-gating-solution">Financial gating solution</a></li>
                                            <li><a target="_blank" href="services#product-formulation">Product Formulation</a></li>
                                            <li><a target="_blank" href="services#true-agile">True Agile</a></li>
                                            <li><a target="_blank" href="services#team-formulation">Team Formulation</a></li>
                                            <li><a target="_blank" href="services#marketing-messages">Marketing Messages & 360 Marketing</a></li>
                                            <li><a target="_blank" href="services#research">Research</a></li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>

                        </Container>
                    </div>
                </Container>
            </div>
            <div className="services-page-v2">
                <Container>

                    <div className="section-end-v2" id="angle-investors">
                        <Element name="angle-investors"> </Element>
                        <Container>
                            <Row>
                                <Col className="service-content _row-reverse">
                                    <div className="service-content-details">
                                        <div className="heading-with-icon">
                                            <div className="_icon">
                                                <img src="img/venture_capitalists.png" alt="GATEZERO" />
                                            </div>
                                            <h2>Angel Investors</h2>
                                        </div>
                                        <p>
                                            The challenge with angle investing is that the technology investment has to payback. Like large venture funds, angel
                                            investors may not have a large cushion for failed investments. The more accurate the investment angle investors
                                            make, the better the return.
                                        </p>
                                        <h4>
                                            We help our client-angle investors to answer a few critical questions.
                                        </h4>
                                        <ul>
                                            <li>Should they invest in an opportunity? What is the likely outcome of a particular technology investment?</li>
                                            <li>Which out of the current investment opportunity is best?</li>
                                            <li>Which of my current investment should be continued, and which needs to be pulled out?</li>
                                            <li>How to change existing investments into game changers</li>
                                            <li>Identify customers for current investments and run a better marketing campaign</li>
                                        </ul>
                                        <p>
                                            Our framework, tools, and processes produce highly accurate predictions for a proposed investment, and our pivot and
                                            innovation designer tools significantly boost any digital initiative.
                                        </p>

                                        <div className="red-more-button">
                                            <Nav.Link href="/signup">
                                                <Button className="btn-primary-2 mr-l">Start a free evaluation</Button>
                                            </Nav.Link>
                                        </div>
                                    </div>
                                    <div className="aside-services">
                                        <h3>Recommended Services</h3>
                                        <ul>
                                            <li><a target="_blank" href="services#financial-gating-solution">Financial gating solution</a></li>
                                            <li><a target="_blank" href="services#product-formulation">Product Formulation</a></li>
                                            <li><a target="_blank" href="services#true-agile">True Agile</a></li>
                                            <li><a target="_blank" href="services#team-formulation">Team Formulation</a></li>
                                            <li><a target="_blank" href="services#marketing-messages">Marketing Messages & 360 Marketing</a></li>
                                            <li><a target="_blank" href="services#research">Research</a></li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>

                        </Container>
                    </div>
                </Container>
            </div>

            <div className="services-page-v2">
                <Container>

                    <div className="section-end-v2" id="entrepreneurs">
                        <Element name="entrepreneurs"> </Element>
                        <Container>
                            <Row>
                                <Col className="service-content">
                                    <div className="service-content-details">
                                        <div className="heading-with-icon">
                                            <div className="_icon">
                                                <img src="img/entrepreneurs.png" alt="GATEZERO" />
                                            </div>
                                            <h2>Entrepreneurs</h2>
                                        </div>
                                        <p>
                                            As an entrepreneur, you have a dream to make it big. You have your idea that you are working on, you may be able to
                                            take it to a prototype level, or you may be looking for seed capital. The Spirit of entrepreneurs is praiseworthy.
                                            But no matter how hard a person has worked on their dream and how much sacrifice has gone to finish the product –
                                            the market is a brutal place. The market is where survival of the fittest plays out at its best. The market can
                                            reject an entrepreneur’s three years of hard work in 3 minutes. But if it was easy, who would call you an
                                            entrepreneur?
                                        </p>
                                        <p>
                                            Another major event most entrepreneurs wait for is funding. Getting funded is indeed a milestone. However, the more
                                            critical capital that is at stake is your time. Venture funds have other investments that can make up for their
                                            other failures. 90% of the startups fail. If investment in your venture fails, venture capital of other
                                            institutional investors can recover it with other investments, and however, for you, the loss is greater. Loss of
                                            your valuable time, as you spend more and more time without success as an entrepreneur, the pressure to generate
                                            sustainable income for you grows – meaning taking up a job. So not you.
                                        </p>
                                        <h4>
                                            We offer critical services for entrepreneurs. Our tools and framework show them upfront if an idea is worth pursuing or not,
                                            saving them years of failed effort. Our services could make a difference between making you a successful entrepreneur vs. a
                                            regular 9 to 5 career.
                                        </h4>
                                        <ul>
                                            <li>Know which idea will generate revenue, to what extent, and when?</li>
                                            <li>Design path-breaking digital innovation</li>
                                            <li>Know the likely outcome of planned initiatives beforehand</li>
                                            <li>Accelerate adoption from customers</li>
                                            <li>Turn existing products into game changers</li>
                                            <li>Build high impact roadmap with accurate priorities</li>
                                            <li>Accelerate growth and revenue</li>
                                            <li>Troubleshoot existing digital solutions – why is it not working?</li>
                                            <li>Avoid loss of capital, time, and opportunity</li>
                                            <li>Avoid loss of reputation</li>
                                            <li>Align organization in one direction, provide clarity and improve the work environment</li>
                                        </ul>
                                        <div className="red-more-button">
                                            <Nav.Link href="/signup">
                                                <Button className="btn-primary-2 mr-l">Start a free evaluation</Button>
                                            </Nav.Link>
                                        </div>
                                    </div>
                                    <div className="aside-services">
                                        <h3>Recommended Services</h3>
                                        <ul>
                                            <li><a target="_blank" href="services#financial-gating-solution">Financial gating solution</a></li>
                                            <li><a target="_blank" href="services#product-formulation">Product Formulation</a></li>
                                            <li><a target="_blank" href="services#true-agile">True Agile</a></li>
                                            <li><a target="_blank" href="services#team-formulation">Team Formulation</a></li>
                                            <li><a target="_blank" href="services#marketing-messages">Marketing Messages & 360 Marketing</a></li>
                                            <li><a target="_blank" href="services#research">Research</a></li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>

                        </Container>
                    </div>
                </Container>
            </div>
            <div className="services-page-v2">
                <Container>

                    <div className="section-end-v2" id="product-owners">
                        <Element name="product-owners"> </Element>
                        <Container>
                            <Row>
                                <Col className="service-content _row-reverse">
                                    <div className="service-content-details">
                                        <div className="heading-with-icon">
                                            <div className="_icon">
                                                <img src="img/venture_capitalists.png" alt="GATEZERO" />
                                            </div>
                                            <h2>Product Owner</h2>
                                        </div>
                                        <p>
                                            The role of a product owner is challenging. As a product owner, you must build the right product to take the
                                            organization forward, establish your place as a leader, and secure priority and financial approvals for your
                                            products. How do you design innovation? How can you be assured of a digital investment that you are leading? Over
                                            70% of digital transformation and corporate innovation fails. The landscape is challenging. You must have several
                                            successful products under your belt to propel your career.
                                        </p>
                                        <h4>
                                            We offer critical services for product owners.We offer critical services for product owners.
                                        </h4>
                                        <ul>
                                            <li>Know which idea will generate revenue, to what extent, and when?</li>
                                            <li>Design path-breaking digital innovation</li>
                                            <li>Know the likely outcome of planned initiatives beforehand</li>
                                            <li>Accelerate adoption from customers</li>
                                            <li>Turn existing products into game changers</li>
                                            <li>Build high impact roadmap with accurate priorities</li>
                                            <li>Accelerate growth and revenue</li>
                                            <li>Troubleshoot existing digital solutions – why is it not working?</li>
                                            <li>Avoid loss of capital, time, and opportunity</li>
                                            <li>Avoid loss of reputation</li>
                                            <li>Align organization in one direction, provide clarity and improve the work environment</li>
                                        </ul>

                                        <div className="red-more-button">
                                            <Nav.Link href="/signup">
                                                <Button className="btn-primary-2 mr-l">Start a free evaluation</Button>
                                            </Nav.Link>
                                        </div>
                                    </div>
                                    <div className="aside-services">
                                        <h3>Recommended Services</h3>
                                        <ul>
                                            <li><a target="_blank" href="services#financial-gating-solution">Financial gating solution</a></li>
                                            <li><a target="_blank" href="services#product-formulation">Product Formulation</a></li>
                                            <li><a target="_blank" href="services#true-agile">True Agile</a></li>
                                            <li><a target="_blank" href="services#team-formulation">Team Formulation</a></li>
                                            <li><a target="_blank" href="services#marketing-messages">Marketing Messages & 360 Marketing</a></li>
                                            <li><a target="_blank" href="services#research">Research</a></li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>

                        </Container>
                    </div>
                </Container>
            </div>


        </div>
    );
}