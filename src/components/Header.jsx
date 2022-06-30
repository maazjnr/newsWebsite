import React from "react";
import styled from "styled-components";
import Categories from "./Categories";

const Header = () => {
  return (
    <div>
      <MzGlog>MZBLOGNEWS</MzGlog>
      <Categories />
    </div>
  );
};

export default Header;

const MzGlog = styled.h1`
  text-align: center;
  color: #40675a;
  font-size: 20px;
  padding: 20px 10px;
`;
