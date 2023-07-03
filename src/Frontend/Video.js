import React from 'react';
import { Container } from 'react-bootstrap';


const Video = ()=>{

    let data = [
        {
            id: 1,
            title: 'What is GateZero',
            videoUrl: "https://www.youtube.com/embed/B_IYFFbKkfY?modestbranding=1&autohide=1&showinfo=0&controls=0" 
        },
        {
            id: 2,
            title: 'How GateZero Works?',
            videoUrl: 'https://www.youtube.com/embed/zKdSoEW266g?modestbranding=1&autohide=1&showinfo=0&controls=0'  
        },
        {
            id: 3,
            title: 'What is the reason for high failures rates of Digital Initiatives?',
            videoUrl: 'https://www.youtube.com/embed/m7OWXtbiXX8?modestbranding=1&autohide=1&showinfo=0&controls=0'  
        },
        {
            id: 4,
            title: '10 critical question for digital strategy – innovation and transformation and GateZero Tools',
            videoUrl: 'https://www.youtube.com/embed/TlN5frP4VuI?modestbranding=1&autohide=1&showinfo=0&controls=0'  
        },
        {
            id: 5,
            title: 'Watch How GateZero easily predicts failed silicon valley',
            videoUrl: 'https://www.youtube.com/embed/BMURR03K8U4?modestbranding=1&autohide=1&showinfo=0&controls=0'  
        },
        {
            id: 6,
            title: 'GateZero Benefits',
            videoUrl: 'https://www.youtube.com/embed/BMURR03K8U4?modestbranding=1&autohide=1&showinfo=0&controls=0'  
        },
        {
            id: 7,
            title: 'GateZero Financial Gating Solution',
            videoUrl: 'https://www.youtube.com/embed/mr75zNOGFP8?modestbranding=1&autohide=1&showinfo=0&controls=0'  
        },
        {
            id: 8,
            title: 'GateZero Product Formulation',
            videoUrl: 'https://www.youtube.com/embed/B_IYFFbKkfY?modestbranding=1&autohide=1&showinfo=0&controls=0'  
        }, 
        {
            id: 9,
            title: 'GateZero 360 Digital Marketing Service',
            videoUrl: 'https://www.youtube.com/embed/mr75zNOGFP8?modestbranding=1&autohide=1&showinfo=0&controls=0'  
        },
        {
            id: 10,
            title: 'GateZero Research Service',
            videoUrl: 'https://www.youtube.com/embed/TlN5frP4VuI?modestbranding=1&autohide=1&showinfo=0&controls=0'  
        },
        {
            id: 11,
            title: 'GateZero User Experience',
            videoUrl: 'https://www.youtube.com/embed/mr75zNOGFP8?modestbranding=1&autohide=1&showinfo=0&controls=0'  
        },
        {
            id: 12,
            title: 'GateZero Team Formulation',
            videoUrl: 'https://www.youtube.com/embed/B_IYFFbKkfY?modestbranding=1&autohide=1&showinfo=0&controls=0'  
        },
        {
            id: 13,
            title: 'GateZero True Agile',
            videoUrl: 'https://www.youtube.com/embed/BMURR03K8U4?modestbranding=1&autohide=1&showinfo=0&controls=0'  
        },
        {
            id: 14,
            title: 'GateZero Corporate Training',
            videoUrl: 'https://www.youtube.com/embed/mr75zNOGFP8?modestbranding=1&autohide=1&showinfo=0&controls=0'  
        },
        {
            id: 15,
            title: 'GateZero Value for Founder & CEOs',
            videoUrl: 'https://www.youtube.com/embed/mr75zNOGFP8?modestbranding=1&autohide=1&showinfo=0&controls=0'  
        },
        {
            id: 16,
            title: 'GateZero Value for IT Executives',
            videoUrl: 'https://www.youtube.com/embed/BMURR03K8U4?modestbranding=1&autohide=1&showinfo=0&controls=0'  
        },
        {
            id: 17,
            title: 'GateZero Value for Venture capitalist and Angle Investors',
            videoUrl: 'https://www.youtube.com/embed/B_IYFFbKkfY?modestbranding=1&autohide=1&showinfo=0&controls=0'  
        },
        {
            id: 18,
            title: 'GateZero Value for Entrepreneurs',
            videoUrl: 'https://www.youtube.com/embed/mr75zNOGFP8?modestbranding=1&autohide=1&showinfo=0&controls=0'  
        },
        {
            id: 19,
            title: 'GateZero Value for Product Owners',
            videoUrl: 'https://www.youtube.com/embed/mr75zNOGFP8?modestbranding=1&autohide=1&showinfo=0&controls=0'  
        },
        {
            id: 20,
            title: 'GateZero Online Tools',
            videoUrl: 'https://www.youtube.com/embed/TlN5frP4VuI?modestbranding=1&autohide=1&showinfo=0&controls=0'  
        },
        {
            id: 21,
            title: 'GateZero How to design innovation that works for your business',
            videoUrl: 'https://www.youtube.com/embed/mr75zNOGFP8?modestbranding=1&autohide=1&showinfo=0&controls=0'  
        },
        {
            id: 22,
            title: 'GateZero Large scale digital transformation',
            videoUrl: 'https://www.youtube.com/embed/B_IYFFbKkfY?modestbranding=1&autohide=1&showinfo=0&controls=0'  
        },
        {
            id: 23,
            title: 'Running a GateZero approved Initiative',
            videoUrl: 'https://www.youtube.com/embed/BMURR03K8U4?modestbranding=1&autohide=1&showinfo=0&controls=0'  
        },
    ]


    return(
        <div className="video-page">
            <Container>
                <div className="row">
                    <div className="heading-inner-pages">
                        <h1 className="about-heading">GateZero Video <span> Library </span></h1>
                      </div>
                    </div>
                 <div className="row">
                 <div className="video-content">
                        <p>
                         Explore how GateZero provides transformative tools and enable your business to launch digital offense. Deploy your capital and efforts in the right direction and win your game.
                        </p>
                    </div>
                </div>
                <div className="video-cont mb-5 pb-2">   
                  
                    <div className="row gx-5">
                        {data.map((item, index) => {
                        return(
                            <div class= "col-sm-6 mb-4" key={index}>
                                <h3>{item.title}</h3>
                                <div className="embed-responsive embed-responsive-16by9" >
                                    <iframe class="embed-responsive-item" src={item.videoUrl} width='100%' height='300' ></iframe>
                                </div>
                            </div>  
                        )  
                        })}
                    
                        <div class= "col-md-6 video_bott_btn">
                            <button type="button" class="btn-primary-2 mr-l" ><a href="/signup">Signup for Free Training </a> </button> 
                            </div>
                    </div>
               </div>
            </Container>
        </div>
    )
}
export default Video;
