import React, { useState } from "react";
import { Tabs, Tab, Form, Container } from "react-bootstrap";

export default function CalcMain() {
  const [state, setState] = useState({
    name: "",
    email: "",
    age: "",
    favoriteColor: "",
    favoriteFood: "",
    favoriteMovie: "",
    occupation: "",
    grossAnnualIncome: 0,
    interestIncome: 0,
    rentalIncome: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <Container>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <Form onSubmit={handleSubmit}>
          <Tabs
            defaultActiveKey="tab1"
            id="fill-tab-example"
            className="mb-3"
            fill
          >
            <Tab eventKey="tab1" title="Income Details">
              <div
                className="tab-wrapper"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "auto",
                  width: "36rem",
                  textAlign: "left"
                }}
              >
                <Form.Group
                  controlId="grossAnnualIncome"
                  style={{ width: "36rem" }}
                >
                  <Form.Label>Gross Annual Income</Form.Label>
                  <Form.Control
                    type="number"
                    name="grossAnnualIncome"
                    value={state.grossAnnualIncome}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="email" style={{ width: "36rem" }}>
                  <Form.Label>
                    Income from interest on Savings Account
                  </Form.Label>
                  <Form.Control
                    type="number"
                    name="interestIncome"
                    value={state.interestIncome}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="age" style={{ width: "36rem" }}>
                  <Form.Label>Income from rent</Form.Label>
                  <Form.Control
                    type="number"
                    name="rentalIncome"
                    value={state.rentalIncome}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
            </Tab>

            <Tab eventKey="tab2" title="Deduction Details">
              <div
                className="tab-wrapper"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "auto",
                  width: "36rem",
                  textAlign: "left"
                }}
              >
                <Form.Group controlId="favoriteColor">
                  <Form.Label>Favorite Color</Form.Label>
                  <Form.Control
                    type="text"
                    name="favoriteColor"
                    value={state.favoriteColor}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="favoriteFood">
                  <Form.Label>Favorite Food</Form.Label>
                  <Form.Control
                    type="text"
                    name="favoriteFood"
                    value={state.favoriteFood}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Form.Group controlId="favoriteMovie">
                  <Form.Label>Favorite Movie</Form.Label>
                  <Form.Control
                    type="text"
                    name="favoriteMovie"
                    value={state.favoriteMovie}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
            </Tab>
            <Tab eventKey="tab3" title="Investment Earnings">
              <div
                className="tab-wrapper"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "auto",
                  width: "36rem",
                  textAlign: "left"
                }}
              >
                <Form.Group controlId="Occupation">
                  <Form.Label>Occupation</Form.Label>
                  <Form.Control
                    type="text"
                    name="occupation"
                    value={state.occupation}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
            </Tab>
            <Tab eventKey="tab4" title="Summary">
              <div
                className="tab-wrapper"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "auto",
                  width: "36rem",
                  textAlign: "left"
                }}
              >
                <Form.Group controlId="Summary">
                  <Form.Label>Occupation</Form.Label>
                  <Form.Control
                    type="text"
                    name="occupation"
                    value={state.occupation}
                    onChange={handleChange}
                  />
                </Form.Group>
              </div>
            </Tab>
          </Tabs>
        </Form>
      </div>
    </Container>
  );
}
