import { Container, Col, Row, Button, Card } from "react-bootstrap";
import CA from "./CA.png";
export default function Home() {
  return (
    <>
      <Container>
        <Row>
          <Col sm={6}>
            <div
              className="container"
              style={{
                display: "grid",
                placeItems: "center",
                height: "80vh",
                textAlign: "left"
              }}
            >
              <div>
                <div
                  style={{
                    textAlign: "left",
                    marginTop: "60px"
                  }}
                >
                  <h1>
                    Confused by Taxes? Let Our Calculator Do the Work for You
                  </h1>
                  <h4 style={{ margin: "20px auto" }}>
                    Get a Free Tax Estimate in Seconds - No Obligation Required
                  </h4>
                  <Button href="/calculator" bg="dark" variant="dark">
                    <span className="h3">Calculate Now</span>
                  </Button>
                </div>
                <div
                  style={{
                    display: "inline-grid",
                    textAlign: "left",
                    marginTop: "60px"
                  }}
                >
                  <span class="h2">Features</span>

                  {[
                    "Quick and Accurate Tax Calculations",
                    "Secure and Confidential",
                    "User-Friendly Interface."
                  ].map((feature) => (
                    <div>
                      <Card style={{ margin: "10px" }} bg="light">
                        <Card.Body>
                          <Card.Title style={{ margin: "0px" }}>
                            <span className="h5">{feature}</span>
                          </Card.Title>{" "}
                        </Card.Body>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6}>
            <div
              className="container"
              style={{
                display: "grid",
                placeItems: "center",
                height: "auto",
                textAlign: "left"
              }}
            >
              <img
                src={CA}
                alt="takla CA"
                style={{ width: "400px", maxWidth: "80%", marginTop: "30px" }}
              />
              <div style={{ margin: "20px", maxWidth: "90%" }}>
                <span class="h5">
                  <span class="h3"> Welcome </span>to our website. We make
                  calculating your taxes easy and stress-free. Simply enter your
                  information, and we'll do the rest. Our website is secure and
                  user-friendly, and you'll get an estimate of your refund or
                  what you owe in just a few clicks.
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
