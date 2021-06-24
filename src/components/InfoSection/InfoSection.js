import React, { useState } from 'react'
import styled from 'styled-components'

const InfoContainer = styled.div`
  background: #fff;
  border-radius: 10px;
  width: 100%;
  max-width: 800px;
  display: grid;
  z-index: 99;
  position: relative;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
  padding: 50px 0;
  margin-top: 20px;
`

const InfoWrapper = styled.div`
  padding: 20px 0;
  width: 650px;
`

const AboutWrapper = styled.div`
  padding-bottom: 50px;
`

const AboutH2 = styled.h2`
  font-size: 1.2rem;
`

const AboutP = styled.p`
  color: hsl(0, 0%, 48%);
  line-height: 30px;
  padding-top: 40px;
`

const PledgeWrapper = styled.div`
  border-width: 2px;
  border-style: solid;
  border-color: lightgray;
  border-radius: 10px;
  margin-top: 10px;
`

const PledgeItemContainer = styled.div`
  padding: 40px;
`

const RowDouble = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const RowSingle = styled.div``
const PledgeH2 = styled.h2`
  font-size: 1.2rem;
`
const PledgeAmount = styled.p`
  font-size: 1rem;
  color: hsl(176, 50%, 47%);
`

const PledgeP = styled.p`
  color: hsl(0, 0%, 48%);
  line-height: 30px;
  padding: 30px 0;
`
const PledgeNo = styled.p`
  color: hsl(0, 0%, 48%);
  span {
    font-size: 2rem;
    font-weight: bold;
    color: #000;
  }
`

const PledgeButton = styled.button`
  border-style: none;
  background-color: ${({ stock }) =>
    stock ? 'hsl(176, 50%, 47%)' : 'hsl(0, 0%, 48%)'};
  padding: 20px 40px;
  color: #fff;
  font-weight: bold;
  border-radius: 30px;
  cursor: ${({ stock }) => (stock ? 'pointer' : 'default')};

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: hsl(176, 72%, 28%);
  }
`

const InfoSection = ({ projectObjects, toggleSelect }) => {
  return (
    <InfoContainer>
      <InfoWrapper>
        <AboutWrapper>
          <AboutH2>About this project</AboutH2>
          <AboutP>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
            qui recusandae aut nostrum at, minima ullam blanditiis, tenetur
            totam saepe tempore expedita facere. Dignissimos, earum?
          </AboutP>
          <AboutP>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum
            exercitationem tempore amet iure nihil.
          </AboutP>
        </AboutWrapper>
        {projectObjects.map((projects, index) => {
          return (
            <PledgeWrapper>
              <PledgeItemContainer>
                <RowDouble>
                  <PledgeH2>{projects.pledgeh2}</PledgeH2>
                  <PledgeAmount>
                    Pledge ${projects.pledgeamount} or more
                  </PledgeAmount>
                </RowDouble>
                <RowSingle>
                  <PledgeP>{projects.pledgeinfo}</PledgeP>
                </RowSingle>
                <RowDouble>
                  <PledgeNo>
                    <span>{projects.pledgeleft} </span>left
                  </PledgeNo>
                  <PledgeButton stock={projects.stock} onClick={toggleSelect}>
                    {projects.buttontext}
                  </PledgeButton>
                </RowDouble>
              </PledgeItemContainer>
            </PledgeWrapper>
          )
        })}
      </InfoWrapper>
    </InfoContainer>
  )
}

export default InfoSection
