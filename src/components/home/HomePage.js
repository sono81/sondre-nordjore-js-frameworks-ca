import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/api";
import GameItems from "./GameItems";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SearchGame from "./SearchGame";

function HomePage() {
  const [games, setGames] = useState([]);
  const [gameFilter, setGameFilter] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((json) => {
        setGames(json.results);
        setGameFilter(json.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const filterGames = function (event) {
    const searchLowercase = event.target.value.toLowerCase();

    const filterArray = games.filter(function (gam) {
      const lowercaseName = gam.name.toLowerCase();
      if (lowercaseName.includes(searchLowercase)) {
        return true;
      }
      return false;
    });

    setGameFilter(filterArray);
  };

  return (
    <>
      <Container>
        <SearchGame handleSearch={filterGames} />
        <Row>
          {gameFilter.map((game) => {
            const { name, background_image, rating, released, id } = game;

            return (
              <React.Fragment key={id}>
                <GameItems
                  name={name}
                  background_image={background_image}
                  rating={rating}
                  released={released}
                  id={id}
                />
              </React.Fragment>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
