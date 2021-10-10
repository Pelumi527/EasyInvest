import React from 'react'
import styled from "styled-components";

function NewsLetterComp() {
    return (
        <>
        <NewsLetter>
        <Container>
          <Row>
            <ColumnTwo>
              <NewsMainText>
                <h1>Subscribe Now to</h1>
                <h1>Get Special Updates!</h1>
                <h3>suscribe with us and find the fun</h3>
              </NewsMainText>
            </ColumnTwo>
            <ColumnTwo>
              <InputField>
                <input type="email" placeholder="Email Address"></input>
                <SubscribeButton>Suscribe Now</SubscribeButton>
              </InputField>
            </ColumnTwo>
          </Row>
        </Container>
      </NewsLetter>
      
        </>
    )
}

export default NewsLetterComp


const NewsLetter = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  border:1px solid;
  max-width:60rem;
  margin:auto ;
  transform:translateY(7rem);
`;

const Container = styled.div``;
const Row = styled.div`
  display: flex;
`;


const NewsMainText = styled.div`
  h1 {
    color: #0b132a;
    font-size: 35px;
    font-weight: 500;
  }

  h3 {
    color: #4f5665;
    font-weight: 400;
    font-size: 16px;
  }
`;
const ColumnTwo = styled.h1``;
const InputField = styled.div`
  display: flex;
  margin: 2rem;
  font-size: 20px;
  padding-left: 2rem;
  input {
      color:white;
      font-size:0.9rem;
      font-weight:bold;
    padding:0.9rem;
    border:0;
    outline:none;
    background-color: #dde0e4;
    box-shadow: 0px 4px 13px -8px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }
input:placeholder {
    color:white;
}
`;

const SubscribeButton = styled.div`
  background-color: #f53838;
  color: white;
  font-size: 16px;
  padding: 0.8rem;
  border-radius: 5px;
  margin-left: 1rem;
  transition: all 0.2s ease-in;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;
