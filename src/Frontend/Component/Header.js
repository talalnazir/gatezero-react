import React, { useState } from 'react'
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";

export default function Header() {

    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [showNav, setShowNav] = useState(false);

    const [showhome, setHome] = useState("active");
    const [showVideo, setVideo] = useState("inactive");
    const [showAbout, setAbout] = useState("inactive");
    const [showContact, setContact] = useState("inactive");

    
    const showDropdown = (e) => {
        setShow(!show);
        // setShowHeader(true)
        setHome("inactive");
        setVideo("inactive");
        setAbout("inactive");
        setContact("inactive"); 

    }
    const hideDropdown = e => {
        setShow(false);
    }
    const showNavBar = () => {
       
        setShowNav(!showNav);
    }

    const moveto = (page_name) => {

        if (page_name == "home") {

            setHome("active");
            setAbout("inactive");
            setContact("inactive");

            navigate("/");


        }else if(page_name == "video_library"){
            setHome("inactive");
            setVideo("active");
            setAbout("inactive");
            setContact("inactive");
            
            navigate("/video-library");
        }
        else if(page_name == "about_us"){

           setHome("inactive");
           setVideo("inactive");
            setAbout("active");
            setContact("inactive"); 
            navigate("/about-us");


        }else if(page_name == "contact_us"){

            setHome("inactive");
            setVideo("inactive");
            setAbout("inactive");
            setContact("active");
            navigate("/contact-us");


        }else if(page_name == "signup"){
            setHome("inactive");
            setVideo("inactive");
            setAbout("inactive");
            setContact("inactive"); 
            navigate("/signup");


        }else if(page_name == "sign"){

            setHome("inactive");
            setVideo("inactive");
            setAbout("inactive");
            setContact("inactive"); 
            navigate("/sign");

        }

    }


    const hideNavBar = () => setShowNav(false);
    return (
        <Navbar expand="lg" expanded={showNav}>
            <Container>
                <Navbar.Brand href="/"><img src="img/logo.png" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={showNavBar} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link  onClick={() => moveto("home")}  className={showhome} >Home</Nav.Link>
                            <NavDropdown className="pr-2 py-lg-4 align-text-top" title="Solutions" id="basic-nav-dropdown"
                                show={show}
                                onMouseEnter={showDropdown}
                                onMouseLeave={hideDropdown}
                                onClick={showDropdown}
                            >
                                <Container>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <ul className="rich-out-header">
                                                <li>
                                                    <div className="consulting-reach-header">
                                                        <h6>By Services</h6>
                                                        <span><a href="/services#financial-gating-solution" onClick={hideNavBar}>Financial Gating Solution</a></span>
                                                        <span><a href="/services#product-formulation" onClick={hideNavBar}>Product Formulation</a></span>
                                                        <span><a href="/services#marketing-messages" onClick={hideNavBar}>Marketing Messages</a></span>
                                                        <span><a href="/services#research" onClick={hideNavBar}>Research</a></span>
                                                        <span><a href="/services#user-experience" onClick={hideNavBar}>User experience</a></span>
                                                        <span><a href="/services#team-formulation" onClick={hideNavBar}>Team Formulation</a></span>
                                                        <span><a href="/services#true-agile" onClick={hideNavBar}>TrueAgile</a></span>
                                                        <span><a href="/services#corporate-training" onClick={hideNavBar}>Corporate Training</a></span>
                                                    </div>
                                                </li>
                                                <li className="">
                                                    <div className="consulting-reach-header">
                                                        <h6>By Pain Point</h6>
                                                        <span>
                                                            <a href="/pain-points#am-i-building-or-investing-in-the-right-product">
                                                                Am I building or investing in the right product?
                                                            </a>
                                                        </span>
                                                        <span>
                                                            <a href="/pain-points#how-can-i-reduce-complexity-and-improve-time-to-market">
                                                                How can I reduce complexity and improve time to market?
                                                            </a>
                                                        </span>
                                                        <span>
                                                            <a href="/pain-points#where-exactly-is-my-customer">
                                                                Where exactly is my customer?
                                                            </a>
                                                        </span>
                                                        <span>
                                                            <a href="/pain-points#which-new-product-will-make-me-the-market-leader">
                                                                Which new product will make me the market leader?
                                                            </a>
                                                        </span>
                                                        <span>
                                                            <a href="/pain-points#what-do-i-need-to-change-in-my-existing-products">
                                                                What do I need to change in my existing products?
                                                            </a>
                                                        </span>
                                                        <span>
                                                            <a href="/pain-points#why-is-my-marketing-not-working">
                                                                Why is my marketing not working?
                                                            </a>
                                                        </span>
                                                        <span>
                                                            <a href="/pain-points#how-to-reach-and-engage-my-customers">
                                                                How to reach and engage my customers?
                                                            </a>
                                                        </span>
                                                        <span>
                                                            <a href="/pain-points#what-kind-of-research-and-analysis-do-i-need">
                                                                What kind of research and analysis do I need?
                                                            </a>
                                                        </span>
                                                        <span>
                                                            <a href="/pain-points#how-do-i-ensure-adoption-and-growth-of-my-product">
                                                                How do I ensure adoption & growth of my product?
                                                            </a>
                                                        </span>
                                                        <span>
                                                            <a href="/pain-points#what-kind-of-team-do-i-need-to-execute-the-vision">
                                                                What kind of team do I need to execute the vision?
                                                            </a>
                                                        </span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="consulting-reach-header">
                                                        <h6>By Roles</h6>
                                                        <span><a href="/roles#founders-and-ceos">Founders & CEOs</a></span>
                                                        <span><a href="/roles#venture-capitalists">Venture Capitalists</a></span>
                                                        <span><a href="/roles#executive-leadership">Executive Leadership</a></span>
                                                        <span><a href="/roles#angle-investors">Angle Investors</a></span>
                                                        <span><a href="/roles#entrepreneurs">Entrepreneurs</a></span>
                                                        <span><a href="/roles#product-owners">Product Owners</a></span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </Container>
                            </NavDropdown>

                            <Nav.Link  onClick={() => moveto("video_library")}  className={showVideo} >Video Library</Nav.Link>
                              <Nav.Link   onClick={() =>moveto("about_us")} className={showAbout}>About Us</Nav.Link>
                            <Nav.Link   onClick={() =>moveto("contact_us")} className={showContact}>Contact Us</Nav.Link>
                            <Nav.Link  onClick={() =>moveto("signup")}> <a className="sign-btn">Sign Up</a>{' '}</Nav.Link>
                            <Nav.Link  onClick={() =>moveto("sign")}> <Button className="btn-primary-2">Sign In</Button>{' '}</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}