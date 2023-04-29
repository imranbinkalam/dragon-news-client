import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Button, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Container className="mt-4">
      <div className="text-center">
        <img src={logo} alt="" />
        <p>
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex mb-4">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger" speed={80}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. I can be a
          React component, multiple React components, or just some text....
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;
