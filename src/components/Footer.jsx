import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>WebX</Heading>
            <p>Webx is a decentralize network that has</p>
            <p>unique features like streaming</p>
            <CircleWrapper>
              <Circle>
                <span className="dot ml-5"></span>
              </Circle>
              <Circle>
                <span className="dot ml-5"></span>
              </Circle>
              <Circle>
                <span className="dot ml-5"></span>
              </Circle>
            </CircleWrapper>

            <p>&copy; {new Date().getFullYear()}WebX</p>
          </Column>
          <Column>
            <Heading>Product</Heading>
            <FooterLink href="#">Download</FooterLink>
            <FooterLink href="#">Pricing</FooterLink>
            <FooterLink href="#">Locations</FooterLink>
            <FooterLink href="#">Server</FooterLink>
            <FooterLink href="#">Countries</FooterLink>
            <FooterLink href="#">Blog</FooterLink>
          </Column>
          <Column>
            <Heading>Engage</Heading>
            <FooterLink href="#">WebX?</FooterLink>
            <FooterLink href="#">FAQ</FooterLink>
            <FooterLink href="#">Tutorials</FooterLink>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Terms of Service</FooterLink>
          </Column>
          <Column>
            <Heading>Earn Money</Heading>
            <FooterLink href="#">Affiliate</FooterLink>
            <FooterLink href="#">Become a Partner</FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;

export const Box = styled.div`
  padding: 80px 60px;
  padding-top:8rem;
  background: #f8f8f8;
  bottom: 0;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: red; */
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  text-align: left;
  margin-left: 60px;
  p {
    color: #4f5665;
    margin-bottom: 20px;
    font-size: 18px;
  }
`;
export const CircleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Circle = styled.span`
  height: 33.6px;
  width: 33.6px;
  background-color: #f53838;
  border-radius: 50%;
  display: inline-block;
  margin-right: 1rem;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #4f5665;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #0b132a;
  margin-bottom: 40px;
  font-weight: bold;
`;
