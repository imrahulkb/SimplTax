import React, { useState } from 'react';
import { doc, setDoc } from "firebase/firestore"; 
import db from "../firebase.js";
import { Form, Button, Card } from 'react-bootstrap';
function MyComponent() {
  function addDetail()
  {
    setDetails((detail)=>[...detail,oneDet]);
  }
   async function addBlog(blog)
   {
    await setDoc(doc(db, "Blogs", blog.id), blog);
   }
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [summary, setSummary] = useState('');
  const [detail, setDetails] = useState([]);
  const [oneDet,setOneDet] = useState('');
  const [password, setpassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // create a JSON object from the form data
    const formData = {
      id: id,
      title: title,
      subtitle: subtitle,
      summary: summary,
      detail: detail,
      password: password,
    };

    // do something with the form data, like send it to a server
    console.log(formData);
    addBlog(formData);
    
  };

  return (
    <Form onSubmit={handleSubmit} className="mx-auto" style={{ display: 'flex', flexDirection: 'column', maxWidth: '800px', justifySelf: 'center' }}>
    <Form.Group controlId="password">
      <Form.Label>Password:</Form.Label>
      <Form.Control type="text" value={password} onChange={(e) => setpassword(e.target.value)} />
    </Form.Group>

    <Form.Group controlId="id">
      <Form.Label>ID:</Form.Label>
      <Form.Control type="text" value={id} onChange={(e) => setId(e.target.value)} />
    </Form.Group>

    <Form.Group controlId="title">
      <Form.Label>Title:</Form.Label>
      <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
    </Form.Group>

    <Form.Group controlId="subtitle">
      <Form.Label>Subtitle:</Form.Label>
      <Form.Control type="text" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
    </Form.Group>

    <Form.Group controlId="summary">
      <Form.Label>Summary:</Form.Label>
      <Form.Control type="text" value={summary} onChange={(e) => setSummary(e.target.value)} />
    </Form.Group>

    <Form.Group controlId="detail">
      <Form.Label>Details:</Form.Label>
      <Form.Control as="textarea" value={oneDet} onChange={(e) => setOneDet(e.target.value)} />
    </Form.Group>
    <div>
    <Button onClick={addDetail}>Add Details</Button>
    <div style={{display: "flex",}}> {detail.map((det) => (<Card style={{margin : "5px", padding: "2px"}}>{det}</Card>))}</div>
   

    <Button variant="primary" type="submit">Submit</Button>
    </div>
    
  </Form>
  );
}

export default MyComponent;
