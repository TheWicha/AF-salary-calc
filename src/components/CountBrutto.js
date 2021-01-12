import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const propTypes = {};

const defaultProps = {};

const CountBrutto = ({ kwota }) => {
  return <div>brutto:<span style={{marginLeft: '20px', fontWeight:'800'}}>{kwota}  zł</span></div>;
};

CountBrutto.propTypes = propTypes;
CountBrutto.defaultProps = defaultProps;

export default CountBrutto;
