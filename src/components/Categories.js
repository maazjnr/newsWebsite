import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const Categories = () => {
  return (
    <Category>
      <Container>
        <Row>
          <CategoryItem>
            <Col lg={2} md={2} sm={2}>
              <StyleLink to="/entertainment">
                <CategoryList>Entertainment</CategoryList>
              </StyleLink>
            </Col>

            <Col lg={2} md={2} sm={2}>
              <StyleLink to="/sport">
                <CategoryList>Sport</CategoryList>
              </StyleLink>
            </Col>

            <Col lg={2} md={2} sm={2}>
              <StyleLink to="/health">
                <CategoryList>Health</CategoryList>
              </StyleLink>
            </Col>

            <Col lg={2} md={2} sm={2}>
              <StyleLink to="/business">
                <CategoryList>Business</CategoryList>
              </StyleLink>
            </Col>

            <Col lg={2} md={2} sm={2}>
              <StyleLink to="/science">
                <CategoryList>Science</CategoryList>
              </StyleLink>
            </Col>

            <Col lg={2} md={2} sm={4}>
              <StyleLink to="technology">
                <CategoryList>Technology</CategoryList>
              </StyleLink>
            </Col>
            
          </CategoryItem>
        </Row>
      </Container>
    </Category>
  );
};

export default Categories;

const Category = styled.div`
  display: flex;
  justify-content: center;
`;
const CategoryItem = styled.div`
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 560px) {
    display: block;
  }
`;

const StyleLink = styled(Link)`
  text-decoration: none;
  color: #8db0a5;
  text-align: center;
`;

const CategoryList = styled.h6`
  border: 1px solid #8db0a5;
  padding: 10px 20px;
  background:  #40675a;
  transition: 1s;
  &:hover {
    background: transparent;
    color: white;
  }
`;
