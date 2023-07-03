import React, { useState, useEffect } from "react";
import { setJson, getJson } from "../../service/auth";

const Initiativeheader = (props) => {  
    const [initiative, setInitiative] = useState("");
    const [scorecard, setScorecard] = useState("");
    const [version, setVersion] = useState("");
    

    useEffect(() => {
        getJson(props.eid).then((res) => {
          let data = JSON.parse(res.data.data.json);
          console.log(data);
          if(data.Initiative){
            setInitiative(data.Initiative.fullname);
            setScorecard(data.Initiative.scorecard);
            setVersion(res.data.data.version);
          }
        });
      }, []);

    return (
        <>
          <div className="new-title">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  {/* <h4><i className="fa-solid fa-arrow-left-long"></i> New Initiative</h4> */}
                </div>
                <div className="col-md-8">
                  <ul className="new-title-list">
                    <li>
                      <h2>
                        Initiative Name:<span>{initiative}</span>
                      </h2>
                    </li>
                    <li>
                      <h2>
                        Scorecard Name:<span> {scorecard}</span>
                      </h2>
                    </li>
                    <li>
                      <h2>
                        Version:<span> {version}</span>
                      </h2>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div> 
        </>
    );
}
 
export default Initiativeheader;