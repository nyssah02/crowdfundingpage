import React from 'react'
import styled from 'styled-components'
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'

const FooterContainer = styled.div`
  height: 300px;
  display: grid;
  justify-content: center;
  align-items: center;
`
const FooterWrapper = styled.div`
  width: 300px;
`
const FooterP = styled.p`
  color: hsl(0, 0%, 48%);
  font-size: 0.8rem;
  text-align: center;
`
const FooterIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`
const Icon = styled.div`
  padding: 0 20px;
  cursor: pointer;
`

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterP>Copyright 2020 © Nyssah's Crowdfund</FooterP>
        <FooterIcons>
          <Icon>
            <FaInstagram />
          </Icon>
          <Icon>
            <FaFacebook />
          </Icon>
          <Icon>
            <FaLinkedin />
          </Icon>
        </FooterIcons>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
