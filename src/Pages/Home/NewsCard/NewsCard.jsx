import moment from "moment";
import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from "react-icons/fa";
import { BsFillEyeFill } from "react-icons/bs";
import Rating from "react-rating";

const NewsCard = ({ news }) => {
  const { _id, title, image_url, details, author, total_view, rating } = news;
  return (
    <Card className=" mb-4">
      <Card.Header className="d-flex align-items-center">
        <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
        <div className="ps-2 flex-grow-1">
          <p className="mb-0">{author?.name}</p>
          <p>
            <small>{moment(author?.published_date).format("YYYY-MM-DD")}</small>
          </p>
        </div>
        <div>
          <FaRegBookmark></FaRegBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}... <br />
              <Link to={`/news/${_id}`}>Read more</Link>
            </>
          )}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex align-items-center">
        <div className="flex-grow-1">
          <Rating
            placeholderRating={rating.number}
            readonly
            emptySymbol={<FaRegStar></FaRegStar>}
            placeholderSymbol={<FaStar className="text-warning"></FaStar>}
            fullSymbol={<FaStar></FaStar>}
          />
          <span className="ms-2">{rating?.number}</span>
        </div>
        <div>
          <BsFillEyeFill className="me-2"></BsFillEyeFill>
          {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
