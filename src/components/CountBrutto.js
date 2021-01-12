import React from "react";


const propTypes = {};

const defaultProps = {};

const CountBrutto = ({ kwota, wpis }) => {
  return (
    <div>
      netto: <span style={{ marginLeft: "20px", fontWeight: "800" }}>{wpis} zł</span>
      <br />
      brutto:<span style={{ marginLeft: "20px", fontWeight: "800" }}>{kwota} zł</span>
    </div>
  );
};

CountBrutto.propTypes = propTypes;
CountBrutto.defaultProps = defaultProps;

export default CountBrutto;
