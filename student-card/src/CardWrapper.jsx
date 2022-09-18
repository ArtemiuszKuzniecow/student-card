import React from "react";
import PropTypes from "prop-types";

const CardWrapper = ({ children }) => {
  return (
    <div className="App">
      <h1>Карточка студента</h1>
      <hr />
      {children}
    </div>
  );
};

CardWrapper.propTypes = {
  children: PropTypes.node,
};

export default CardWrapper;
