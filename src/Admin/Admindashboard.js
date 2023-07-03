import React, { useState, useEffect } from "react";
import Datepicker2 from "./Datepicker2";
import { Container, Form, Row, Button, Table } from "react-bootstrap";
import Header from "./Component/Header";
import AdminListComponent from "./AdminListComponent";

export default function Admindashboard() {
  let Adminlist;

  const [date, setDate] = useState({ fromdate: "", todate: "" });

  if(date){
    Adminlist=<AdminListComponent date={date} />;
  }

  return (
    <div>
      <Header />
      <div className="Admin-dashboard">
        <Container>
          <div className="admin-deshbord-title">
            <h2>Admin dashboard</h2>
            <Datepicker2 date={setDate} />
          </div>
          <div className="table-list Problemvalidationtable">
            {Adminlist}
          </div>
        </Container>
      </div>
    </div>
  );
}
