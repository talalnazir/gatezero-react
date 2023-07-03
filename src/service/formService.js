import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL_API;

const tokendata=()=>{
  return localStorage.getItem("token");
}

const headerdata=()=>{
  let token = tokendata();
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
}

export const problemDescription = (value) => {
  const headers = headerdata();
  var data = {
    evaluation_id: value.evaluation_id,
    problem: value.problem,
    situation: value.situationExperience,
    situation_facing: value.situationFacing,
    activity_problem: value.activitydone,
    primary_root: value.primaryroot,
    ideal_outcome: value.idealoutcome,
    proposed_solution: value.proposedsolution,
    cause_ideal_outcome: value.solutionidealoutcome,
  };
  return axios.post(baseUrl + "problemdescription",data, headers);
};

// export const getProblemDescription = (value) => {
//   const headers = headerdata();
//   return axios.post(baseUrl + "getproblemdescription",null, headers);
// };

export const whoiscas = (value) => {
  const headers = headerdata();
  var data = {
    evaluation_id: value.evaluation_id,
    customer: value.customer,
    actor: value.actor,
    stakeholder: value.stakeholder,
  };

  return axios.post(baseUrl + "whoiscas",data, headers);
};

export const motivationparity = (value) => {
  const headers = headerdata();
  var data = {
    evaluation_id: value.evaluation_id,
    score: value.score,
  };

  return axios.post(baseUrl + "motivationparity",data, headers);
};

