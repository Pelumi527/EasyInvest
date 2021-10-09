import React from "react";
import styled from "styled-components";
import Spiral from "./assets/spiral.svg";

function Home() {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <HeroMainText>
              <h1>WebX Streaming</h1>
              <h1>Platform</h1>
            </HeroMainText>
            <HeroSubText>
              <h3>We Provide Many </h3>
              <h3>You Can Use</h3>
            </HeroSubText>
            <Button>Get Started</Button>
          </Column>
          <Column>
            <Image>
              <img src={Spiral} className="" />
            </Image>
          </Column>
        </Row>
      </Container>

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
    </Box>
  );
}

export default Home;
const Box = styled.div``;

const Container = styled.div``;
const Row = styled.div`
  display: flex;
`;

const HeroMainText = styled.h1`
  margin-top: 9rem;
  margin-left: 7.5rem;
  margin-right: 2rem;
`;
const HeroSubText = styled.h3`
  margin-left: 7.5rem;
  margin-right: 2rem;
`;

const Image = styled.div`
  width: 877px;
  // height: 480px;
  left: 728px;
  margin-top: 20px;
  overflow-x: hidden;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

const Button = styled.button`
  background-color: #f53838;
  color: white;
  width: 30%;
  padding: 0.6rem 1.2rem;
  border: 0;
  border-radius: 5px;
  margin-left: 7.5rem;
  margin-top: 1rem;
  transition: all 0.2s ease-in;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const NewsLetter = styled.div`
  background-color: #ffffff;
  margin: 7.5rem;
  padding: 3rem;
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
    background-color: #dde0e4;
    box-shadow: 0px 4px 13px -8px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }
`;

const SubscribeButton = styled.div`
  background-color: #f53838;
  color: white;
  font-size: 16px;
  padding: 1.2rem;
  border-radius: 5px;
  margin-left: 1rem;
  transition: all 0.2s ease-in;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;
