import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGithub,
  FaGoogle,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <h4 className="my-2">Login With</h4>
      <Button className="mb-2" variant="outline-primary">
        <FaGoogle /> Login With Google
      </Button>
      <Button variant="outline-secondary">
        <FaGithub /> Login With Git hub
      </Button>
      <div>
        <h4 className="my-2">Find us on</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook className="text-primary" /> facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter className="text-info" /> twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram className="text-danger" /> instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div>
        <img className="w-100 rounded-2 mt-2" src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
