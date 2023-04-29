import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInside from "./EditorsInside";

const News = () => {
  const news = useLoaderData();
  console.log(news);
  const { _id, title, image_url, details, category_id } = news;
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="danger">
              <FaArrowCircleLeft></FaArrowCircleLeft> All News in this category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <EditorsInside></EditorsInside>
    </div>
  );
};

export default News;
