import React, { useState } from "react";
import styled from "styled-components";
import { FaWallet } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { RiContrast2Line } from "react-icons/ri";
import { RiArrowLeftRightFill } from "react-icons/ri";
import { FaBell } from "react-icons/fa";
import { useEagerConnect } from "../hooks/UseEagerConnect";

const Navbar = () => {


  const handleConnect =async ()=> {
    let result  = await window.ethereum.request({ method: 'eth_requestAccounts' })
       console.log(result)
    return   result
  }
  return (
    <div>
      <Container>
        <h1>WebX</h1>
        <Menu>
          <LinkWrapper>
            <MenuLink>
              <a>
                <FaWallet size={30} />
              </a>
            </MenuLink>
            <MenuLink>
              <a>
                <RiContrast2Line size={30} />
              </a>
            </MenuLink>
            <MenuLink>
              <a>
                <RiArrowLeftRightFill size={30} />
              </a>
            </MenuLink>
            <MenuLink>
              <a>
                <BsFillPersonFill size={30} />
              </a>
            </MenuLink>
            <MenuLink>
              <a>
                <IoSettings size={30} />
              </a>
            </MenuLink>
          </LinkWrapper>
        </Menu>
        <MenuLink>
          <a>
            <FaBell size={30} />
          </a>
        </MenuLink>
         
        <Button onClick ={handleConnect}>Connect Wallet</Button>
      </Container>
    </div>
  );
};

export default Navbar;

const Nav = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  max-width: 2000px;
  margin: auto;
  padding: 1rem;
  background: black;
  h1 {
    cursor: pointer;
    color: white;
  }
`;
const Menu = styled.div`
  }
`;
const LinkWrapper = styled.div``;
const MenuLink = styled.a`
  color: #f53838;
  padding: 2rem;
  cursor: pointer;

  &: hover {
    color: #7781d4;
    transition: all 0.2s ease-in;
  }
`;

const Button = styled.button`
  font-size: 0.8rem;
  color: #f53838;
  background-color: #000000;
  padding: 0.8rem 1.1rem;
  border-radius: 1rem;
  transition: all 0.2s ease-in;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;
