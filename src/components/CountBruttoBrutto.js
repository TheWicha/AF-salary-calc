import React from "react";


const CountBruttoBrutto = ({ kwota, salaryType }) => {
  return (
    <div>
     Koszt pracodawcy: <span style={{marginLeft: '20px', fontWeight:'800'}}>{kwota}  zł</span>
    </div>
  );
};

export default CountBruttoBrutto;
