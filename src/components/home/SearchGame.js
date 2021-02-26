import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

function SearchGame({ handleSearch }) {
  return (
    <Form inline>
      <FormControl
        type="text"
        placeholder="Search Game..."
        className="w-75 mb-4 game__search"
        onChange={(e) => handleSearch(e)}
      />
    </Form>
  );
}

SearchGame.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default SearchGame;
