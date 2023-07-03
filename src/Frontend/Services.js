import React from "react";
import { Button, Col, Container, Nav, Row } from "react-bootstrap";

export default function Services() {
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
                        <h1>Services</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                    </Row>
                </Container>
            </div>
            <div className="services-page-v2">
                <Container>
                    <div className="section-end-v2" id="financial-gating-solution">
                        <Element name="financial-gating-solution"> </Element>
                        <Container>
                            <Row>
                                <Col className="service-content">
                                    <div className="service-content-details">
                                        <div className="heading-with-icon">
                                            <div className="_icon">
                                                <img src="img/financial_gating_solution_for_digital_investments.jpg" alt="GATEZERO" />
                                            </div>
                                            <h2>Financial gating solution for digital investments</h2>
                                        </div>


                                        <p>
                                            GateZero is a financial gating framework for digital investments. 90% of the innovative investments fail,
                                            and
                                            over
                                            70%
                                            of
                                            digital transformation investments fall short of providing results. Together, they cost billions of dollars of loss
                                            to
                                            the
                                            companies. The time and opportunity costs of failures are even higher. These failures can break a business and its
                                            leadership's
                                            reputation
                                        </p>
                                        <p>
                                            One of the biggest challenges with digital investments is that, on average, it takes two years before you know the
                                            outcome
                                            of
                                            digital investment, and it's too late by then.
                                        </p>
                                        <p>
                                            What if there was something that informed you about the likely outcome of your digital investment before you
                                            started?
                                            That
                                            is
                                            exactly what GateZero framework is designed to do. GateZero framework clearly recommends if a
                                            proposed
                                            digital
                                            solution will be successful or not before you start.
                                        </p>
                                        <p>
                                            With GateZero, you can avoid bad investments, save capital loss, and identify and capitalize on the right
                                            opportunities. It shows you accurate priorities and creates alignment in the organization. It also shows you how to
                                            improve
                                            your existing products for greater success.
                                        </p>
                                        <p>
                                            GateZero framework improves your product's chances of success and accelerates its time to market.
                                        </p>
                                        <p>
                                            The framework is rapidly gaining popularity. It's simple yet powerful. GateZero is a 126-point evaluation
                                            framework
                                            designed for accelerated but accurate insights. It's just what astute IT leaders needed all along to strengthen
                                            their
                                            hard
                                            work; nothing feels better than winning while eliminating failures.
                                        </p>
                                        <p>
                                            Go ahead and know the future of your digital investments right now - learn how to make them better - start a free
                                            assessment
                                            now.
                                        </p>
                                        <p>
                                            GateZero framework produced two scores. Opportunity Score and Execution Score.
                                        </p>
                                        <p>
                                            The Opportunity Score objectively evaluates a product's chances of success as it is conceived. Execution Score evaluates
                                            your unique ability to execute and capitalize on the opportunity.
                                        </p>
                                        <p>
                                            We distinguish them because every individual's or organization's capabilities are different. The execution capabilities
                                            of a
                                            google or an amazon are very different from a small company or an entrepreneur.
                                        </p>
                                        <p>
                                            An opportunity score of 10 is considered good, and a score of about 18 shows an excellent opportunity. On the other
                                            hand, a
                                            score of 58 or above is regarded as a good execution score.
                                        </p>
                                        <p>
                                            The opportunity score is derived by evaluating six distinct predictors, whereas the Execution score is made up of 7
                                            specific
                                            predictors.
                                        </p>
                                        <p>
                                            Overall, we process 126 distinct aspects of a venture to produce an accurate result to direct your digital investment in
                                            the
                                            right direction. Take the first step, start an evaluation for free.
                                        </p>
                                        <div className="red-more-button">
                                            <Nav.Link href="/signup">
                                                <Button className="btn-primary-2 mr-l">Start a free evaluation</Button>
                                            </Nav.Link>
                                        </div>
                                    </div>
                                    <div className="aside-services">
                                        <h3>
                                            GateZero framework evaluates & clearly recommends if a proposed digital solution will be successful or not
                                            before
                                            you
                                            start. It enables a dependable go / no-go decision.
                                        </h3>
                                    </div>
                                </Col>
                            </Row>

                        </Container>
                    </div>
                </Container>
            </div>
            <div className="services-page-v2">
                <Container>
                    <div className="section-end-v2" id="product-formulation">
                        <Element name="financial-gating-solution"> </Element>
                        <Container>
                            <Row>
                                <Col className="service-content _row-reverse">
                                    <div className="service-content-details">
                                        <div className="heading-with-icon">
                                            <div className="_icon">
                                                <img src="img/product_formulation.png" alt="GATEZERO" />
                                            </div>
                                            <h2>Product Formulation</h2>
                                        </div>
                                        <p>
                                            Our product formulation service answers a few critical questions for our clients, how to derive a game-changing
                                            product?
                                            Or how to transform their existing product or portfolio into game-changing industry-leading solutions? Even if our
                                            customers solve the right problem, missing the mark at the product level is a significant and prevalent issue. What
                                            do
                                            you need to build to keep your customers happy and defeat your competitor? These are some of the answers we provide
                                            with
                                            our product formulation service.
                                        </p>
                                        <p>
                                            We use our path-breaking framework and work with our clients to understand problem space, customer needs, and all
                                            involved parties' needs. We orient the product in the right direction. We also help prioritize the roadmap for the
                                            product, ensuring our customers are making the suitable investment at the right time. Along with this, we help our
                                            customers wire their products to collect the right metrics to gain insights into customer behavior from the
                                            beginning.
                                            This allows our customers to keep the product on track, improve time to market and keep the focus and requirements
                                            stable.
                                        </p>
                                        <p>
                                            We also apply our product pivot framework to understand how the existing products can be turned into game changers
                                            in
                                            the industry and attain a leadership position along with producing accurate cost and time estimations to rollout
                                            such
                                            changes.
                                        </p>
                                        <p>
                                            What powers this transformative experience for our customers is our deep research expertise in digital space and our
                                            unique framework, which produces dependable results every time.
                                        </p>

                                        <div className="red-more-button">
                                            <Nav.Link href="/signup">
                                                <Button className="btn-primary-2 mr-l">Start a free evaluation</Button>
                                            </Nav.Link>
                                        </div>
                                    </div>
                                    <div className="aside-services">
                                        <h3>
                                            What will enable your product to make space for itself in the noisy market? What do you need to build to keep your
                                            customers happy and defeat competitors?
                                        </h3>
                                    </div>
                                </Col>
                            </Row>

                        </Container>
                    </div>
                </Container>
            </div>
            <div className="services-page-v2">
                <Container>

                    <div className="section-end-v2" id="marketing-messages">
                        <Element name="marketing-messages"> </Element>
                        <Container>
                            <Row>
                                <Col className="service-content">
                                    <div className="service-content-details">
                                        <div className="heading-with-icon">
                                            <div className="_icon">
                                                <img src="img/marketing_messages.png" alt="GATEZERO" />
                                            </div>
                                            <h2>Marketing Messages and 360 Digital Marketing</h2>
                                        </div>
                                        <p>
                                            Which product position and which message will bring you customers? This is a significant question that many
                                            businesses
                                            never get a clear answer to or take too long to find. It's essential to find this answer. The sooner you find this
                                            answer better it is to capture the market, continue and maintain product momentum and build faith in your direction.
                                        </p>
                                        <p>
                                            Many great digital products fail every year due to a lack of marketing expertise. We provide our clients with a
                                            methodical framework and hands-on services to quickly get to the winning messages. We help companies to know who the
                                            customers for their products are? Why are they interested in your product? And what message will resonate with them?
                                            This is quite an exciting space; your customers could be buying your product for a different reason than would you
                                            have
                                            made it for. We call this product positioning. What does it mean for the customer to solve their problem with your
                                            product? It is different for different customers, which is what messaging is about.
                                        </p>
                                        <p>
                                            We offer hands-on services to implement cutting-edge digital campaigns to create awareness, growth, and revenue for
                                            our
                                            clients.
                                        </p>
                                        <div className="red-more-button">
                                            <Nav.Link href="/signup">
                                                <Button className="btn-primary-2 mr-l">Start a free evaluation</Button>
                                            </Nav.Link>
                                        </div>
                                    </div>
                                    <div className="aside-services">
                                        <h3>
                                            We help our clients pinpoint their customers and build an entire lifecycle messaging to convert prospects into
                                            customers. Getting to a winning marketing campaign takes more expertise than building the product itself. Most of our
                                            technology clients do not have this expertise, which is the gap we fill.
                                        </h3>
                                    </div>
                                </Col>
                            </Row>

                        </Container>
                    </div>
                </Container>
            </div>

            <div className="services-page-v2">
                <Container>

                    <div className="section-end-v2" id="research">
                        <Element name="research"> </Element>
                        <Container>
                            <Row>
                                <Col className="service-content _row-reverse">
                                    <div className="service-content-details">
                                        <div className="heading-with-icon">
                                            <div className="_icon">
                                                <img src="img/research.png" alt="GATEZERO" />
                                            </div>
                                            <h2>Research</h2>
                                        </div>
                                        <p>
                                            Research is a cornerstone of all our services. Successful digital solutions and transformations need accurate
                                            research.
                                            There are many kinds of research, and each can lead to inaccurate conclusions if stringent care is not taken. We
                                            specialize in producing fast and accurate research to strengthen fundamental decisions and directions driving the
                                            success of your solutions.
                                        </p>
                                        <p>
                                            One of the fundamental reasons for failure is lack of research or inaccurate and inadequate research. On average,
                                            corporates today do not possess dependable research capabilities. That is where we help with our research service.
                                        </p>

                                        <div className="red-more-button">
                                            <Nav.Link href="/signup">
                                                <Button className="btn-primary-2 mr-l">Start a free evaluation</Button>
                                            </Nav.Link>
                                        </div>
                                    </div>
                                    <div className="aside-services">
                                        <h3>
                                            We strengthen our client's initiatives by first pinpointing what kind of research is needed and then researching the
                                            information and data through various means of our specialized research methods. We help our clients to move ahead
                                            with
                                            confidence. Not just research but accurate and validated research is what we provide to our clients.
                                        </h3>
                                    </div>
                                </Col>
                            </Row>

                        </Container>
                    </div>
                </Container>
            </div>
            <div className="services-page-v2">
                <Container>

                    <div className="section-end-v2" id="user-experience">
                        <Element name="user-experience"> </Element>
                        <Container>
                            <Row>
                                <Col className="service-content">
                                    <div className="service-content-details">
                                        <div className="heading-with-icon">
                                            <div className="_icon">
                                                <img src="img/user_experience.png" alt="GATEZERO" />
                                            </div>
                                            <h2>User Experience</h2>
                                        </div>
                                        <p>
                                            We help businesses design end-to-end user experiences. User experience is not just UX. UX is a part of the overall
                                            user
                                            experience. However, managing user experience consists of addressing and designing a user's experience across all
                                            touchpoints, from your advertisements to onboarding, core services, and interactions with customer service for
                                            various
                                            issues. A carefully designed customer experience can turn a negative customer experience into a positive one.
                                        </p>
                                        <p>
                                            Our service in this area is critical for brand building. A brand is what customer thinks about your business and
                                            what
                                            kind of expectations customers have from your business. Both could be carefully crafted and engineered through
                                            customer
                                            experience, marketing, and content building. User experience is also often ignored while estimating product costs,
                                            resulting in businesses never having enough funds to address critical issues.
                                        </p>
                                        <p>
                                            Our user experience service can significantly help a new initiative or uplift an existing one.
                                        </p>
                                        <div className="red-more-button">
                                            <Nav.Link href="/signup">
                                                <Button className="btn-primary-2 mr-l">Start a free evaluation</Button>
                                            </Nav.Link>
                                        </div>
                                    </div>
                                    <div className="aside-services">
                                        <h3>
                                            User experience is about understanding your client's needs across all forms of engagement channels, not just UX. We
                                            offer a
                                            specialized 360-degree customer experience design to uplift your business to the next level and unlock exponential
                                            growth.
                                        </h3>
                                    </div>
                                </Col>
                            </Row>

                        </Container>
                    </div>
                </Container>
            </div>
            <div className="services-page-v2">
                <Container>

                    <div className="section-end-v2" id="team-formulation">
                        <Element name="team-formulation"> </Element>
                        <Container>
                            <Row>
                                <Col className="service-content _row-reverse">
                                    <div className="service-content-details">
                                        <div className="heading-with-icon">
                                            <div className="_icon">
                                                <img src="img/team_formulation.png" alt="GATEZERO" />
                                            </div>
                                            <h2>Team Formulation</h2>
                                        </div>
                                        <p>
                                            Team formulation is one of our unique services where we generate a deeper understanding of the product, market,
                                            customers, business goals, domain, technology, and stakeholders. Based on this unique understanding, we evaluate the
                                            current team and suggest augmentation or define skill requirements and processes to execute a successful venture.
                                        </p>
                                        <p>
                                            Organizations often tend to understand the end goals; however, they cannot execute them, and the reasons are not
                                            well
                                            understood. Hence, an effective mitigation strategy cannot be put in place. Our team formulation services help in
                                            this
                                            regard. It helps our clients ensure they have the right team to execute the vision.
                                        </p>
                                        <div className="red-more-button">
                                            <Nav.Link href="/signup">
                                                <Button className="btn-primary-2 mr-l">Start a free evaluation</Button>
                                            </Nav.Link>
                                        </div>
                                    </div>
                                    <div className="aside-services">
                                        <h3>
                                            Successful digital transformations and products are not only about a good tech team. It needs more than that. Do you
                                            understand your real needs? And do you have the right team? What kind of team do you need to be successful?
                                        </h3>
                                    </div>
                                </Col>
                            </Row>

                        </Container>
                    </div>
                </Container>
            </div>
            <div className="services-page-v2">
                <Container>

                    <div className="section-end-v2" id="true-agile">
                        <Element name="true-agile"> </Element>
                        <Container>
                            <Row>
                                <Col className="service-content">
                                    <div className="service-content-details">
                                        <div className="heading-with-icon">
                                            <div className="_icon">
                                                <img src="img/true_agile.png" alt="GATEZERO" />
                                            </div>
                                            <h2>TrueAgile</h2>
                                        </div>
                                        <p>
                                            True Agile is our agile processes based on core agile principles rather than an adopted methodology like SCRUM,
                                            which
                                            came from the manufacturing industry. Our True Agile process makes the entire organization agile, not just software
                                            development teams. We bring in unique assessment tools to rate your agile maturity and then chart out a path to
                                            experience a genuinely agile organization.
                                        </p>
                                        <p>
                                            There are many issues with how organizations are implementing "agile" today. We help our clients transcend to the
                                            next
                                            level where they experience true business agility instead of just partial software delivery agility.
                                        </p>
                                        <p>
                                            TrueAgile is one of our paths breaking and transformative services that all organizations can leverage.
                                        </p>
                                        <div className="red-more-button">
                                            <Nav.Link href="/signup">
                                                <Button className="btn-primary-2 mr-l">Start a free evaluation</Button>
                                            </Nav.Link>
                                        </div>
                                    </div>
                                    <div className="aside-services">
                                        <h3>
                                            Is your organization truly agile? Is agile only about managing technology teams? Our TrueAgile methodology implements
                                            agility over the entire organization, not just software development teams.
                                        </h3>
                                    </div>
                                </Col>
                            </Row>

                        </Container>
                    </div>
                </Container>
            </div>
            <div className="services-page-v2">
                <Container>

                    <div className="section-end-v2" id="corporate-training">
                        <Element name="corporate-training"> </Element>
                        <Container>
                            <Row>
                                <Col className="service-content _row-reverse">
                                    <div className="service-content-details">
                                        <div className="heading-with-icon">
                                            <div className="_icon">
                                                <img src="img/corporate_training.png" alt="GATEZERO" />
                                            </div>
                                            <h2>Corporate Training</h2>
                                        </div>
                                        <p>
                                            Corporate training is designed to impart the groundbreaking framework so that it becomes their second nature for an
                                            organization, and all immense benefits can be harvested daily.
                                        </p>
                                        <p>
                                            All our corporate training is custom designed for clients' needs regarding session duration, number of days, and
                                            number
                                            of participants.
                                        </p>
                                        <p>
                                            We highly recommend that our training programs leverage the full spectrum of benefits for years to come.
                                        </p>
                                        <div className="red-more-button">
                                            <Nav.Link href="/signup">
                                                <Button className="btn-primary-2 mr-l">Start a free evaluation</Button>
                                            </Nav.Link>
                                        </div>
                                    </div>
                                    <div className="aside-services">
                                        <h3>
                                            Turbocharge your digital transformation by enabling your organization with cutting-edge tools and framework to build a
                                            culture of digital prudence that improves time to market, profitable innovation, employee retention, and a healthy work
                                            environment with many other benefits.
                                        </h3>
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