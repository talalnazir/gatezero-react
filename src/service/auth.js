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

export const Register = (fullname, email, password, working,country,type_free,type_consulation,company,designation) => {
  const headers = headerdata();
  var data = {
    name: fullname,
    email: email,
    password: password,
    working: working,
    country: country,
    typefree:type_free,
    typeconsultation:type_consulation,
    company:company,
    designation:designation
  };

  return axios.post(baseUrl + "register", data, headers);
};

export const Sign = (email, password) => {
  const headers = headerdata();
  var data = {
    email: email,
    password: password,
  };
  return axios.post(baseUrl + "login", data, headers);
};

export const Profile = () => {
  const headers = headerdata();
  return axios.post(baseUrl + "profile", null, headers);
};

export const Logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("User");
  return true;
};

export const AddInitiative = (fullname, scorecard, situation) => {
  const headers = headerdata();

  var data = {
    initiative_name: fullname,
    scorecard_name: scorecard,
    situation: situation,
  };
  return axios.post(baseUrl + "setevaluation", data, headers);
};

export const UpdateInitiative = (id, fullname, scorecard, situation,optscore,execscore) => {
  const headers = headerdata();

  var data = {
    initiative_name: fullname,
    scorecard_name: scorecard,
    situation: situation,
    opt_score:optscore,
    execution_score:execscore
  };
  return axios.post(baseUrl + "setevaluation/" + id, data, headers);
};

export const GetInitiative = () => {
  const headers = headerdata();
  return axios.post(baseUrl + "getevaluation", null, headers);
};

export const GetUsers = () => {
  const headers = headerdata();
  return axios.post(baseUrl + "getusers", null, headers);
};

export const GetInitiativeById = (id) => {
  const headers = headerdata();

  let str = "";
  if (id) {
    str = "getevaluation/" + id;
  }
  return axios.post(baseUrl + str, null, headers);
};

export const AdminGetInitiative = (fromdate=null,todate=null) => {
  const headers = headerdata();
  var data = {
    fromdate: fromdate,
    todate: todate,
  };
  return axios.post(baseUrl + "admin/getevaluation", data, headers);
};

export const AdminGetInitiativeById = (id) => {
  const headers = headerdata();
  let str = "";
  if (id) {
    str = "admin/getevaluation/" + id;
  }
  return axios.post(baseUrl + str, null, headers);
};

export const deleteRow = (id) => {
  const headers = headerdata();
  var data = { evaluation_id: id };
  return axios.post(baseUrl + "deleteRow", data, headers);
};


export const Forgotpassword = (email) => {
  const headers = headerdata();
  var data = {email: email};
  return axios.post(baseUrl + "forgot", data, headers);
};


export const setJson = (json,evaluation_id) => {
  const headers = headerdata();
  var data = {json: json,evaluation_id:evaluation_id};
  return axios.post(baseUrl + "setjson", data, headers);
};

export const getJson =  (evaluation_id) => {
  const headers = headerdata();
  return axios.get(baseUrl + "getjson/"+evaluation_id, null, headers);
};

export const getSteps =  (evaluation_id) => {
  const headers = headerdata();
  return axios.get(baseUrl + "getsteps/"+evaluation_id, null, headers);
};

export const newVersion =  (evaluation_id) => {
  const headers = headerdata();
  return axios.get(baseUrl + "dublicate/"+evaluation_id, null, headers);
};

export const checkAllForm =  (evaluation_id) => {
  const headers = headerdata();
  return axios.get(baseUrl + "checkformsubmited/"+evaluation_id, null, headers);
};
export const getPackages = (user_email) => {
  const headers = headerdata();
  var data = {
    u_email: user_email
  }
  return axios.post(baseUrl+"get_packages", data, headers);
}
export const getAssigned = (user_email) => {
  const headers = headerdata();
  var data = {
    u_email: user_email
  }
  return axios.post(baseUrl+"get_assigned", data, headers);
}
export const checkScorecard = (user_email) => {
  const headers = headerdata();
  var data = {
    u_email: user_email
  }
  return axios.post(baseUrl+"check_scorecards", data, headers);
}
export const delinkAssigned = (user_email, token) => {
  const headers = headerdata();
  var data = {
    u_email: user_email,
    token, token
  }
  return axios.post(baseUrl+"delink_assigned", data, headers);
}
export const assignToken = (user_email, token) => {
  const headers = headerdata();
  var data = {
    u_email: user_email,
    token, token
  }
  return axios.post(baseUrl+"assignusers", data, headers);
}
export const setFreetrail = (user_email) => {
  const headers = headerdata();
  var data = {
    u_email: user_email
  }
  return axios.post(baseUrl+"freetrail", data, headers);
}
export const getFreetrail = (user_email) => {
  const headers = headerdata();
  var data = {
    u_email: user_email
  }
  return axios.post(baseUrl+"check_free", data, headers);
}
export const checkIfAssigned = (user_email) => {
  const headers = headerdata();
  var data = {
    u_email: user_email
  }
  return axios.post(baseUrl+"check_if_assigned", data, headers);
}
export const checkoutForm = (firstname, lastname, email, address, phone, city, country, packages, zip, u_email) => {
  const headers = headerdata();
  let package_type = '';
  let price = '';
  if(packages == '649') {
    package_type = 'unlimited';
    price = '649';
  }
  else if(packages == '349') {
    package_type = 'ten';
    price = '349';
  }
  else if(packages == '149') {
    package_type = 'one';
    price = '149';
  }
  var data = {
    u_email: u_email,
    first_name: firstname,
    last_name: lastname,
    address: address,
    zip: zip,
    country: country,
    email: email,
    city: city,
    packages: packages,
    phone: phone,
    package_type: package_type,
    price: price
  }
  return axios.post(baseUrl+"checkoutform", data, headers);
}