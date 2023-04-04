import React from "react";
import { Card, Form, Button } from "react-bootstrap";

function LoginForm() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Card bg="light" variant="light" style={{ margin: "20vh 10px" }}>
        <Card.Title as="h3" style={{ marginTop: "20px" }}>
          Login
        </Card.Title>
        <Form style={{ margin: "10px 20px" }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit" style={{ marginTop: "15px" }}>
            Sign in
          </Button>

          <hr />

          <Button variant="secondary" style={{ margin: "5px 15px" }}>
            Sign in as guest
          </Button>

          <Button variant="outline-danger" style={{ margin: "5px 15px" }}>
            Sign in with Google
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default LoginForm;
