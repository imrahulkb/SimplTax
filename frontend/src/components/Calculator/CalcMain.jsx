import React, { useState } from "react";
import { Tabs, Tab, Form, Container, Button,Card } from "react-bootstrap";
import { ListGroup,Table } from "react-bootstrap";

export default function CalcMain() {
  const [summary,setSummary] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [summTable,setSummtable] = useState({
    total_80C_deduction : 0,
    total_80D_deduction : 0,
    total_80E_deduction : 0,
    total_80G_deduction : 0,
    grossTotalIncome: 0,
    total_deductions: 0,
    taxamount: 0,
  })
  const [state, setState] = useState({
    grossAnnualIncome: 10,
    interestIncome: 0,
    rentalIncome: 0,
    otherIncome: 0,
    disabilityPercentage: 0,
    mutualFundInvest: 0,
    ppfInvest: 0,
    nscInvest: 0,
    healthInsurance: 0,
    marital_status: "NO",
    donations: 0,
    lipPay: 0,
    homeLoanRepay: 0,
    educationLoan: 0,
    grossBusinessIncome: 0,
    tuitionFee: 0
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
 
  function calculateTax() {
    const url = "https://32d5uh-8080.csb.app/calculate";
    const requestBody = state;
    
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setSummary([...data.summary_80C,...data.summary_80D,...data.summary_80E,...data.summary_80G])
      setSummtable({total_80C_deduction : data.total_80C_deduction,
        total_80D_deduction : data.total_80D_deduction,
        total_80E_deduction : data.total_80E_deduction,
        total_80G_deduction : data.total_80G_deduction,
      total_deductions: data.total_deductions,
    grossTotalIncome: data.grossTotalIncome,
    taxamount: data.taxamount,
    taxpercent: data.taxpercent,
  })
        console.log(summTable);
    }
    
    )
    .catch(error => {
      console.error("Error calculating taxable income: ", error);
    });
  }
  
  return (
    <Container style={{ marginTop: "20px" }}>
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
            <Tab eventKey={0} title="Income Details">
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
                    <Form.Label>
                      {" "}
                      Income from interest on Savings Account{" "}
                    </Form.Label>
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
                  <Form.Group
                    controlId="disabilityPercentage"
                    className="field"
                  >
                    <Form.Label>
                      Are you a disabled person? If yes provide disabilty
                      percentage
                    </Form.Label>
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

            <Tab eventKey={1} title="Investment Details">
              <div className="innerTab">
                <div className="quesCover">
                  <Form.Group controlId="mutualFundsInvest" className="field">
                    <Form.Label>
                      {" "}
                      Investment in tax-saving mutual funds (ELSS){" "}
                    </Form.Label>
                    <Form.Control
                      type="number"
                      name="mutualFundInvest"
                      value={state.mutualFundInvest}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="ppfInvest" className="field">
                    <Form.Label>
                      {" "}
                      Investment in Public Provident Fund (PPF){" "}
                    </Form.Label>
                    <Form.Control
                      type="number"
                      name="ppfInvest"
                      value={state.ppfInvest}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="nscInvest" className="field">
                    <Form.Label>
                      {" "}
                      Investment in National Savings Certificate (NSC)
                    </Form.Label>
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
                  <Form.Group controlId="marital_status" className="field">
                    <Form.Label>
                      Are you or (if marital_status) your spouse a senior citizen?{" "}
                      {"(age > 59 )"}
                    </Form.Label>
                    <Form.Control
                      as="select"
                      name="marital_status"
                      value={state.marital_status}
                      onChange={handleChange}
                    >
                      <option value="no">No</option>
                      <option value="yes">Yes</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId="healthInsurance" className="field">
                    <Form.Label>Donations that can be deduced as per{" "}
                      <a href="./blogs/80G">Section 80G</a></Form.Label>
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
              <div className="innerTab"  >
                <div className="quesCover">
                  <Form.Group controlId="lipPay" className="field">
                    <Form.Label>
                      Payment of Life Insurance Premium(LIP){" "}
                    </Form.Label>
                    <Form.Control
                      type="number"
                      name="lipPay"
                      value={state.lipPay}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="tuitionFee" className="field">
                    <Form.Label>
                      {" "}
                      Payment of tuition fees for children's education
                    </Form.Label>
                    <Form.Control
                      type="number"
                      name="tuitionFee"
                      value={state.tuitionFee}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="homeLoanRepay" className="field">
                    <Form.Label>
                      Repayment of principal amount of home loan
                    </Form.Label>
                    <Form.Control
                      type="number"
                      name="homeLoanRepay"
                      value={state.homeLoanRepay}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="educationLoan" className="field">
                    <Form.Label>
                      Provide the interest paid on education Loan(higher
                      studies)(if any)
                    </Form.Label>
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
            <div className="innerTab">
              <div className="quesCover">
                {
                  (summary.length ===0)?
                    (<Card style={{maxWidth : "600px"}}>
                    <Card.Header>
                      Summary
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>Your summary will appear here</Card.Text>
                    </Card.Body>
                    </Card>):(<Card style={{maxWidth : "600px"}}>
                      <Card.Header>
                      Summary
                    </Card.Header>
                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Amount Type</th>
                          <th>Amount in Rs.</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>80C Deductions</td>
                          <td>{summTable.total_80C_deduction}</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>80D Deductions</td>
                          <td>{summTable.total_80D_deduction}</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>80E Deductions</td>
                          <td>{summTable.total_80E_deduction}</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>80G Deductions</td>
                          <td>{summTable.total_80G_deduction}</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Total Income = (Gross Income + Business Income + Rent + Interest)</td>
                          <td>{summTable.grossTotalIncome}</td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>Total Deductions = (80C + 80D + 80E + 80G Deductions)</td>
                          <td>{summTable.total_deductions}</td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>Taxable Income = (Total Income - Total Deductions)</td>
                          <td>{summTable.grossTotalIncome - summTable.total_deductions}</td>
                        </tr>
                        <tr>
                          <th>X</th>
                          <th>Final Tax is {summTable.taxpercent}% of taxable income as per tax slabs</th>
                          <th>{summTable.taxamount}</th>
                        </tr>

                        
                      </tbody>
                    </Table>
                    <ListGroup variant="flush">
                     { summary.map((line)=>(
                      <ListGroup.Item key={line}>{line}</ListGroup.Item>
                    ))}</ListGroup>

                    
                    </Card>
                    )
                  }
                  
              </div>
              </div>
              <div style={{margin : "20px"}}>
              <Button variant="secondary" onClick={handlePrev}>
                Previous
              </Button>{" "}
              <Button
                variant="primary"
                type="submit"
                onClick={calculateTax}
              >
                Submit
              </Button>
              </div>
              
            </Tab>
          </Tabs>
        </Form>
      </div>
    </Container>
  );
}
