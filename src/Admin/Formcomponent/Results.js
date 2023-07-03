import { Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header2 from "./Header2";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import ReactLoading from "react-loading";

import {
  setJson,
  getJson,
  GetInitiativeById,
  UpdateInitiative,
  checkAllForm,
} from "../../service/auth";

const Excel = (props) => {
  let summery = "";
  let str;
  let color = "";

  let red = "#ff0901";
  let yellow = "#fff501";
  let parrot = "#57ff01";
  let green = "#53a32b";

  const getSummery = (props) => {
    if (props.alias === "problemscorecard") {
      if (props.score <= 6) {
        str =
          "Problem score is very weak, you many not be able to generate revenue by solving this problem";
        color = red;
      } else if (props.score >= 6 && props.score <= 9) {
        str =
          "Problem score is below the desirable limit, you may want to solve this problem based on your business goals and if there are no other high value problems to be solved at this time";
        color = yellow;
      } else if (props.score >= 10 && props.score <= 17) {
        str =
          "This is a good problem to solve and you will be able to monitize the solution if the solution and execution is accurate. However you must have an acceptable problem validation score";
        color = parrot;
      } else if (props.score >= 18) {
        str =
          "This is an excellent problem to solve, and you will be able to monitize the solution if the solution and execution is accurate. However you must have an acceptable problem validation score";
        color = green;
      }
    } else if (props.alias === "problemvalidationscore") {
      if (props.score <= 1) {
        str =
          "You must eliminate negative validation score before moving forward";
        color = red;
      } else if (props.score <= 20) {
        str =
          "Your understanding of the problem needs to improve signifincatly, the score is showing that your customers do not agree with your understanding of the problem";
        color = yellow;
      } else if (props.score >= 20 && props.score <= 26) {
        str =
          "Your understanding of the problem needs to improve, the score is showing that your customers do not agree with some of your understanding of the problem";
        color = yellow;
      } else if (props.score >= 27 && props.score <= 31) {
        str =
          "Your undertanding of the problem is close to the understanding of the problem with the customer";
        color = parrot;
      } else if (props.score >= 32) {
        str =
          "Your undertanding of the problem is close to the understanding of the problem with the customer. However such high score may also indicate survey done with leading questions, you must review your survey questions and method again to confirm the high socre";
        color = green;
      }
    } else if (props.alias === "revenuescore") {
      if (props.score <= 1) {
        str = "No-Go if the goal of the venure is to generate revenue";
        color = red;
      } else if (props.score >= 2 && props.score <= 5) {
        str =
          "Very weak revenue score, you may not be able to monitize the product without mass adoption";
        color = red;
      } else if (props.score >= 6 && props.score <= 9) {
        str =
          "Decent opportunity to monitize the solution, but user experience has to be spot on also you will need evaluate the pricing model with the latest advertisement cost, and cost of customer acquisition";
        color = parrot;
      } else if (props.score >= 10) {
        str =
          "This is an excellent opportunity from revenue generating perspective. However its important to build a good solution";
        color = green;
      }
    } else if (props.alias === "purchasedecisionalignment" && props.state) {
      if (props.state.total < 0) {
        str =
          "You must imrpove your product to offer benefits to customer, actor and stakeholder properly. There is risk of project rejection due to proper benefit distribution";
        color = red;
      } else if (props.state.total === 2 && props.state.customer === "false") {
        str =
          "You may have difficulty to get the customer to pay for your soluiton. It may still work if customer has significant interest in solving actors problem. But you must validate this";
        color = yellow;
      } else if (props.state.total === 2 && props.state.customer === "true") {
        str =
          "This is a workable position, however it's advisable to add features to benefit the missing party. I.e. actor or stackholder";
        color = parrot;
      } else if (props.state.total === 5) {
        str =
          "This is a best position for the purchase decision alignment, you seem to offer benefits for customer, actors and stakeholders";
        color = green;
      }
    } else if (props.alias === "solutionriskscore") {
      if (props.score <= -40) {
        str =
          "No-Go if the risk is highly propbable and is caused by uniqueness of your solution";
        color = red;
      } else if (props.score < 0) {
        str =
          "Please have this risk evaluated and see if it can be legally covered with a terms of service or agreement and consider what the worst case scenario means for you, Also evaluate the probability of the risk before marking it an acceptable risk";
        color = yellow;
      } else if (props.score === 0) {
        str =
          "This is an ideal score, and is almost too good to believe, please revalidate your assumptions and risk assessment.";
        color = green;
      }
    } else if (props.alias === "demandpeak") {
      if (props.score < 0) {
        str =
          "There is a risk that you may be late in the game. You need to evaluate the current competitiion and see if you can build significantly better product to capture the market";
        color = yellow;
      } else if (props.score === 1) {
        str =
          "It may take longer for you to generate money and you may need increased funds to keep the venture going. It will make sense to wait a bit before starting. There is a risk of change in problem space by the time the demand actually materialize";
        color = yellow;
      } else if (props.score === 3) {
        str =
          "This is ideal demand peak, there is a possibility that you will arrive with right product at the right time";
        color = parrot;
      }
    } else if (props.alias === "solutionscorecard") {
      if (props.score === 0) {
        str = "Fix the no-go before moving on";
        color = red;
      } else if (props.score >= 10) {
        str =
          "It’s a good score to have, especially for solutions invovling established technologies and does not include experimental solutions";
        color = green;
      } else if (props.score >= 1 && props.score <= 9) {
        str =
          "Any positive score is accepatble for difficult technology implementation. For established non-experimental solutions, the score should be 10 or more, So review and fix the weaker dimenstions of this score";
        color = yellow;
      } else if (props.score >= -9 && props.score < 0) {
        str =
          "A highly experimental technlogy implementation may generate this score. If the risks are understood and acceptable you can go ahead";
        color = yellow;
      } else if (props.score <= -10) {
        str =
          "This is a no-go score. You must improve your solution before moving on";
        color = red;
      }
    } else if (props.alias === "cruxcompetitive") {
      if (props.count === 0) {
        str = "Improve your product to atleast tie with the competitors";
        color = red;
      } else if (props.count < 3) {
        str =
          "You need to improve your features to a level that you at the minimum have 3 or more winning categories";
        color = yellow;
      } else if (props.count >= 3) {
        str = "";
        color = "";
      }
    } else if (props.alias === "cruxalignment") {
      if (props.score === 0) {
        str = "You shoud not move forward without resolving no-go rating";
        color = red;
      } else if (props.score >= 25) {
        str =
          "This is a good alignment score. Continue to work on improving it";
        color = yellow;
      } else if (props.score <= 25) {
        str =
          "Your score is lower  than 25, this means there are issues with alignment of product market solution and business goals, you need to improve the lower scores affecting the score before moving on. Lower alignment score slow down customer acquisition";
        color = red;
      }
    } else if (props.alias === "cruximpact") {
      if (props.score < 0) {
        str =
          "This is a no-go score. Your solution is not brining any considerable benefit to the customer";
        color = red;
      } else if (props.score >= 1 && props.score <= 6) {
        str =
          "This is acceptable socre based on the importance of benefit you are offerting to the customer";
        color = parrot;
      } else if (props.score >= 7 && props.score <= 10) {
        str =
          "This is a good score, you are providing really good value to the customer";
        color = parrot;
      } else if (props.score >= 10) {
        str =
          "An excellent score, if your solution can deliver on the promise it stands a high chances of success";
        color = green;
      }
    } else if (props.alias === "markatingscore") {
      if (props.score === -5) {
        str =
          "You must hire a professional experience markeint team or agencu. You have risk of failing due to lack of marketing experience";
        color = red;
      } else if (props.score >= 1 && props.score <= 4) {
        str =
          "You need to improve your marketing experience by hiring marketing experts, You may need additional marketing  expertise ";
        color = yellow;
      } else if (props.score === 5) {
        str = "You have good marketing team. This is an acceptable score";
        color = parrot;
      }
    } else if (props.alias === "fundingscore") {
      if (props.score === -10) {
        str =
          "It's a no-go. You will not be able to compelte the product. You must raise enough funding for the venture";
        color = red;
      } else if (props.score === -1) {
        str =
          "This is only acepatble if you and your team is hands on and capable of building the entire soluition yourself, otherwise it’s a no go";
        color = yellow;
      } else if (props.score === 0) {
        str =
          "You may be able to complete first version of the product but you would need additional funds for marketing and other expenses";
        color = yellow;
      } else if (props.score === 1) {
        str =
          "You may have funds to finish a product and get some customer to demonstrate tracktion, but you will need additional funds beyond that point";
        color = yellow;
      } else if (props.score === 3) {
        str =
          "You have a chance to build a product, launch it, get customers and be self reliant without additional funding dependingin upon your industry and solution";
        color = parrot;
      }
    } else if (props.alias === "pmcmalignment") {
      if (props.score <= 10) {
        str =
          "No-go. You have fundamental alignment issues. The score must be 14 or above";
        color = red;
      } else if (props.score >= 11 && props.score <= 13) {
        str =
          "Your score must be 14 and above, this is a weak score you must look at weaker dimentions and improve it in order to get good alignment";
        color = red;
      } else if (props.score >= 14 && props.score <= 19) {
        str =
          "This is a good score, your aim should be to continue to improve this score as you move on";
        color = parrot;
      } else if (props.score >= 20) {
        str =
          "This is a rare and excellent score. This means the solution is very well aligned across product - market - channel and model";
        color = green;
      }
    }

    return [str, color];
  };

  let [first, second] = getSummery(props);

  summery = (
    <li>
      <div className="recommendation">
        <h5>{props.name}</h5>
        {props.alias == "problemscorecard" ? <h5>{props.position}</h5> : ""}
        {/* <h5>{("First Quadrant")}</h5> */}
        <h5 style={{ color: second }}>{props.score}</h5>
      </div>
      <p>{first}</p>
    </li>
  );

  return summery;
};


const ExcelDealKiller = (props) => {
  let summery = "";
  let str;
  let str1;

  let color = "";

  let red = "#ff0901";
  let yellow = "#fff501";
  let parrot = "#57ff01";
  let green = "#53a32b";

  const getSummery = (props) => {

    if (props.alias === "nmps") {
      str = "A negative score here means the potential users of the solution do not have a strong motivation to act to use your solution, this results in substantial marketing costs and plodding progress in customer acquisition and may finally result in burning out capital and shutting down the business";
      str1 = "Pivot the problem, Pivot the actor/customer or both ";
    } else if (props.alias === "npvs") {
      str = "This means that the core assumption of the problem and the argument that the proposed remedy solves is not validated. It also means the Crux Rectangle score can be incorrect, invalidating the direction of the entire venture";
      str1 = "A detailed and methodical research is not optional, this step must be done";
    } else if (props.alias === "ncrs") {
      str = "This means customers will not find much value in your solution, and it does not do enough for them to adopt it.";
      str1 = "Work on your solution, bring in game changers";
    } else if (props.alias === "srs") {
      str = "A negative score here means there are one or more compelling reasons for your customers not to use your solution.";
      str1 = "Work on your model to eliminate the problematic part of your solution";
    } else if (props.alias === "pmcm") {
      str = "This means you cannot directly reach out to your target market; this generally happens due to legal reasons, binding contracts, or government regulations and policies.";
      str1 = "If the underlying reasons cannot be changed, pursue another opportunity.";
    } else if (props.alias === "nfs") {
      str = "You do not have funds to execute the venture and sustain it till it becomes self-supporting. Without proper funding, the venture will die at some point and likely cause loss of time and morale.";
      str1 = "Work on your solution to reduce scope, focus on MRMP, bring in an experienced team to cover ground faster, raise some money.";
    } else if (props.alias === "ong") {
      str = "There are other obvious no gos in solution space please see the summary section below.";
      str1 = "Fix the no gos or move on";
    }
    return [str, str1];
  };

  let [first, second] = getSummery(props);

  summery = (
    <li>
      <div className="recommendation">
        <h5>{props.name}</h5>
      </div>
      <div className="recommendation-deal">
        <p>{first}</p>
      </div>
      <div className="recommendation">
        <p>{second}</p>
      </div>

    </li>
  );

  return summery;
};

export default function Results() {
  let loader;
  let download;
  let evaluation_id;
  let review = "";
  let scoreColor1 = "";
  let scoreColor2 = "";
  let page;
  let errors = "";


  const navigate = useNavigate();
  let Id = useParams();

  if (Id.paramId) {
    evaluation_id = Id.paramId;
    localStorage.setItem("evaluation_id", evaluation_id);
  } else {
    evaluation_id = localStorage.getItem("evaluation_id");
  }

  const [iserror, setError] = useState(false);
  const [showerror, setShowError] = useState(false);
  const [issubmit, setSubmit] = useState(false);
  const [is_nogo, setnogo] = useState(false);
  const [quadrant, setQuadrant] = useState("");

  const [buyer_score, setBuyerscore] = useState(false);
  const [problem_score, setProblem] = useState(false);
  const [crux_alignment, setCruxaligmenet] = useState(false);
  const [risk_score, setRisk] = useState(false);
  const [pmcm_score, setPmcm] = useState(false);
  const [fund_score, setFund] = useState(false);



  const [state, setState] = useState({
    problemscorecard: 0,
    problemvalidationscore: 0,
    revenuescore: 0,
    purchasedecisionalignment: 0,
    solutionriskscore: 0,
    demandpeak: 0,
    solutionscorecard: 0,
    cruxalignment: 0,
    cruximpact: 0,
    markatingscore: 0,
    fundingscore: 0,
    pmcmalignment: 0,
  });

  const [total1, setTotal1] = useState(0);
  const [total2, setTotal2] = useState(0);

  const exportPdf = () => {
    html2canvas(document.querySelector("#download")).then((canvas) => {
      document.body.appendChild(canvas);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      let width = pdf.internal.pageSize.getWidth();
      let height = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "JPEG", 0, 0, width, height);
      pdf.save("./pdf/download.pdf");
      document.body.removeChild(canvas);
    });
  };

  const setRedux = (data, json, evaluation_id) => {
    setJson(json, evaluation_id);
  };

  let totalDataRow1 = (data) => {
    let totalVal =
      (data.problemscorecard ? data.problemscorecard.total : 0) +
      (data.problemvalidationscore ? data.problemvalidationscore.alltotal : 0) +
      (data.revenuescore ? data.revenuescore.total : 0) +
      (data.purchasedecisionalignment
        ? data.purchasedecisionalignment.total
        : 0) +
      (data.solutionriskscore ? data.solutionriskscore.total : 0) +
      (data.demandpeak ? data.demandpeak.demand : 0);
    return parseInt(totalVal);
  };

  let totalDataRow2 = (data) => {
    let totalVal =
      (data.solutionscorecard ? data.solutionscorecard.total : 0) +
      (data.cruxcompetitive ? data.cruxcompetitive.total : 0) +
      (data.cruxalignment ? data.cruxalignment.total : 0) +
      (data.cruximpact ? data.cruximpact.total : 0) +
      (data.markatingscore ? data.markatingscore.markating : 0) +
      (data.fundingscore ? data.fundingscore.funding : 0) +
      (data.pmcmalignment ? data.pmcmalignment.total : 0);
    return parseInt(totalVal);
  };


  useEffect(() => {
    window.scrollTo(0, 0);
    setSubmit(true);

    checkAllForm(evaluation_id).then((res) => {
      if (res.data[0] == 1) {
        getJson(evaluation_id).then((res) => {
          let data = JSON.parse(res.data.data.json);
          setState(data);

          if (data.buyermotivation.quadrant == "1") {
            setQuadrant("1st Quadrant")
          } else if (data.buyermotivation.quadrant == "2") {
            setQuadrant("2nd Quadrant")
          } else if (data.buyermotivation.quadrant == "3") {
            setQuadrant("3rd Quadrant")
          } else if (data.buyermotivation.quadrant == "4") {
            setQuadrant("4th Quadrant")
          } else {
            setQuadrant("")

          }

          let buyer_score = parseInt(data.buyermotivation.score);
          let problem_score = parseInt(data.problemvalidationscore.alltotal);
          let crux_alignment = parseInt(data.cruxalignment.total);
          let risk = parseInt(data.solutionriskscore.total);
          let pmcm = parseInt(data.pmcmalignment.total);
          let fund = parseInt(data.fundingscore.funding);

          if (buyer_score < 0) {
            setBuyerscore(true);
          } else {
            setBuyerscore(false);
          }

          if (problem_score < 0) {
            setProblem(true);
          } else {
            setProblem(false);
          }

          if (crux_alignment < 0) {
            setCruxaligmenet(true);
          } else {
            setCruxaligmenet(false);
          }

          if (risk <= -5) {
            setRisk(true);
          } else {
            setRisk(false);
          }

          if (pmcm == -20) {
            setPmcm(true);
          } else {
            setPmcm(false);
          }

          if (fund < 0) {
            setFund(true);
          } else {
            setFund(false);
          }


          if (data.is_nogo_solution || data.is_nogo_crux || buyer_score < 0) {

            setnogo(true)

          } else {
            setnogo(false)

          }

          setTotal1(totalDataRow1(data));
          setTotal2(totalDataRow2(data));

          setRedux(
            state,
            JSON.stringify({
              results: { opportunityscore: total1, executionscore: total2 },
            }),
            evaluation_id
          );

          GetInitiativeById(evaluation_id).then((res) => {
            let fullname = res.data.data[0].initiative_name;
            let scorecard = res.data.data[0].scorecard_name;
            let situation = res.data.data[0].situation;
            UpdateInitiative(
              evaluation_id,
              fullname,
              scorecard,
              situation,
              total1,
              total2
            );
          });
          setSubmit(false);
        });
      } else {

        let url = "/user/";
        let redirect;

        console.log("res.data[1]");
        console.log(res.data[1]);

        for (var key in res.data[1]) {
          if (res.data[1].hasOwnProperty(key)) {
            if (res.data[1][key] === "Initiative") {
              redirect = url + "initiative";
            } else if (res.data[1][key] === "dimentionalProblem") {
              redirect = url + "problemdescription";
            } else if (res.data[1][key] === "customeractorstakeholder") {
              redirect = url + "customeractor";
            } else if (res.data[1][key] === "problemvalidationscore") {
              redirect = url + "problemvalidation";
            } else {
              redirect = url + res.data[1][key];
            }
            errors += '<a href="' + redirect + '">' + res.data[1][key] + '<br/>';
          }
        }
        setShowError(errors);
        setError(true);
      }
    });
  }, [total1, total2]);



  if (total1 >= 32 && total2 >= 58) {

    if (is_nogo) {
      review = <span style={{ background: "#ff0901" }}>No Go</span>;

    } else {
      review = <span style={{ background: "#00c838" }}>Go</span>;
    }


  } else {
    review = <span style={{ background: "#ff0901" }}>No Go</span>;
  }

  if (total1 >= 32) {
    scoreColor1 = "#00c838";
  } else {
    scoreColor1 = "#ff0901";
  }

  if (total2 >= 58) {
    scoreColor2 = "#00c838";
  } else {
    scoreColor2 = "#ff0901";
  }

  if (issubmit) {
    loader = <ReactLoading type="bubbles" color="#162c5d" width={100} />;
  }

  if (iserror == false) {
    download = (
      <Button variant="primary" onClick={() => exportPdf()}>
        <img src="../img/upload.png" alt="" /> Download
      </Button>
    );
  }

  if (iserror == true) {
    page = (
      <div id="download">
        <div className="row">
          <div className="col-md-12">
            <div className="result-go">
              <p>Please finish all the scorecards first to see the result.<br /> Finish below scorecards to get result.</p>
              <div dangerouslySetInnerHTML={{ __html: showerror }} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (iserror == false) {
    page = (
      <div id="download">
        {" "}
        {loader}
        <div className="row">
          <div className="col-md-12">
            <div className="result-go">
              <h3>
                The recommendation apply to the current state of the initiative.
                Review the summary <br />
                below and see if you can fix the negative scores as per the
                GateZero pivot framework and re-evaluate it.
              </h3>
              {review}
              <p>
                Review the summary below and see if you can fix the negative
                scores as per <br />
                the GateZero pivot framework and evaluate again.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="Opportunity-go-box">
              <div className="Opportunity-go-head">
                <h3>
                  Opportunity <br />
                  Score
                </h3>
                <h4 style={{ color: scoreColor1 }}>{total1}</h4>
              </div>
              <ul>
                <li>
                  <h5>Problem Score</h5>
                  <h5>
                    {state.problemscorecard ? state.problemscorecard.total : 0}
                  </h5>
                </li>
                <li>
                  <h5>Problem Validation Score</h5>
                  <h5>
                    {state.problemvalidationscore
                      ? state.problemvalidationscore.alltotal
                      : 0}
                  </h5>
                </li>
                <li>
                  <h5>Revenue Score</h5>
                  <h5>{state.revenuescore ? state.revenuescore.total : 0}</h5>
                </li>
                <li>
                  <h5>Purchase Decision Alignment</h5>
                  <h5>
                    {state.purchasedecisionalignment
                      ? state.purchasedecisionalignment.total
                      : 0}
                  </h5>
                </li>
                <li>
                  <h5>Solution Risk Score</h5>
                  <h5>
                    {state.solutionriskscore
                      ? state.solutionriskscore.total
                      : 0}
                  </h5>
                </li>
                <li>
                  <h5>Demand Peak</h5>
                  <h5>{state.demandpeak ? state.demandpeak.demand : 0}</h5>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="Opportunity-go-box">
              <div className="Opportunity-go-head read">
                <h3>
                  Execution <br />
                  Score
                </h3>
                <h4 style={{ color: scoreColor2 }}>{total2}</h4>
              </div>
              <ul>
                <li>
                  <h5>Solution Score</h5>
                  <h5>
                    {state.solutionscorecard
                      ? state.solutionscorecard.total
                      : 0}
                  </h5>
                </li>
                <li>
                  <h5>Crux Competitive Score</h5>
                  <h5>
                    {" "}
                    {state.cruxcompetitive ? state.cruxcompetitive.total : 0}
                  </h5>
                </li>
                <li>
                  <h5>Crux Alignment Score</h5>
                  <h5>{state.cruxalignment ? state.cruxalignment.total : 0}</h5>
                </li>
                <li>
                  <h5>Crux Impact Score</h5>
                  <h5>{state.cruximpact ? state.cruximpact.total : 0}</h5>
                </li>
                <li>
                  <h5>Marketing Score</h5>
                  <h5>
                    {state.markatingscore ? state.markatingscore.markating : 0}
                  </h5>
                </li>
                <li>
                  <h5>Funding Score</h5>
                  <h5>{state.fundingscore ? state.fundingscore.funding : 0}</h5>
                </li>
                <li>
                  <h5>PMCM Alignment</h5>
                  <h5>{state.pmcmalignment ? state.pmcmalignment.total : 0}</h5>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {(buyer_score || problem_score || crux_alignment || risk_score || pmcm_score || fund_score || is_nogo) == true ? <div className="row recommendation-setions">
          <div className="col-md-12">
            <div className="Opportunity-go-box">
              <div className="Opportunity-go-head">
                <h3>Deal Killers</h3>
              </div>
              <div className="Opportunity-go-head">
              <div className="recommendation">
        <h5 style={{ color: "#0d6efd" }}>Deal Killers</h5>
      </div>
      <div className="recommendation">
      <h5 style={{ color: "#0d6efd" }}>What does it mean? </h5>
      </div>
      <div className="recommendation">
      <h5 style={{ color: "#0d6efd" }}>What to do about it?</h5>
      </div>
      </div>

              {/* <h4>Deal killers are factors that are most likely to be the causes of failure. These are strong drivers not in your favor out of the gate, which may prove to be too much to course-correct as you move forward. Below is a list of these and some potential fixes to turn them around.</h4>			 */}
               
              <ul>
                {buyer_score == true ?    <ExcelDealKiller
                  name={"Negative Motivation Parity Score"}
                  score={
                    state.problemscorecard ? state.problemscorecard.total : 0
                  }
                  position={quadrant}
                  alias={"nmps"}
                /> : <></> }
             

                {problem_score == true ?    <ExcelDealKiller
                  name={"Negative Problem Validation Score"}
                  score={
                    state.problemscorecard ? state.problemscorecard.total : 0
                  }
                  position={quadrant}
                  alias={"npvs"}
                /> : <></>}
             

               {crux_alignment == true ?  <ExcelDealKiller
                  name={"Negative Crux Alignment Score"}
                  score={
                    state.problemscorecard ? state.problemscorecard.total : 0
                  }
                  position={quadrant}
                  alias={"ncrs"}
                />:<></>}
               
                {risk_score == true ?  <ExcelDealKiller
                  name={"<= -5 Solution Risk Score"}
                  score={
                    state.problemscorecard ? state.problemscorecard.total : 0
                  }
                  position={quadrant}
                  alias={"srs"}
                />:<></>}
               
                {pmcm_score == true ?   <ExcelDealKiller
                  name={"-20 PMCM Score"}
                  score={
                    state.problemscorecard ? state.problemscorecard.total : 0
                  }
                  position={quadrant}
                  alias={"pmcm"}
                /> :<></>}
             

                 {fund_score == true ?<ExcelDealKiller
                  name={"Negative Funding Score"}
                  score={
                    state.problemscorecard ? state.problemscorecard.total : 0
                  }
                  position={quadrant}
                  alias={"nfs"}
                />
 : <></>}

               {is_nogo == true ?   <ExcelDealKiller
                  name={"Other No Go"}
                  score={
                    state.problemscorecard ? state.problemscorecard.total : 0
                  }
                  position={quadrant}
                  alias={"ong"}
                /> : <></>} 
              


              </ul>
            </div>
          </div>
        </div> : <></>}



        <div className="row recommendation-setions">
          <div className="col-md-12">
            <div className="Opportunity-go-box">
              <div className="Opportunity-go-head">
                <h3>Summary and recommendation</h3>
              </div>
              <ul>
                <Excel
                  name={"Problem Score"}
                  score={
                    state.problemscorecard ? state.problemscorecard.total : 0
                  }
                  position={quadrant}
                  alias={"problemscorecard"}
                />
                <Excel
                  name={"Problem Validation Score"}
                  score={
                    state.problemvalidationscore
                      ? state.problemvalidationscore.alltotal
                      : 0
                  }
                  alias={"problemvalidationscore"}
                />
                <Excel
                  name={"Revenue Score"}
                  score={state.revenuescore ? state.revenuescore.total : 0}
                  alias={"revenuescore"}
                />
                <Excel
                  name={"Purchase Decision Alignment"}
                  state={state.purchasedecisionalignment}
                  score={
                    state.purchasedecisionalignment
                      ? state.purchasedecisionalignment.total
                      : 0
                  }
                  alias={"purchasedecisionalignment"}
                />
                <Excel
                  name={"Solution Risk Score"}
                  score={
                    state.solutionriskscore ? state.solutionriskscore.total : 0
                  }
                  alias={"solutionriskscore"}
                />
                <Excel
                  name={"Demand Peak"}
                  score={state.demandpeak ? state.demandpeak.demand : 0}
                  alias={"demandpeak"}
                />
                <Excel
                  name={"Solution Score"}
                  score={
                    state.solutionscorecard ? state.solutionscorecard.total : 0
                  }
                  alias={"solutionscorecard"}
                />
                <Excel
                  name={"Crux Competitive Score"}
                  score={
                    state.cruxcompetitive ? state.cruxcompetitive.total : 0
                  }
                  count={
                    state.cruxcompetitive ? state.cruxcompetitive.count : 0
                  }
                  alias={"cruxcompetitive"}
                />
                <Excel
                  name={"Crux Alignment Score"}
                  score={state.cruxalignment ? state.cruxalignment.total : 0}
                  alias={"cruxalignment"}
                />
                <Excel
                  name={"Crux Impact Score"}
                  score={state.cruximpact ? state.cruximpact.total : 0}
                  alias={"cruximpact"}
                />
                <Excel
                  name={"Marketing Score"}
                  score={
                    state.markatingscore ? state.markatingscore.markating : 0
                  }
                  alias={"markatingscore"}
                />
                <Excel
                  name={"Funding Score"}
                  score={state.fundingscore ? state.fundingscore.funding : 0}
                  alias={"fundingscore"}
                />
                <Excel
                  name={"PMCM Alignment"}
                  score={state.pmcmalignment ? state.pmcmalignment.total : 0}
                  alias={"pmcmalignment"}
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header2 />
      <div className="page-wraper">
        <div className="Probdesc-page">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="result-title">
                  <h2>Result</h2>
                  {download}
                </div>
              </div>
            </div>
            {page}
            <div className="row">
              <div className="col-md-12">
                <div className="view-summary">
                  {/* <Button className="view-button" variant="link ">View Summary</Button> */}
                  <div className="watch-video">
                    <img src="../../img/youtube.png" alt="" />
                    <Button variant="link">Watch the video</Button>
                  </div>
                  <div className="next-back-button">
                    <Button
                      variant="primary button-green"
                      onClick={() => navigate(-1)}
                    >
                      Back
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

