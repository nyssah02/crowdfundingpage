import React from 'react'
import styled from 'styled-components'
import logo from '../../images/logo-mastercraft.svg'
import bookmark from '../../images/icon-bookmark.svg'

const TopContainer = styled.div`
  background: #fff;
  border-radius: 10px;
  width: 100%;
  max-width: 800px;
  display: grid;
  margin-top: -100px;
  z-index: 99;
  position: relative;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  padding: 50px 0;
`

const TopWrapper = styled.div`
  padding: 20px 0;
  width: 100%;
`
const TopLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -100px;
`

const TopLogo = styled.img`
  cursor: pointer;
`

const TopTextContainer = styled.div``

const TopH1 = styled.h1`
  text-align: center;
  height: 60px;
  font-size: 1.8rem;
`
const TopP = styled.p`
  text-align: center;
  color: hsl(0, 0%, 38%);
`
const TopButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 50px;
  width: 650px;
`
const ButtonContainer = styled.div``

const BackButton = styled.button`
  border-width: 0;
  background-color: hsl(176, 50%, 47%);
  padding: 20px 40px;
  color: #fff;
  font-weight: bold;
  border-radius: 30px;
  cursor: pointer;
`
const BookmarkButton = styled.button`
  border-width: 0;
  background-color: lightgray;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 40px;
  font-weight: bold;
  color: hsl(0, 0%, 38%);
  cursor: pointer;
`

const BookmarkLogo = styled.img`
  padding-right: 20px;
`

const TopSection = () => {
  return (
    <TopContainer>
      <TopLogoContainer>
        <TopLogo src={logo} />
      </TopLogoContainer>
      <TopWrapper>
        <TopTextContainer>
          <TopH1>Mastercraft Bamboo Monitor Riser</TopH1>
          <TopP>
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </TopP>
        </TopTextContainer>
        <TopButtonsContainer>
          <ButtonContainer>
            <BackButton>Back this project</BackButton>
          </ButtonContainer>
          <ButtonContainer>
            <BookmarkButton>
              <BookmarkLogo src={bookmark} />
              Bookmark
            </BookmarkButton>
          </ButtonContainer>
        </TopButtonsContainer>
      </TopWrapper>
    </TopContainer>
  )
}

export default TopSection
