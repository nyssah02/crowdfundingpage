import React from 'react'
import styled from 'styled-components'

const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  top: 0;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  top: 0;
  z-index: 10;
  position: absolute;
`

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  z-index: 1;
`

const NavLogo = styled.div`
  color: #fff;
  display: flex;
  justify-self: flex-start;
  align-items: center;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
`

const NavItem = styled.li`
  height: 80px;
`

const NavLinks = styled.p`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-size: 0.8rem;
  cursor: pointer;
`

const Navbar = () => {
  return (
    <NavbarContainer>
      <Nav>
        <NavLogo>crowdfund</NavLogo>
        <NavMenu>
          <NavItem>
            <NavLinks>About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks>Discover</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks>Get Started</NavLinks>
          </NavItem>
        </NavMenu>
      </Nav>
    </NavbarContainer>
  )
}

export default Navbar
