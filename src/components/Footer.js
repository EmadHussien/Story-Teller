import Container from "react-bootstrap/Container";
import { FaLinkedin,FaGithub ,FaPhoneAlt,FaEnvelope} from 'react-icons/fa';
import { Col, Row } from "react-bootstrap";

export default function Footer({ styleProp }) {
  
  const className = styleProp + " bg-dark d-flex align-items-center flex-column p-2";

  return (
    <Container fluid className={className}>
      <Row className="f-row justify-content-center">
        <Col className="col-xs-12 col-sm-6">
          <ul className="icons-container">
            <li>
              <a href="https://www.linkedin.com/in/emadhussien98" target={"_blank"}><span><FaLinkedin/></span></a>
            </li>
            <li>
              <a href="https://github.com/EmadHussien" target={"_blank"}><span ><FaGithub /></span></a>
            </li>
            <li>
              <a href="tel:0111-644-6214" target={"_blank"}><span ><FaPhoneAlt /></span></a>
            </li>
            <li>
              <a href="mailto:emadhussien.fcis@gmail.com" target={"_blank"}><span ><FaEnvelope /></span></a>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <span className="copyright">© 2023 Emad Hussien</span>
      </Row>

    </Container>
  );
}
