import { Container, Form, Row, Button, Table } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import Header2 from "./Header2";
import Initiativeheader from "../Component/Initiativeheader";
import { useSelector, useDispatch } from "react-redux";
import { setCruxCompitive } from "../../Reducer/reducer";
import ReactLoading from "react-loading";
import { setJson, getJson } from "../../service/auth";

export default function Cruxcompetitive() {
  let loader;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let evaluation_id = localStorage.getItem("evaluation_id");
  let totalVal=0;
  let count = 0;
  let totalCount = 0;

  const [issubmit, setSubmit] = useState(false);
  const [state, setState] = useState({
    comp1: "",
    comp2: "",
    comp3: "",
    comp4: "",

    differentiator1: "",
    differentiatorRow1Col1: "",
    differentiatorRow1Col2: "",
    differentiatorRow1Col3: "",
    differentiatorRow1Col4: "",
    differentiatorRow1Col5: "",
    differentiatorRow1Col6: "",
    differentiatorRow1Col7: "",
    differentiatorRow1Col8: "",

    differentiator2: "",
    differentiatorRow2Col1: "",
    differentiatorRow2Col2: "",
    differentiatorRow2Col3: "",
    differentiatorRow2Col4: "",
    differentiatorRow2Col5: "",
    differentiatorRow2Col6: "",
    differentiatorRow2Col7: "",
    differentiatorRow2Col8: "",

    differentiator3: "",
    differentiatorRow3Col1: "",
    differentiatorRow3Col2: "",
    differentiatorRow3Col3: "",
    differentiatorRow3Col4: "",
    differentiatorRow3Col5: "",
    differentiatorRow3Col6: "",
    differentiatorRow3Col7: "",
    differentiatorRow3Col8: "",

    differentiator4: "",
    differentiatorRow4Col1: "",
    differentiatorRow4Col2: "",
    differentiatorRow4Col3: "",
    differentiatorRow4Col4: "",
    differentiatorRow4Col5: "",
    differentiatorRow4Col6: "",
    differentiatorRow4Col7: "",
    differentiatorRow4Col8: "",

    differentiator5: "",
    differentiatorRow5Col1: "",
    differentiatorRow5Col2: "",
    differentiatorRow5Col3: "",
    differentiatorRow5Col4: "",
    differentiatorRow5Col5: "",
    differentiatorRow5Col6: "",
    differentiatorRow5Col7: "",
    differentiatorRow5Col8: "",

    differentiator6: "",
    differentiatorRow6Col1: "",
    differentiatorRow6Col2: "",
    differentiatorRow6Col3: "",
    differentiatorRow6Col4: "",
    differentiatorRow6Col5: "",
    differentiatorRow6Col6: "",
    differentiatorRow6Col7: "",
    differentiatorRow6Col8: "",

    differentiator7: "",
    differentiatorRow7Col1: "",
    differentiatorRow7Col2: "",
    differentiatorRow7Col3: "",
    differentiatorRow7Col4: "",
    differentiatorRow7Col5: "",
    differentiatorRow7Col6: "",
    differentiatorRow7Col7: "",
    differentiatorRow7Col8: "",

    differentiator8: "",
    differentiatorRow8Col1: "",
    differentiatorRow8Col2: "",
    differentiatorRow8Col3: "",
    differentiatorRow8Col4: "",
    differentiatorRow8Col5: "",
    differentiatorRow8Col6: "",
    differentiatorRow8Col7: "",
    differentiatorRow8Col8: "",

    total: 0,
  });

  const setRedux = (data, json, evaluation_id) => {
    dispatch(
      setCruxCompitive({
        data,
        json,
        evaluation_id,
      })
    );
    setJson(json, evaluation_id);
  };

  const setData = (e) =>
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  if (state) {
    let {
      differentiatorRow1Col8,
      differentiatorRow2Col8,
      differentiatorRow3Col8,
      differentiatorRow4Col8,
      differentiatorRow5Col8,
      differentiatorRow6Col8,
      differentiatorRow7Col8,
      differentiatorRow8Col8,
    } = state;

  
    if (differentiatorRow1Col8 != "") {
      totalCount = totalCount + 1;
      if (differentiatorRow1Col8 == 1) {
        count = count + 1;
      }
    }
    if (differentiatorRow2Col8 != "") {
      totalCount = totalCount + 1;
      if (differentiatorRow2Col8 == 1) {
        count = count + 1;
      }
    }
    if (differentiatorRow3Col8 != "") {
      totalCount = totalCount + 1;
      if (differentiatorRow3Col8 == 1) {
        count = count + 1;
      }
    }
    if (differentiatorRow4Col8 != "") {
      totalCount = totalCount + 1;
      if (differentiatorRow4Col8 == 1) {
        count = count + 1;
      }
    }
    if (differentiatorRow5Col8 != "") {
      totalCount = totalCount + 1;
      if (differentiatorRow5Col8 == 1) {
        count = count + 1;
      }
    }
    if (differentiatorRow6Col8 != "") {
      totalCount = totalCount + 1;
      if (differentiatorRow6Col8 == 1) {
        count = count + 1;
      }
    }
    if (differentiatorRow7Col8 != "") {
      totalCount = totalCount + 1;
      if (differentiatorRow7Col8 == 1) {
        count = count + 1;
      }
    }
    if (differentiatorRow8Col8 != "") {
      totalCount = totalCount + 1;
      if (differentiatorRow8Col8 == 1) {
        count = count + 1;
      }
    }
  
    let percentage = ((count / totalCount) * 100).toFixed();
    
    if (percentage > 30) {
      totalVal=5;
    } 
    if (percentage < 30) {
      totalVal=-5;
    } 
  
  }

  const submitData = (event) => {
    setRedux(
      state,
      JSON.stringify({ cruxcompetitive: { ...state,count:count,total:totalVal } }),
      evaluation_id
    );
    navigate("/user/cruxalignment");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setSubmit(true);
    getJson(evaluation_id).then((res) => {
      let data = JSON.parse(res.data.data.json);
      if (data.cruxcompetitive) {
        setState({ ...data.cruxcompetitive });
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
                        onClick={(e) => {
                          submitData(e);
                        }}
                      >
                        Next
                      </Button>
                    </div>
                  </div> */}
              <div className="dimentional-title">
                <h2>CRUX - Competitive Scorecard</h2>{loader}
                <p>
                  CRUX - Competitive score informs about the product's strength
                  compared to the competition. It is a two-pass score. For the
                  first pass evaluation, use your understanding, but for a real
                  dependable score, you must undertake thorough research along
                  the lines of this scorecard.
                </p>
              </div>
              <div className="table-list cruxcompetitive-table">
                <Table striped bordered responsive>
                  <thead>
                    <tr>
                      <th></th>

                      <th colSpan={4} style={{ padding: "0px 26px" }}>
                        <div className="competitors-bg">
                          <h5>Competitors</h5>
                        </div>
                      </th>

                      <th colSpan={3}></th>
                      <th colSpan={3} style={{ padding: "0px 26px" }}>
                        <div className="competitors-bg">
                          <h5>Your Solution is</h5>
                        </div>
                      </th>
                    </tr>
                    <tr>
                      <th>Category</th>

                      <th>
                        {" "}
                        <Form.Control
                          type="text"
                          placeholder="Competitors 1 Name"
                          name={"comp1"}
                          value={state.comp1}
                          onChange={(e) => {
                            setData(e);
                          }}
                        />
                      </th>
                      <th>
                        {" "}
                        <Form.Control
                          type="text"
                          placeholder="Competitors 2 Name"
                          name={"comp2"}
                          value={state.comp2}
                          onChange={(e) => {
                            setData(e);
                          }}
                        />
                      </th>
                      <th>
                        <Form.Control
                          type="text"
                          placeholder="Competitors 3 Name"
                          name={"comp3"}
                          value={state.comp3}
                          onChange={(e) => {
                            setData(e);
                          }}
                        />
                      </th>
                      <th>
                        <Form.Control
                          type="text"
                          placeholder="Competitors 4 Name"
                          name={"comp4"}
                          value={state.comp4}
                          onChange={(e) => {
                            setData(e);
                          }}
                        />
                      </th>

                      <th>Your Solution</th>
                      <th>Game Changer</th>
                      <th>Game Changer Impact</th>
                      <th>Winner/Losser/Tie</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="different-box">
                          <h2>Differentiator 1</h2>
                          <Form.Control
                            type="text"
                            name="differentiator1"
                            placeholder="Differentiator Name"
                            value={state.differentiator1}
                            style={{ width: "200px" }}
                            onChange={(e) => {
                              setData(e);
                            }}
                          />
                        </div>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow1Col1"}
                            value={state.differentiatorRow1Col1}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow1Col2"}
                            value={state.differentiatorRow1Col2}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow1Col3"}
                            value={state.differentiatorRow1Col3}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow1Col4"}
                            value={state.differentiatorRow1Col4}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow1Col5"}
                            value={state.differentiatorRow1Col5}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow1Col6"}
                            value={state.differentiatorRow1Col6}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Control
                            name={"differentiatorRow1Col7"}
                            as="textarea"
                            value={state.differentiatorRow1Col7}
                            rows={2}
                            onChange={(e) => {
                              setData(e);
                            }}
                          />
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            className="winnerlossertie"
                            name={"differentiatorRow1Col8"}
                            value={state.differentiatorRow1Col8}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="1">Winner</option>
                            <option value="0">Losser</option>
                            <option value="2">Tie</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="different-box">
                          <h2>Differentiator 2</h2>
                          <Form.Control
                            type="text"
                            name="differentiator2"
                            placeholder="Differentiator Name"
                            value={state.differentiator2}
                            style={{ width: "200px" }}
                            onChange={(e) => {
                              setData(e);
                            }}
                          />
                        </div>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow2Col1"}
                            value={state.differentiatorRow2Col1}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow2Col2"}
                            value={state.differentiatorRow2Col2}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow2Col3"}
                            value={state.differentiatorRow2Col3}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow2Col4"}
                            value={state.differentiatorRow2Col4}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow2Col5"}
                            value={state.differentiatorRow2Col5}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow2Col6"}
                            value={state.differentiatorRow2Col6}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Control
                            name={"differentiatorRow2Col7"}
                            as="textarea"
                            value={state.differentiatorRow2Col7}
                            rows={2}
                            onChange={(e) => {
                              setData(e);
                            }}
                          />
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            className="winnerlossertie"
                            name={"differentiatorRow2Col8"}
                            value={state.differentiatorRow2Col8}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="1">Winner</option>
                            <option value="0">Losser</option>
                            <option value="2">Tie</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="different-box">
                          <h2>Differentiator 3</h2>
                          <Form.Control
                            type="text"
                            name="differentiator3"
                            placeholder="Differentiator Name"
                            value={state.differentiator3}
                            style={{ width: "200px" }}
                            onChange={(e) => {
                              setData(e);
                            }}
                          />
                        </div>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow3Col1"}
                            value={state.differentiatorRow3Col1}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow3Col2"}
                            value={state.differentiatorRow3Col2}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow3Col3"}
                            value={state.differentiatorRow3Col3}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow3Col4"}
                            value={state.differentiatorRow3Col4}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow3Col5"}
                            value={state.differentiatorRow3Col5}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow3Col6"}
                            value={state.differentiatorRow3Col6}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Control
                            name={"differentiatorRow3Col7"}
                            as="textarea"
                            value={state.differentiatorRow3Col7}
                            rows={2}
                            onChange={(e) => {
                              setData(e);
                            }}
                          />
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            className="winnerlossertie"
                            name={"differentiatorRow3Col8"}
                            value={state.differentiatorRow3Col8}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="1">Winner</option>
                            <option value="0">Losser</option>
                            <option value="2">Tie</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="different-box">
                          <h2>Differentiator 4</h2>
                          <Form.Control
                            type="text"
                            name="differentiator4"
                            placeholder="Differentiator Name"
                            value={state.differentiator4}
                            style={{ width: "200px" }}
                            onChange={(e) => {
                              setData(e);
                            }}
                          />
                        </div>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow4Col1"}
                            value={state.differentiatorRow4Col1}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow4Col2"}
                            value={state.differentiatorRow4Col2}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow4Col3"}
                            value={state.differentiatorRow4Col3}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow4Col4"}
                            value={state.differentiatorRow4Col4}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow4Col5"}
                            value={state.differentiatorRow4Col5}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow4Col6"}
                            value={state.differentiatorRow4Col6}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Control
                            name={"differentiatorRow4Col7"}
                            as="textarea"
                            value={state.differentiatorRow4Col7}
                            rows={2}
                            onChange={(e) => {
                              setData(e);
                            }}
                          />
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            className="winnerlossertie"
                            name={"differentiatorRow4Col8"}
                            value={state.differentiatorRow4Col8}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="1">Winner</option>
                            <option value="0">Losser</option>
                            <option value="2">Tie</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="different-box">
                          <h2>Differentiator 5</h2>
                          <Form.Control
                            type="text"
                            name="differentiator5"
                            placeholder="Differentiator Name"
                            value={state.differentiator5}
                            style={{ width: "200px" }}
                            onChange={(e) => {
                              setData(e);
                            }}
                          />
                        </div>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow5Col1"}
                            value={state.differentiatorRow5Col1}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow5Col2"}
                            value={state.differentiatorRow5Col2}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow5Col3"}
                            value={state.differentiatorRow5Col3}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow5Col5"}
                            value={state.differentiatorRow5Col4}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow5Col5"}
                            value={state.differentiatorRow5Col5}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow5Col6"}
                            value={state.differentiatorRow5Col6}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Control
                            name={"differentiatorRow5Col7"}
                            as="textarea"
                            value={state.differentiatorRow5Col7}
                            rows={2}
                            onChange={(e) => {
                              setData(e);
                            }}
                          />
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            className="winnerlossertie"
                            name={"differentiatorRow5Col8"}
                            value={state.differentiatorRow5Col8}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="1">Winner</option>
                            <option value="0">Losser</option>
                            <option value="2">Tie</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="different-box">
                          <h2>Differentiator 6</h2>
                          <Form.Control
                            type="text"
                            name="differentiator6"
                            placeholder="Differentiator Name"
                            value={state.differentiator6}
                            style={{ width: "200px" }}
                            onChange={(e) => {
                              setData(e);
                            }}
                          />
                        </div>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow6Col1"}
                            value={state.differentiatorRow6Col1}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow6Col2"}
                            value={state.differentiatorRow6Col2}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow6Col3"}
                            value={state.differentiatorRow6Col3}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow6Col6"}
                            value={state.differentiatorRow6Col4}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow6Col5"}
                            value={state.differentiatorRow6Col5}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow6Col6"}
                            value={state.differentiatorRow6Col6}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Control
                            name={"differentiatorRow6Col7"}
                            as="textarea"
                            value={state.differentiatorRow6Col7}
                            rows={2}
                            onChange={(e) => {
                              setData(e);
                            }}
                          />
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            className="winnerlossertie"
                            name={"differentiatorRow6Col8"}
                            value={state.differentiatorRow6Col8}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="1">Winner</option>
                            <option value="0">Losser</option>
                            <option value="2">Tie</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="different-box">
                          <h2>Differentiator 7</h2>
                          <Form.Control
                            type="text"
                            name="differentiator7"
                            placeholder="Differentiator Name"
                            value={state.differentiator7}
                            style={{ width: "200px" }}
                            onChange={(e) => {
                              setData(e);
                            }}
                          />
                        </div>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow7Col1"}
                            value={state.differentiatorRow7Col1}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow7Col2"}
                            value={state.differentiatorRow7Col2}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow7Col3"}
                            value={state.differentiatorRow7Col3}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow7Col7"}
                            value={state.differentiatorRow7Col4}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow7Col5"}
                            value={state.differentiatorRow7Col5}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow7Col6"}
                            value={state.differentiatorRow7Col6}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Control
                            name={"differentiatorRow7Col7"}
                            as="textarea"
                            value={state.differentiatorRow7Col7}
                            rows={2}
                            onChange={(e) => {
                              setData(e);
                            }}
                          />
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            className="winnerlossertie"
                            name={"differentiatorRow7Col8"}
                            value={state.differentiatorRow7Col8}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="1">Winner</option>
                            <option value="0">Losser</option>
                            <option value="2">Tie</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <div className="different-box">
                          <h2>Differentiator 8</h2>
                          <Form.Control
                            type="text"
                            name="differentiator8"
                            placeholder="Differentiator Name"
                            value={state.differentiator8}
                            style={{ width: "200px" }}
                            onChange={(e) => {
                              setData(e);
                            }}
                          />
                        </div>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow8Col1"}
                            value={state.differentiatorRow8Col1}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow8Col2"}
                            value={state.differentiatorRow8Col2}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow8Col3"}
                            value={state.differentiatorRow8Col3}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow8Col8"}
                            value={state.differentiatorRow8Col4}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow8Col5"}
                            value={state.differentiatorRow8Col5}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="L">Low</option>
                            <option value="M">Medium</option>
                            <option value="H">High</option>
                            <option value="No">Absent</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            name={"differentiatorRow8Col6"}
                            value={state.differentiatorRow8Col6}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Control
                            name={"differentiatorRow8Col7"}
                            as="textarea"
                            value={state.differentiatorRow7Col7}
                            rows={2}
                            onChange={(e) => {
                              setData(e);
                            }}
                          />
                        </Form.Group>
                      </td>
                      <td>
                        <Form.Group
                          className="form-group"
                          controlId="formGridState"
                        >
                          <Form.Select
                            className="winnerlossertie"
                            name={"differentiatorRow8Col8"}
                            value={state.differentiatorRow8Col8}
                            onChange={(e) => {
                              setData(e);
                            }}
                          >
                            <option value="">-- Select One --</option>
                            <option value="1">Winner</option>
                            <option value="0">Losser</option>
                            <option value="2">Tie</option>
                          </Form.Select>
                        </Form.Group>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={8}>
                        <div className="scrop-alignment">
                          <div className="scrop-alignment-serch">
                            <h3>Crux - Competitive Score</h3>
                            <Form.Group
                              className="form-group"
                              controlId="formGridState"
                            >
                              <Form.Control type="text" readOnly value={totalVal} />
                            </Form.Group>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tfoot>
                </Table>
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
                        onClick={(e) => {
                          submitData(e);
                        }}
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
