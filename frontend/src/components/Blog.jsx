import { Card, Button } from "react-bootstrap";

function Blog(prop) {
  return (
    <Card
      style={{ width: "340px", margin: "20px" }}
      className="myDiv"
      bg="light"
    >
      <Card.Body>
        <Card.Title>{prop.blog.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {prop.blog.subtitle}
        </Card.Subtitle>
        <Card.Text>{prop.blog.summary}</Card.Text>
        <Button href={"/blogs/" + prop.blog.id} variant="dark">
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Blog;
