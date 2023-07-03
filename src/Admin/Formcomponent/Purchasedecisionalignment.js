import { Container, Form, Row, Button, Table } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import { useSelector, useDispatch } from "react-redux";
import { setPurchasedecisionalignment } from "../../Reducer/reducer";
import Header2 from "./Header2";
import Initiativeheader from "../Component/Initiativeheader";
import ReactLoading from "react-loading";
import { setJson, getJson } from "../../service/auth";

export default function Purchasedecisionalignment() {
  let loader;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let evaluation_id = localStorage.getItem("evaluation_id");

  let checkeda = false;
  let checkeds = false;
  let checkedc = false;

  const [issubmit, setSubmit] = useState(false);
  const [total, setTotal] = useState("");
  const [state, setState] = useState({
    customer: "",
    customerchecked: false,
    actor: "",
    actorchecked: false,
    stakeholders: "",
    stakeholderschecked: false,
    total:""
  });

  const setRedux = (data, json, evaluation_id) => {
    dispatch(
      setPurchasedecisionalignment({
        data,
        json,
        evaluation_id,
      })
    );
    setJson(json, evaluation_id);
  };


  if (state.customer) {
    checkedc = true;
  }

  if (state.actor) {
    checkeda = true;
  }

  if (state.stakeholders) {
    checkeds = true;
  }

  const setData = (e) => {
    if (e.target.name && e.target.value) {
      const { name, value } = e.target;

      setState((prev) => ({
        ...prev,
        [name]: value,
        [e.target.name + "checked"]: e.target.checked,
      }));
    }


    let customer = false;
    let actor = false;
    let stakeholders = false;
    let totalVal=0;

    if ($("#customer").prop("checked") == true) {
      customer = true;
    }
    if ($("#actor").prop("checked") == true) {
      actor = true;
    }
    if ($("#stakeholders").prop("checked") == true) {
      stakeholders = true;
    }

    if (customer == true) {
      totalVal=1;
    }

    if (actor == true) {
      totalVal=-3;
    }

    if (stakeholders == true) {
      totalVal=-1;
    }

    if (customer == true && actor == true) {
      totalVal=2;
    }
    if (actor == true && stakeholders == true) {
      totalVal=-1;
    }
    if (customer == true && stakeholders == true) {
      totalVal=2;
    }
    if (customer == true && actor == true && stakeholders == true) {
      totalVal=5;
    }
    $('#total').val(totalVal);
    setState((prev) => ({
      ...prev,
      total: totalVal,
    }));
  };

  const submitData = (event) => {
    event.preventDefault();
    event.stopPropagation();
    
    if (isNaN(state.total) === false && state.total) {
      var num = [-1, 1, 0, 2, -3, 5];
   
      if (num.includes(state.total)) {

        setRedux(
          state,
          JSON.stringify({ purchasedecisionalignment: state }),
          evaluation_id
        );

        navigate("/user/revenuescore");

      } else {
        $('.noalert').show();
        window.scrollTo(0, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }

  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setSubmit(true);
    getJson(evaluation_id).then((res) => {
      let data = JSON.parse(res.data.data.json);
      if (data.purchasedecisionalignment) {
        setState({ ...data.purchasedecisionalignment });
        setTotal(data.purchasedecisionalignment.total);
      }
      setSubmit(false);
    });
  }, []);

  if (issubmit) {
    loader = <ReactLoading type="bubbles" color="#162c5d" width={100} />;
  }

  return (
    <div>
      <Header2 />

      <div className="page-wraper">
        <div className="Probdesc-page">
        <Initiativeheader eid={evaluation_id}/>
          <Container>
            <Row>
            {/* <div className="col-md-12">
                   
                    <div className="next-back-button">{loader}
                      <Button
                        variant="primary button-green"
                        onClick={() => navigate(-1)}
                      >
                        Back
                      </Button>
                      <Button
                        variant="primary button-blue"
                        onClick={(e) => submitData(e)}
                      >
                        Next
                      </Button>
                    </div>
                  </div> */}
              <div className="dimentional-title">
                <h2>Purchase Decision Alignment Scorecard</h2>{loader}
                <p>
                  Purchase decision alignment informs about the customer's
                  interest in paying for your solution, overall alignment in
                  adoption, and financial and other support to the initiative.
                </p>
                <h6>
                  Whose problem are you solving? Check all that apply from
                  below.
                </h6>
              </div>
              <div className="table-list Purchasedecisionalignment">
                <Table striped responsive>
                  <tbody>
                    <tr>
                      <td>
                        <div className="Purch-checkbox">
                          <h2>Customer</h2>
                          <div className="check-box-table">
                            <Form.Check
                              aria-label="option 1"
                              id="customer"
                              name="customer"
                              value="true"
                              className="check"
                              checked={state.customerchecked}
                              onChange={(e) => setData(e)}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="Purch-checkbox">
                          <h2>Actor</h2>
                          <div className="check-box-table">
                            <Form.Check
                              aria-label="option 1"
                              id="actor"
                              name="actor"
                              value="true"
                              className="check"
                              checked={state.actorchecked}
                              onChange={(e) => setData(e)}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="Purch-checkbox">
                          <h2>Stakeholders</h2>
                          <div className="check-box-table">
                            <Form.Check
                              aria-label="option 1"
                              id="stakeholders"
                              name="stakeholders"
                              value="true"
                              className="check"
                              checked={state.stakeholderschecked}
                              onChange={(e) => setData(e)}
                            />
                            
                            
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td>
                        <div class="scrop-alignment-serch">
                          <h3>Purchase Decision Score</h3>
                          <div class="form-group">
                            <Form.Control
                              type="number"
                              id="total"
                              name="total"
                              defaultValue={total}
                            />
                          </div>
                          <span
                            className="text-danger noalert"
                            style={{ display: "none" }}
                          >
                            Select number from below chart
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tfoot>
                </Table>{" "}
                <div className="line-chart">
                  <img src="../img/purchasedicion.jpg" alt="" />
                </div>
              </div>
              <div className="buyer-motivation ">
                <div className="row">
                  <div className="col-md-12">
                    <div className="what-video">
                      <h3>Watch the video</h3>
                      <img src="../img/what-video.png" alt="" />
                    </div>
                    <div className="next-back-button">{loader}
                      <Button
                        variant="primary button-green"
                        onClick={() => navigate(-1)}
                      >
                        Back
                      </Button>
                      <Button
                        variant="primary button-blue"
                        onClick={(e) => submitData(e)}
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}
