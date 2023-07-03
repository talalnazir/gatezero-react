import React, { useState } from "react";
import DatePicker from "react-datepicker";
// import moment from "moment";
import { Button } from "react-bootstrap";



export default function Datepicker2(props) {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  const handleCheckInDate = (date) => {
    setCheckInDate(date);
    setCheckOutDate(null);
  };

  const handleCheckOutDate = (date) => {
    setCheckOutDate(date);
  };

  const search=()=>{
    props.date({fromdate:checkInDate,todate:checkOutDate});
  }

  return (
    <div className="date">
      <div className="input-container">
        <ul>
          <li><h3>From Date</h3></li>
          <li>
              <div>
                {/* <label>Check-in</label> */}
                <DatePicker
                  selected={checkInDate}
                  minDate={new Date()}
                  onChange={handleCheckInDate}
                />
              </div>
          </li>
          <li>
            <h3>To Date</h3>
          </li>
          <li>
              <div>
                {/* <label>Check-out</label> */}
                <DatePicker
                  selected={checkOutDate}
                  minDate={checkInDate}
                  onChange={handleCheckOutDate}
                />
              </div>
          </li>
          <li>
            <div className="serch-button">
               <Button variant="link" onClick={(e) => search()}>Search</Button>
            </div>
          </li>
        </ul>
        
      </div>
      {checkInDate && checkOutDate && (
        <div className="summary">
          {/* <p>
            You book a hotel from {moment(checkInDate).format("LL")} to{" "}
            {moment(checkOutDate).format("LL")}.
          </p> */}
        </div>
      )}
    </div>
  );
}
