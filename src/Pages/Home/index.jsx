import React from "react";
import {Link} from 'react-router-dom'
import styled from "styled-components";
import NewsLetterComp from "../../components/NewsLetter";
import Spiral from "./assets/spiral.svg";
import Snowfall from 'react-snowfall'

function Home() {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <HeroMainText>
              <h1 className='fw-bold'>WebX Streaming</h1>
              <h1 className='fw-bold'>Platform</h1>
            </HeroMainText>
            <HeroSubText>
              <h4>We Provide Many </h4>
              <h4>You Can Use</h4>
            </HeroSubText>
            <Button>
              <Link to ='/dashboard' style={{
                color:'white',
                textDecoration:'none',
                fontWeight:600
              }}>
              Get Started
              </Link>
              </Button>
          </Column>
          <Column>
            <Image>
              <img src={Spiral} className="" />
            </Image>
          </Column>
        </Row>
      </Container>

      <NewsLetterComp />
    </Box>
  );
}

export default Home;
const Box = styled.div`
padding-top:5rem;
padding-bottom:3rem
`;

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
