import Post from "./Post";
import Container from "react-bootstrap/Container";
import Footer from "./Footer";

export default function App() {
  return (
    <>
      <Container>
        <h3 className="mt-4">Stories</h3>
        <Post />
      </Container>
      <Footer styleProp="home-footer" />
    </>
  );
}
