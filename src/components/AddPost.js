import { useRef } from "react";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export default function AddPost() {
  const userName = useRef("");
  const storyTitle = useRef("");
  const storyPost = useRef("");
  const post = useRef({});
  const navigate = useNavigate();


 async function apiPostStory (story)
 {
    try {

      const res = await fetch(
        "https://63d261e81780fd6ab9c32b95.mockapi.io/story",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(story)
        }
      );
      const data = await res.json();
      // navigating to the home page after successful response
      navigate('/');

    } catch (error) {
      console.log(error);
    }
  }
 
   
    

  function handleSubmit(e) {
    e.preventDefault();
    post.current = {
      userName: userName.current.value,
      storyTitle: storyTitle.current.value,
      storyPost: storyPost.current.value
    };

    /// posting the story into the api:
    apiPostStory (post.current);
  } 





  return (
  <>
    <div>
      <Container style={{marginTop:"56px"}}>
        <Form onSubmit={handleSubmit}>
          <Row className="justify-content-center">
            <Col className="col-xs-12 col-md-4">
              <InputGroup className="mt-5">
                <Form.Control
                  placeholder="username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  ref={userName}
                  required
                  />
              </InputGroup>
            </Col>
          </Row>
          
        <Row className="justify-content-center">
          <Col className="col-xs-12 col-md-4">
            <InputGroup className="mt-3">
              <Form.Control
                placeholder="story title"
                aria-label="title"
                aria-describedby="basic-addon2"
                ref={storyTitle}
                required
                />
            </InputGroup>
          </Col>
        </Row>
        
        <Row className="justify-content-center">
          <Col className="col-xs-12 col-md-6">
          <InputGroup className="mt-3">
            <Form.Control
              className="txt-area"
              as="textarea"
              aria-label="With textarea"
              placeholder="Write your story..."
              ref={storyPost}
              required
            />
          </InputGroup>
          </Col>
        </Row>

        <Row className="justify-content-center mt-3">
          <Col className="col-xs-12 col-md-4">
             <Button className="btn-submit" type="submit" variant="dark">Submit</Button>
          </Col>
        </Row>

        </Form>
      </Container>
      <Footer styleProp="form-footer" />
    </div>
  </>
  );
}
