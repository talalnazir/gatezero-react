import React,{useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import { checkScorecard } from '../service/auth';
import ListComponent from './ListComponent'
import Alert from "react-bootstrap/Alert";

export default function Dashboard() {
  const [fullname, setFullName] = useState("");
  const [tooltip, setTooltip] = useState("");
  const user_email = localStorage.getItem("email");
  const [Scorecard, setcheckScorecard] = useState(true);
  const [showAlert, setAlert] = useState(false);
  const [showAlertMsg, setAlertMsg] = useState({ type: "", msg: "" });

  function AlertShow(props) {
    if (showAlert) {
        return (
        <Alert variant={props.type}>
            <Alert.Heading>Alert !</Alert.Heading>
            <p>{props.text}</p>
        </Alert>
        );
    }
  }

  useEffect(() => {
     let userData = localStorage.getItem("User");
     let user = JSON.parse(userData);
     setFullName(user.user.name);
  }, []);
  const componentDidMount = async () => {
    let result = await checkScorecard(user_email);
    if(result.data.success) {
      setcheckScorecard(true);
      setTooltip("You can Add Scorecard")
    }
    else if(result.data.errorLimit) {
      setTooltip("Limit of adding scorecard exceeds")
      setcheckScorecard(false);
    }
    else if(result.data.errorPackage) {
      setTooltip("No package found for this user")
      setcheckScorecard(false);
    }
  }
  const test = async (e, m, t) => {
    e.preventDefault();
    console.log('aaaa')
    setAlert(true);
    setAlertMsg({ type: t, msg: m });
  }
  componentDidMount();
  return (
    <div>
      <div className='dashbord-page'>
          <div className='container'>
             
                <div className='dashboard-title'>
                  <div className='dashboard-patel'>
                      <h1>Dashboard</h1>
                      <h3>{ fullname }</h3>
                  </div>
                  <div className='dashboard-button2'>
                  {Scorecard == true ? (
                      <Link to="/user/initiative" className='dashboard-button button' variant="primary"><i className="fa-solid fa-square-plus"></i>New Scorecard</Link>
                  ):(
                    <Link to="/user/initiative" onClick={(e) => test(e, tooltip, 'danger')} className='dashboard-button button' variant="primary"><i className="fa-solid fa-square-plus"></i>New Scorecard</Link>
                  )}
                  </div>  
                </div>
                <ListComponent />  
         
          </div>
      </div>
    </div>
  )
}
