import { Col,Image } from "react-bootstrap";
const LogoImage = () => {
  return (
    <Col md={2}>
      <Image src="images/logo-image.png" alt="" className="logo-image" />
    </Col>
  );
};

export default LogoImage;