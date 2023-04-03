import React, { useState } from "react";
import { Tabs, Tab, Form, Container, Button } from "react-bootstrap";

export default function CalcMain() {
   const [activeTab, setActiveTab] = useState(0);
  const [state, setState] = useState({
    grossAnnualIncome: 10,
    interestIncome: 0,
    rentalIncome: 0,
    grossAnnualIncome: 0,
    interestIncome: 0,
    otherIncome: 0,
    rentalIncome: 0,
    disabilityPercentage: 0,
    mutualFundInvest: 0,
    ppfInvest: 0,
    nscInvest: 0,
    healthInsurance: 0,
    married: "N0",
    donations: 0,
    lipPay: 0,
    homeLoanRepay: 0,
    educationLoan: 0,
    grossBusinessIncome: 0,
    tutionFee: 0
  });

  const handleNext = () => {
    setActiveTab(activeTab + 1);
  };

  const handlePrev = () => {
    setActiveTab(activeTab - 1);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <Container style={{marginTop : "20px"}}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <Form onSubmit={handleSubmit}>
      <Tabs
        activeKey={activeTab}
        onSelect={(index) => setActiveTab(index)}
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey={0} title="Income Details" >
        <div className="innerTab">
      <div className="quesCover">
       <Form.Group controlId="grossAnnualIncome" className="field">
          <Form.Label>Gross Annual Income</Form.Label>
            <Form.Control
              type="number"
              name="grossAnnualIncome"
              value={state.grossAnnualIncome}
              onChange={handleChange}  
            />
        </Form.Group>
        <Form.Group controlId="grossBusinessIncome" className="field">
          <Form.Label>Gross Business Income</Form.Label>
            <Form.Control
              type="number"
              name="grossBusinessIncome"
              value={state.grossBusinessIncome}
              onChange={handleChange}  
            />
        </Form.Group>
        <Form.Group controlId="interestIncome" className="field">
          <Form.Label> Income from interest on Savings Account </Form.Label>
          <Form.Control
            type="number"
            name="interestIncome"
            value={state.interestIncome}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="otherIncome" className="field">
          <Form.Label> Income from other sources </Form.Label>
          <Form.Control
            type="number"
            name="otherIncome"
            value={state.otherIncome}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="rentalIncome" className="field">
          <Form.Label> Income earned from Rent </Form.Label>
          <Form.Control
            type="number"
            name="rentalIncome"
            value={state.rentalIncome}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="disabilityPercentage" className="field">
          <Form.Label>Are you a disabled person? If yes provide disabilty percentage</Form.Label>
          <Form.Control
            type="number"
            name="disabilityPercentage"
            value={state.disabilityPercentage}
            onChange={handleChange}
          />
        </Form.Group>
        </div>
        
        <div>
          <Button
            variant="primary"
            onClick={handleNext}
            disabled={activeTab === 3}
          >
            Next
          </Button>
        </div>
          
          </div>
        </Tab>

        <Tab eventKey={1} title="Investment Details" >
        <div className="innerTab">
      <div className="quesCover">
       <Form.Group controlId="mutualFundsInvest" className="field">
          <Form.Label> Investment in tax-saving mutual funds (ELSS) </Form.Label>
          <Form.Control
            type="number"
            name="mutualFundInvest"
            value={state.mutualFundInvest}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="ppfInvest" className="field">
          <Form.Label> Investment in Public Provident Fund (PPF) </Form.Label>
          <Form.Control
            type="number"
            name="ppfInvest"
            value={state.ppfInvest}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="nscInvest" className="field">
          <Form.Label> Investment in National Savings Certificate (NSC)</Form.Label>
          <Form.Control
            type="number"
            name="nscInvest"
            value={state.nscInvest}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="healthInsurance" className="field">
          <Form.Label>Health Insurance Amount (If any)</Form.Label>
          <Form.Control
            type="number"
            name="healthInsurance"
            value={state.healthInsurance}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="married" className="field">
        <Form.Label>Are you or (if married) your spouse a senior citizen? {"(age > 59 )"}</Form.Label>
          <Form.Control
            as="select"
            name="married"
            value={state.married}
            onChange={handleChange}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="donations" className="field">
          <Form.Label>Donations that can be deduced as per <a href="./blogs/80G">Section 80G</a></Form.Label>
          <Form.Control
            type="number"
            name="donations"
            value={state.donations}
            onChange={handleChange}
          />
        </Form.Group>
        </div>
      </div>
        
        <div>
          <Button variant="secondary" onClick={handlePrev}>
            Previous
          </Button>{" "}
          <Button
            variant="primary"
            onClick={handleNext}
            disabled={activeTab === 3}
          >
            Next
          </Button>
        </div>
     </Tab>

        <Tab eventKey={2} title="Expenditures">
        <div className="innerTab">
      <div className="quesCover">
      <Form.Group controlId="lipPay" className="field">
          <Form.Label>Payment of Life Insurance Premium(LIP) </Form.Label>
          <Form.Control
            type="number"
            name="lipPay"
            value={state.lipPay}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="tutionFee" className="field">
          <Form.Label> Payment of tuition fees for children's education</Form.Label>
          <Form.Control
            type="number"
            name="tutionFee"
            value={state.tutionFee}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="homeLoanRepay" className="field">
          <Form.Label>Repayment of principal amount of home loan</Form.Label>
          <Form.Control
            type="number"
            name="homeLoanRepay"
            value={state.homeLoanRepay}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="educationLoan" className="field">
          <Form.Label>Provide the interest paid on education Loan(higher studies)(if any)</Form.Label>
          <Form.Control
            type="number"
            name="educationLoan"
            value={state.educationLoan}
            onChange={handleChange}
          />
        </Form.Group>
        </div>
      </div>
        
        <div>
          <Button variant="secondary" onClick={handlePrev}>
            Previous
          </Button>{" "}
          <Button
            variant="primary"
            onClick={handleNext}
            disabled={activeTab === 3}
          >
            Next
          </Button>
        </div>
        </Tab>

        <Tab eventKey={3} title="Summary">
          {/* your Summary form fields */}
          <Button variant="secondary" onClick={handlePrev}>
            Previous
          </Button>{" "}
          <Button variant="primary" type="submit" onClick={console.log(state)}>
            Submit
          </Button>
            </Tab>
          </Tabs>
        </Form>
      </div>
    </Container>
  );
}
