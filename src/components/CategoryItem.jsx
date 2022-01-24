import styled from "styled-components";
import { mobile } from "../responsive";
import { useNavigate } from "react-router-dom";
import React, { Component } from 'react';
import ServicesService from "../services/ServicesService";
import ServicesComponent from "./ServicesComponent";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";
import { browserHistory } from "react-router-dom";
import { useHistory } from "react-router-dom";


const Inf = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
;

const Info = styled.div`
  opacity: 0; 
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;


const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 100vh;
  margin-top: -10px;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;


const Image = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}

`;


const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border:none;
    padding: 10px;
    margin-bottom: 0px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`;
  


const CategoryItem = ({ item }) => {
const navigate = useHistory();
const redirectLink = (categoryname) => {
  // const navigate = useNavigate();
  navigate.push(`/view-categories/${categoryname}`)
}
  return (
    <Container>
      <Image src={item.img} />
      <Inf>
      <Title>{item.title}</Title>
      </Inf>
      <Info>
      <Button type="button"
       onClick={(e) => {
       redirectLink(item.title)
      }}>  SHOP NOW</Button>
     
      </Info>
    </Container>
  );
};

export default CategoryItem;
/*`http://localhost:9003/services/category/${item.title}`*/

/*button type="button"
       onClick={(e) => {
       e.preventDefault();
       window.location.href='http://localhost:9003/services/allservices';
      }}
>  SHOP NOW</button>*/