import React from "react";
import styled from "styled-components";
import logo from "../images/grupaaflogo70.png";

const Navbar = () => {
  return (
    <StyledNav>
      <StyledImg src={logo} alt="company logo" />
      <Title>Kalkulator wynagrodzeń</Title>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
margin: 0 auto;
justify-content: center;
align-items: center;
max-width: 900px;
  width: 100%;
  color: white;
  display: flex;
`;

const StyledImg = styled.img`
  margin-top: 20px;
  margin-left: 20px;
`;

const Title = styled.h1`
  color: #585857;
  font-size: 33px;
  margin-left: 40px;

`;

export default Navbar;
