import React from "react";

function GameInfo({ details }) {
  const genres = details.genres;
  const platforms = details.platforms;

  return (
    <>
      <div className="genres">
        <p>Genres:
        <ul>
          {genres.map(function (gen, id) {
            return <li key={id}>{gen.name}, </li>;
          })}
        </ul>
        </p>
      </div>
      <div className="platforms">
        <p>Platforms:
        <ul>
          {platforms.map(function (pla, id) {
            return <li key={id}>{pla.platform.name}, </li>;
          })}
        </ul>
        </p>
      </div>
    </>
  );
}

export default GameInfo;
