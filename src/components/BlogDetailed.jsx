import { Card, Button } from "react-bootstrap";

export default function BlogDetailed(props) {
  const blog = props.blog;
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card style={{ maxWidth: "700px", margin: "10px 10px" }}>
        <Card.Body>
          <Button variant="dark" href="/blogs">
            Back to Blogs Page
          </Button>
          <Card.Title as="h4" style={{ marginTop: "15px" }}>
            {blog.name}
          </Card.Title>
          {blog.detail &&
            blog.detail.map((thing) => (
              <Card.Text style={{ textAlign: "justify" }}>{thing}</Card.Text>
            ))}
          <Button variant="dark" href="/blogs">
            Back to Blogs Page
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
