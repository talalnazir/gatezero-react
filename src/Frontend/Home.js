import { blueGrey } from '@mui/material/colors';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';





export default function Home() {
  return (
    <div>
      <div className="banner">
        <Container>
          <Row>
            <div className="banner-content">

              <div className="banner-outer">
                <div className="left-panel">
                  <h1>When your <span>digital investments</span>must produce results</h1>
                  <p>Financial gating & product formulation solution for <br />digital investments</p>
                  <div className="red-more-button">
                    <Button className="btn-primary-2 mr-l"> <a href="/signup">Sign up</a></Button>
                  </div>
                  <div className="our-client">
                    <h4>Notable Clients</h4>
                    <div className="client-slider">
                      <Carousel>
                        <Carousel.Item>
                          <Carousel.Caption>
                            <div className="items"> <img src="img/coca_cola.png" alt="GATEZERO" /></div>
                            <div className="items"> <img src="img/microsoft.png" alt="GATEZERO" /></div>
                            <div className="items"> <img src="img/verizon.png" alt="GATEZERO" /></div>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <Carousel.Caption>
                            <div className="items"><img src="img/loreal.jpg" alt="GATEZERO" /></div>
                            <div className="items"><img src="img/wells_fargo_bank.png" alt="GATEZERO" /></div>
                            <div className="items"><img src="img/mary_kay.png" alt="GATEZERO" /></div>
                          </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                          <Carousel.Caption>
                            <div className="items"><img src="img/american_airlines.png" alt="GATEZERO" /></div>
                            <div className="items"><img src="img/nike.jpg" width="350" alt="GATEZERO" /></div>
                            <div className="items"><img src="img/jpmorgan_chase.png" alt="GATEZERO" /></div>
                          </Carousel.Caption>
                        </Carousel.Item>
                      </Carousel>
                    </div>
                  </div>
                </div>
                <div className="right-panel">
                  <div className="imagery-with-content">
                    <div className="hero-image">
                      <img src="../img/banner.png" alt="GATEZERO" />
                    </div>
                    <div className="desi-1">
                      <ul>
                        <li>Pick the right idea</li>
                        <li>Build the right product</li>
                        <li>Go laughing to the bank - Pure Joy!!</li>
                        <li className="bullet">3 decades of digital expereince poured into tangible scorecards for avoiding losses and designing success 2 decades of digital expereince poured into tangible scorecards for avoiding losses and designing success </li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
      {/* banner end */}

      <div className="grid-section">
        <Container>
          <div className="row">
            <div className="grid-panel">
              <div className="grid">
                <div className="grid-content">
                  <div className="grid-icon">
                    <img src="img/opportunity1.png" alt="GATEZERO" />
                  </div>
                  <h2>Opportunity Score</h2>
                  <p>Know if the problem you are trying to solve is worth it? Will it generate revenue, when and how much? Do you have the right product rationale? Eliminate seeds of failures, know your risk and fight the right battle.</p>
                </div>
              </div>
              {/* grid end */}
              <div className="grid">
                <div className="grid-content">
                  <div className="grid-icon">
                    <img src="img/execution1.png" alt="GATEZERO" />
                  </div>
                  <h2>Execution Score</h2>
                  <p>Know if you can execute on the opportunity based on your unique sitation, your resources, teams and expertise. A comprehensive evaluation, pin points areas of improvement for rapid and successful execution</p>
                </div>
              </div>
              {/* grid end */}
              <div className="grid">
                <div className="grid-content">
                  <div className="grid-icon">
                    <img src="img/product1.png" alt="GATEZERO" />
                  </div>
                  <h2>Product Formulation</h2>
                  <p>Know what exactly you need to build to please the customers and defeat the competition. Know how to pivot your product to turn around stuck initiatives. Land undefeatable products</p>
                </div>
              </div>
              {/* grid end */}
            </div>

          </div>
        </Container>
      </div>
      <div className="beforehand-section">
        <Container>
          <div className="row">
            <div className="beforehand-content">
              <div className="heading">
                <h2>Know the outcome beforehand</h2>
                <p>Evaluate your most important initiative. </p>
              </div>
              <div className="imagery-with-content">
                <div className="beforehand-image">
                  <img src="img/beforehand.png" alt="GATEZERO" />
                </div>
                <div className="beforehand-texts">
                  <p>GateZero is a financial gating solution for your digital investments. It creates accurate foresight into future of any proposed digital investment and helps you make the right choices. It also helps you in formulating the right products. GateZero is comprehensive, accurate and one of it kind framework, that is easy to use and provides accurate Go / No-Go decisions for your digital investments rapidly. It puts you several years ahead in your game.</p>
                  <div className="red-more-button">
                    <Button className="btn-primary-2 mr-l"><a href="/signup">Sign up for free training</a></Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* beforehand-start end */}

      <div className="get-going-section">
        <Container>
          <div className="row">
            <div className="get-going-content">
              <div className="heading-left">
                <h2>Can't wait?</h2>
                <p> Get answers to your digital investment questions right now.</p>
              </div>
              <ul className="going-list-2">
                <li>
                  <div className="image">
                    <img src="../img/read.png" alt="GATEZERO" />
                  </div>
                  {/* <h3>If you like to read</h3> */}
                  <p>We offer free training to one member of a corporate team. This is a limited time promotional offer. Please sign up for a free GateZero training.</p>
                  <div className="red-more-button">
                     <Button className="btn-primary-2 mr-l"><a href="/signup">Enroll for free training</a></Button>
                  </div>
                </li>
                <li>
                  <div className="image">
                    <img src="../img/youtube.png" alt="GATEZERO" />
                  </div>
                  {/* <h3>You are a video person</h3> */}
                  <p>Access full GateZero video library, case studies, and latest digital transformation trend evaluations.</p>
                  <div className="red-more-button">
                  <Button className="btn-primary-2 mr-l"><a href="/video-library" >Access Video Library</a></Button>
                  </div>
                </li>
                <li>
                  <div className="image">
                    <img src="../img/go.png" alt="GATEZERO" />
                  </div>
                  {/* <h3>You are a hands on learn as you go person</h3> */}
                  <p>We offer free training to one member of a corporate team. This is a limited time promotional offer. Please sign up for a free GateZero training.</p>
                  <div className="red-more-button">
                    <Button className="btn-primary-2 mr-l"><a href="/signup">Schedule 60 min free consultation </a></Button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      {/* Get-going end */}

      <div className="testimonial-banner">
        <Container>
          <div className="row">
            <div className="heading">
              <h2>What customers are saying...</h2>
            </div>
            <div className="testimonial-content">
              <div className="testi-1">
                <img src="img/testi-icon-top.png" alt="GATEZERO" />
              </div>
              <div className="testi-2">
                <img src="img/testi-icon-bottom.png" alt="GATEZERO" />
              </div>
              <Carousel>

                <Carousel.Item>
                  <Carousel.Caption>
                    <div className="carousel-image">
                      <img src="img/dummy-user-1.png" alt="GATEZERO" />
                    </div>
                    <p>Innovation is a tricky space, one has to be optimistic and yet have a healthy detachment from their idea. Gates of go / no-go decisions are many and makes innovative product launches tricky. Without a structured framework unbridled optimism leads to millions of wasted dollars, countless hours of wasted effort. The GateZero addresses the why and what part very effectively. We cannot imagine doing any digital solution without using the tools going ahead.</p>
                    <div className="name-t">Satish Madhira <p>Founder ZeMoSo Technology</p></div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Carousel.Caption>
                  <div className="carousel-image">
                      <img src="img/dummy-user-1.png" alt="GATEZERO" />
                    </div>
                    <p> The framework for go/no go decisions is very accurate. I am responsible for envisioning and formulating digital solutions and plan to use the GateZero tools from now on. If you are in a position to make mission critical digital investment decisions or want to launch a successful digital product, look no further! The GateZero is a must.</p>
                    <div className="name-t">Sarah Elchantaf <p>VP – Product and Resource Management</p></div>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <Carousel.Caption>
                  <div className="carousel-image">
                      <img src="img/dummy-user-1.png" alt="GATEZERO" />
                    </div>
                    <p>We are able reprioritize several of our digital transformation projects after using The Take off point framework – and stopped two or three initiatives with poor outcome predicted by the framework. Our four-day training went well and was well received by our top-level leadership and product owners. I highly recommend this new framework that is positioned to become mainstream soon.</p>
                    <div className="name-t">Mark Roberts <p>Senior Vice President – Zenosxy Tech</p></div>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </Container>
      </div>
      {/* testimonial-banner end */}


      <div className="handled-rich-section">
        <Container>
          <div className="row">
            <div className="handled-rich-content">
              <div className="heading-left">
                <h2>You want everything handled for you?</h2>
              </div>
              <ul className="rich-out-2">
                <li>
                  <div className="image">
                    <img src="../img/dummy-bg.png" alt="GATEZERO" />
                  </div>
                  <h3>Consulting</h3>
                  <p>Easy engagement</p>
                  <p>Quick turn around</p>
                  <p>Expertise from the founder</p>
                </li>
                <li>
                  <div className="image">
                    <img src="../img/grid-2.png" alt="GATEZERO" />
                  </div>
                  <h3>Research and Marketing</h3>
                  <p>Build or validate your research</p>
                  <p>Evaluate and execute your digital marketing</p>
                </li>
                <li>
                  <div className="image">
                    <img src="../img/grid-3.png" alt="GATEZERO" />
                  </div>
                  <h3>Corporate Training</h3>
                  <p>Infuse culture of digital prudence</p>
                  <p>Customized training program for rapid adoption</p>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      {/* handled-rich end */}

      <div className="takeoffPoint-2">
        <Container>
          <div className="row">
            <div className="takeoffPoint-2-content">
              <div className="takeoffPoint-for-2">
                <h3>GateZero Works Across all industries</h3>
                <ul>
                  <li><span>Corporate leaders</span></li>
                  <li><span>Executives</span></li>
                  <li><span>Venture capitalist</span></li>
                  <li><span>Angle investors</span></li>
                  <li><span>Product Manager</span></li>
                  <li><span>Product Owners</span></li>
                  <li><span>Entrepreneurs</span></li>
                </ul>
                <div className="red-more-button">
                  <Button className="btn-primary-2 mr-l"><a href="/signup">Sign up for free training</a></Button>
                </div>
              </div>
              <div className="TakeoffPoint-img">
                <img src="../img/take.png" alt="" />
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* TakeoffPoint end */}
      <div className="handled-rich-section">
        <Container>
          <div className="row">
            <div className="handled-rich-content">
              <div className="heading-left">
                <h2>High Value Benefits</h2>
              </div>
              <ul className="rich-out-2">
                <li>
                  <div className="image mt-b">
                    <img src="../img/high-1.jpg" alt="GATEZERO" />
                  </div>
                  <p>Avoid loss of capital</p>
                  <p>Avoid loss of time</p>
                  <p>Avoid loss of reputation</p>
                </li>
                <li>
                  <div className="image mt-b">
                    <img src="../img/high-2.jpg" alt="GATEZERO" />
                  </div>
                  <p>Build right product at right time</p>
                  <p>Unleash massive growth and revenue</p>
                  <p>Turn existing products into game changers</p>
                </li>
                <li>
                  <div className="image mt-b">
                    <img src="../img/grid-3.png" alt="GATEZERO" />
                  </div>
                  <p>Build high impact roadmap with accurate priorities</p>
                  <p>Avoid all bad things that comes with failures</p>
                  <p>Reap all benefits that comes with Success</p>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      {/* handled-rich end */}
      <div className="take-drive-2">
        <Container>
          <div className="row">
            <div className="take-drive-2-content">
              <ul className="take-test-2">
                <li>
                  <h3>Take a Test Drive</h3>
                </li>
                <li>
                  <p>Run a known successful or failed digital initiative through the framework and see the results
                    <div className="red-more-button">
                      <Button className="btn-primary-2 white-btn mr-l"><a href="/signup">Start here for free</a></Button>
                    </div>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      {/* take-drive end */}
      {/* <div className="takefooter">
        <Container>
          <div className="row">
            <div className="col-md-12">
              <p>For passionate digital leaders, there is no bigger joy than being right about a digital <br />investment and see it produce results</p>
              <p>When your decisions have large consequences use <br />GateZero - <span>Start here</span></p>
            </div>
          </div>
        </Container>
      </div> */}

      <div className="arrow-left-bg">
      </div>
      <div className="arrow-right-bg">
      </div>
    </div>

  )
}
