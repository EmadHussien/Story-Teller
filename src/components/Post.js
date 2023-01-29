import { useEffect,useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export default function Post() {

  const [stories,setStories] = useState([]);

  async function getCurrentStories() {
    try {
      const response = await fetch(
        "https://63d261e81780fd6ab9c32b95.mockapi.io/story"
      );

      // Storing data in form of JSON
      let data = await response.json();
      // Storing data in form of state to rerender the component
      setStories(data);
    } catch (e) {
      console.log(e);
    }
  }


  useEffect(()=>{

      getCurrentStories();

  },[])

  const posts = stories;
  const Post = posts.map((post) => {
    return (
      <Container style={{ marginTop: "30px", marginBottom: "30px" }} key={post.storyPost}>
        <Card border="light">
          <Card.Header>
            <span className="author">{post.userName}</span>
          </Card.Header>
          <Card.Body>
            <Card.Title>{post.storyTitle}</Card.Title>
            <Card.Text>{post.storyPost}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    );
  }).reverse();



  return (
    <>
    {
      posts.length > 0 ? 
        Post : 

        <div style={{height:"76vh"}} className="d-flex justify-content-center align-items-center">
          <div className="spinner-border text-dark" role="status"></div>
        </div>
    }
    </>);
}
