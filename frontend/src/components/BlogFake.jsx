import { Card, Button, Placeholder } from "react-bootstrap";

function BlogFake() {
  return (
    <Card
      style={{ width: "340px", margin: "20px" }}
      className="myDiv"
      bg="light"
    >
      <Card.Body>
        <Placeholder as={Card.Title} animation="glow"/>
        <Placeholder as={Card.Subtitle} animation="glow"/>
        <Placeholder as={Card.Text} animation="glow">
        <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
            <Placeholder xs={6} /> <Placeholder xs={8} />
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={4} /> <Placeholder xs={3} />
        </Placeholder>
        <Placeholder as={Card.Button} animation="glow"/>
      </Card.Body>
    </Card>
  );
}

export default BlogFake;
