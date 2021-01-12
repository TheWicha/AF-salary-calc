import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const propTypes = {};

const defaultProps = {};

const CountNetto = ({ kwota }) => {
  return (
    <div>
      netto (na ręke): <span style={{marginLeft: '20px', fontWeight:'800'}}>{kwota}  zł</span>
    </div>
  );
};

CountNetto.propTypes = propTypes;
CountNetto.defaultProps = defaultProps;

export default CountNetto;
