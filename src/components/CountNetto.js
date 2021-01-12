import React from "react";


const propTypes = {};

const defaultProps = {};

const CountNetto = ({ kwota, wpis }) => {
  return (
    <div>
      brutto: <span style={{marginLeft: '20px', fontWeight:'800'}}>{wpis}  zł</span>
      <br />
      netto (na ręke): <span style={{marginLeft: '20px', fontWeight:'800'}}>{kwota}  zł</span>
    </div>
  );
};

CountNetto.propTypes = propTypes;
CountNetto.defaultProps = defaultProps;

export default CountNetto;
