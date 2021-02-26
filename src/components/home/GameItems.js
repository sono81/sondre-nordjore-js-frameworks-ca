import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function GameItems({ name, background_image, rating, released, id }) {
  return (
    <Col sm={6} lg={4}>
      <Card className="mb-5">
        <Card.Img
          variant="top"
          src={background_image}
          className="game__card--img"
          //Look in report for why I used inline style here
          style={{ height: "200px", width: "100%", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p>Release Date: {released}</p>
            <p>Rating: {rating}</p>
          </Card.Text>
          <Link to={"games/" + id}>
            <Button variant="primary">Details...</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

GameItems.propTypes = {
  name: PropTypes.string.isRequired,
  background_image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  released: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default GameItems;
