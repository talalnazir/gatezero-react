import React from "react";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";

export default function PainPoints() {
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
                        <h1>Pain <span>Points</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                    </Row>
                </Container>
            </div>
            <div className="services-page-v2">
                <Container>

                    <div className="section-end-v2" id="am-i-building-or-investing-in-the-right-product">
                        <Element name="am-i-building-or-investing-in-the-right-product"> </Element>
                        <Container>
                            <Row>
                                <Col className="service-content">
                                    <div className="service-content-details">
                                        <div className="heading-with-icon">
                                            <div className="_icon">
                                                <img src="img/pain_points_section_1.png" alt="GATEZERO" />
                                            </div>
                                            <h2>Am I building or investing in the right product?</h2>
                                        </div>
                                        <p>
                                            This is a good and timely question, and you are at the right place. Over 90% of the innovative investments fail
                                            to
                                            provide results, and the question is, why is it not working? What can we do?
                                        </p>
                                        <p>
                                            GateZero framework is designed to provide the answer to this question. It is a financial gating
                                            solution
                                            that
                                            allows investors and decision-makers to gauge the overall revenue-generating opportunity of a proposed venture.
                                            The
                                            framework analyses the product rationale and your execution ability with a fine comb, evaluating 126 distinct
                                            data
                                            points to highlight the strength and weaknesses of a proposed venture and if the risks are manageable. It will
                                            underline
                                            explicit deal killers and give you clear Go vs. No-Go directives.
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
                                            <li> <a target="_blank" href="services#financial-gating-solution">Financial gating solution</a></li>
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
                    <div className="section-end-v2" id="how-can-i-reduce-complexity-and-improve-time-to-market">
                        <Element name="how-can-i-reduce-complexity-and-improve-time-to-market"> </Element>
                        <Container>
                            <Row>
                                <Col className="service-content _row-reverse">
                                    <div className="service-content-details">
                                        <div className="heading-with-icon">
                                            <div className="_icon">
                                                <img src="img/pain_points_section_2.png" alt="GATEZERO" />
                                            </div>
                                            <h2>How can I reduce complexity and improve time to market?</h2>
                                        </div>
                                        <p>
                                            There is a great deal of complexity in building new products and transforming existing digital solutions. As the
                                            corporates get larger, the internal ecosystem of applications is large, the customer base is complex, and deep
                                            customization levels pose another challenge.
                                        </p>
                                        <p>
                                            To be successful, organizations need to reduce complexity and maintain focus. Frequent direction changes, changes in
                                            product definition, and changes in priorities cost financially and delay the product's time to market. It also
                                            highlights the lack of foundational clarity.
                                        </p>
                                        <p>
                                            We help our clients to build very stable product definitions with clearly identified capabilities and orient them
                                            towards opportunities lasting many years with little to no competition. This is a transformative exercise. It
                                            changes the chaotic environment into a stable, confident environment where a few weeks of schedule drift does not
                                            cause panic, and the new initiatives and transformative digital solutions find early growth and traction.
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

                    <div className="section-end-v2" id="where-exactly-is-my-customer">
                        <Element name="where-exactly-is-my-customer"> </Element>
                        <Container>
                            <Row>
                                <Col className="service-content">
                                    <div className="service-content-details">
                                        <div className="heading-with-icon">
                                            <div className="_icon">
                                                <img src="img/pain_points_section_3.png" alt="GATEZERO" />
                                            </div>
                                            <h2>Where exactly is my customer?</h2>
                                        </div>
                                        <p>
                                            Pinpointing your customer is a challenging process, and it may take time. However, businesses want to identify
                                            customers and proliferate with their new products. Identifying customers early also helps to capture a larger market
                                            share. This question comes in a couple of situations, you have a good product, and you want to get your initial
                                            customers or expand quickly, or your product has multiple uses. You need to find out which customer and use case can
                                            get the quickest adoption. Another situation is that your product is not gaining traction after launch or not
                                            growing as much, or losing customers.
                                        </p>
                                        <p>
                                            We help our clients in various stages of their customer journeys to align their products with their needs with the
                                            precision needed.
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
                                            <li> <a target="_blank" href="services#marketing-messages" className="">Marketing Messages & 360 Marketing</a></li>
                                            <li><a target="_blank" href="services#product-formulation">Product Formulation</a></li>
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

                    <div className="section-end-v2" id="which-new-product-will-make-me-the-market-leader">
                        <Element name="which-new-product-will-make-me-the-market-leader"> </Element>
                        <Container>
                            <Row>
                                <Col className="service-content _row-reverse">
                                    <div className="service-content-details">
                                        <div className="heading-with-icon">
                                            <div className="_icon">
                                                <img src="img/pain_points_section_4.png" alt="GATEZERO" />
                                            </div>
                                            <h2>Which new product will help me be the leader in the market?</h2>
                                        </div>
                                        <p>
                                            With each wave of technological advancement, there is a likely disruption in the established players need to play a
                                            catch-up game, or if they move in early, they can be the disruptor and lead the market. But it is easier said than
                                            done. Established organizations have the challenge of running their current operations and managing their customer
                                            and shareholders. They have little bandwidth for transformative initiatives and often do not have enough clarity
                                            about what should they do next?
                                        </p>
                                        <p>
                                            This is what we help our clients with. We help them determine which direction will yield the best results, how to
                                            build game changers in their products, and how to build processes and teams for successful execution.
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
                                            <li> <a target="_blank" href="services#financial-gating-solution">Financial gating solution</a></li>
                                            <li><a target="_blank" href="services#product-formulation">Product Formulation</a></li>
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

                    <div className="section-end-v2" id="what-do-i-need-to-change-in-my-existing-products">
                        <Element name="what-do-i-need-to-change-in-my-existing-products"> </Element>
                        <Container>
                            <Row>
                                <Col className="service-content">
                                    <div className="service-content-details">
                                        <div className="heading-with-icon">
                                            <div className="_icon">
                                                <img src="img/pain_points_section_5.png" alt="GATEZERO" />
                                            </div>
                                            <h2>What do I need to change in my existing products?</h2>
                                        </div>
                                        <p>
                                            A large corporation may have upward of 1000 to 2000 applications of different sizes performing various functions.
                                            Many of them have been in production for over a decade or two, they form a complex internal ecosystem, and a great
                                            deal of tribal knowledge is needed to operate them.
                                        </p>
                                        <p>
                                            Organizations are facing the challenge of transforming these applications and ecosystems to leverage the latest
                                            technological capabilities and compete with new entrants in the market.
                                        </p>
                                        <p>
                                            We help clients to answer some of these critical questions, which of their current products have a future, and how
                                            can those be changed to produce the next game changers? Evaluate their product or initiatives portfolio, derive
                                            accurate priorities, and build product roadmaps.
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
                                            <li> <a target="_blank" href="services#financial-gating-solution">Financial gating solution</a></li>
                                            <li><a target="_blank" href="services#product-formulation">Product Formulation</a></li>
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

                    <div className="section-end-v2" id="why-is-my-marketing-not-working">
                        <Element name="why-is-my-marketing-not-working"> </Element>
                        <Container>
                            <Row>
                                <Col className="service-content _row-reverse">
                                    <div className="service-content-details">
                                        <div className="heading-with-icon">
                                            <div className="_icon">
                                                <img src="img/pain_points_section_6.png" alt="GATEZERO" />
                                            </div>
                                            <h2>What marketing message will resonate with my customers?</h2>
                                        </div>
                                        <p>
                                            An accurate marketing message is crucial for sales. However, it's elusive. Which message connects your product and
                                            your business with the customer? Rapid adoption and growth need many things aligned; however, your marketing message
                                            must be accurate to start the process.
                                        </p>
                                        <p>
                                            A marketing message is a combination of the customer's problem or needs you are solving, why you are the best
                                            choice, and why a customer wants to solve that problem. The last point is very subtle and essential. Different
                                            customers solve the same problem for various reasons.
                                        </p>
                                        <p>
                                            A successful message contains this reason. What are beyond the basic benefits customers are looking for? Why do they
                                            want to solve the problem? For e.g., a customer wants to buy your product that provides compliance because it's a
                                            pre-condition for a large contract they are pursuing. In contrast, another customer may buy your solution because
                                            their annual audit is coming up, vs. a third customer is buying your solution to detect and fix internal data and
                                            process issues. Do you think the same message will resonate with all the customers equally?
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
                                            <li><a target="_blank" href="services#marketing-messages">Marketing Messages & 360 Marketing</a></li>
                                            <li><a target="_blank" href="services#product-formulation">Product Formulation</a></li>
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
                    <div className="section-end-v2" id="how-to-reach-and-engage-my-customers">
                        <Element name="how-to-reach-and-engage-my-customers"> </Element>
                        <Container>
                            <Row>
                                <Col className="service-content">
                                    <div className="service-content-details">
                                        <div className="heading-with-icon">
                                            <div className="_icon">
                                                <img src="img/pain_points_section_7.png" alt="GATEZERO" />
                                            </div>
                                            <h2>How to reach and engage my customers?</h2>
                                        </div>
                                        <p>
                                            Many good products do not perform as expected because of a lack of methodical customer engagement. Customers do not
                                            have intricate knowledge of your product to start with, and they must be driven to understand your product step by
                                            step to the point that they not only become your customers but also advocate for your business.
                                        </p>
                                        <p>
                                            We help our clients align products, business models, customers, and marketing messages across the sales funnel to
                                            bring rapid insights into early traction and growth.
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
                                            <li><a target="_blank" href="services#marketing-messages">Marketing Messages & 360 Marketing</a></li>
                                            <li><a target="_blank" href="services#product-formulation">Product Formulation</a></li>

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

                    <div className="section-end-v2" id="what-kind-of-research-and-analysis-do-i-need">
                        <Element name="what-kind-of-research-and-analysis-do-i-need"> </Element>
                        <Container>
                            <Row>
                                <Col className="service-content _row-reverse">
                                    <div className="service-content-details">
                                        <div className="heading-with-icon">
                                            <div className="_icon">
                                                <img src="img/corporate_training.png" alt="GATEZERO" />
                                            </div>
                                            <h2>What kind of research and analysis do I need?</h2>
                                        </div>
                                        <p>
                                            The importance of research is evident, but quite a large segment of organizations omits this critical activity in
                                            the zeal to launch the product in the market. Research is treated as a stepchild. Many in the leadership think that
                                            research is analysis paralysis citing never-ending if-then-but-else but no clear direction from "research". The real
                                            challenge is knowing what you need to research and how to contextualize the research to expedite product development
                                            and time to market.
                                        </p>
                                        <p>
                                            We offer our clients this cutting-edge research capability that contextualizes business goals, products, customers,
                                            and marketing to make products successful and early to the market by understanding what is important vs. what is not
                                            in a deep sense of customer needs.
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

                    <div className="section-end-v2" id="how-do-i-ensure-adoption-and-growth-of-my-product">
                        <Element name="how-do-i-ensure-adoption-and-growth-of-my-product"> </Element>
                        <Container>
                            <Row>
                                <Col className="service-content">
                                    <div className="service-content-details">
                                        <div className="heading-with-icon">
                                            <div className="_icon">
                                                <img src="img/pain_points_section_9.png" alt="GATEZERO" />
                                            </div>
                                            <h2>How do I ensure the adoption & growth of my product?</h2>
                                        </div>
                                        <p>
                                            Initial adoption and growth is the most critical part of any new product. It validates product's direction is
                                            accurate, marketing is working, and the overall value proposition is resonating with the customers; however, this is
                                            not an easy feat to achieve. Over 90% of the new products or innovation fails, and all those dearly desire and wait
                                            for this to happen.
                                        </p>
                                        <p>
                                            We encourage clients to leverage our services from the very beginning to make adoption and growth a rapid reality.
                                            However, we help clients at all stages of their journey.
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
                                            <li><a target="_blank" href="services#marketing-messages">Marketing Messages & 360 Marketing</a></li>
                                            <li><a target="_blank" href="services#product-formulation">Product Formulation</a></li>

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

                    <div className="section-end-v2" id="what-kind-of-team-do-i-need-to-execute-the-vision">
                        <Element name="what-kind-of-team-do-i-need-to-execute-the-vision"> </Element>
                        <Container>
                            <Row>
                                <Col className="service-content _row-reverse">
                                    <div className="service-content-details">
                                        <div className="heading-with-icon">
                                            <div className="_icon">
                                                <img src="img/pain_points_section_10.png" alt="GATEZERO" />
                                            </div>
                                            <h2>What kind of team do I need to execute the vision?</h2>
                                        </div>
                                        <p>
                                            Right skills matter. Knowing what diverse skills are needed and how to weave them together in an end-to-end agile
                                            process is critical in the corporate hierarchy or a highly dynamic startup setup. Teams are often built before the
                                            product and vision; hence, it misses the view from the skills perspective, which in turn holds the product back,
                                            making troubleshooting much more difficult later.
                                        </p>
                                        <p>
                                            By using our set of tools and framework, we work with our clients and identify diverse skills needed and help them
                                            build the right team to deliver on the vision.
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
                                            <li> <a target="_blank" href="services#product-formulation">Product Formulation</a></li>
                                            <li><a target="_blank" href="services#true-agile">True Agile</a></li>
                                            <li><a target="_blank" href="services#team-formulation">Team Formulation</a></li>

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