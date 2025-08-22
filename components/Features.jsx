import { IoIosArrowRoundForward } from "react-icons/io";
import { FaShieldAlt, FaHeadset } from "react-icons/fa";
import { FaSliders } from "react-icons/fa6";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";

const Features = () => {
  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Secure",
      subtitle: "We strictly only deal with vendors that provide top notch security.",
      link: "#",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      subtitle: "Lorem ipsum donor amet siti ceali placeholder text",
      link: "#",
    },
    {
      icon: <FaSliders />,
      title: "Customizable",
      subtitle: "Lorem ipsum donor amet siti ceali placeholder text",
      link: "#",
    },
  ];

  return (
    <section className="features-section">
      <Container>
        <Row>
          {features.map((item, index) => (
            <Col key={index}>
              <div className="icon">{item.icon}</div>
              <h3 className="title">{item.title}</h3>
              <p className="subtitle">{item.subtitle}</p>
              <Link href={item.link}>
                Learn More <IoIosArrowRoundForward />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
