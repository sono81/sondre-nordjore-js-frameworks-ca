import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/api";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import GameInfo from "../information/GameInfo";

function GameDetails() {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  let { id } = useParams();

  const url = BASE_URL + "/" + id;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setDetails(json)
        console.log(json)
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [url]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Row>
        <Col xs={6}>
          <Image src={details.background_image} fluid />
        </Col>
        <Col xs={6} className="game-details">
          <GameInfo details={details} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>{details.name}</h1>
          <p>{details.description_raw}</p>
          <a href={details.website} target="blank">
            Official Site
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default GameDetails;
