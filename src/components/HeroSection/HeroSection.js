import React from 'react'
import styled from 'styled-components'
import Header from '../../images/image-hero-desktop.jpg'
import HeaderMobile from '../../images/image-hero-mobile.jpg'

const HeroContainer = styled.div`
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
`

const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: transparent;
`

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <HeroImg src={Header} />
      </HeroBg>
    </HeroContainer>
  )
}

export default HeroSection
