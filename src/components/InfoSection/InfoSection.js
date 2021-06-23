import React from 'react'
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
const PledgeNo = styled.p``
const PledgeButton = styled.button`
  background-color: hsl(176, 50%, 47%);
`

const InfoSection = () => {
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
        <PledgeWrapper>
          <PledgeItemContainer>
            <RowDouble>
              <PledgeH2>Bamboo Stand</PledgeH2>
              <PledgeAmount>Pledge $25 or more</PledgeAmount>
            </RowDouble>
            <RowSingle>
              <AboutP>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
                fugiat porro, minus hic cumque possimus sunt aliquam neque,
                aspernatur vero illo nisi expedita.
              </AboutP>
            </RowSingle>
            <RowDouble>
              <PledgeNo>
                <span>101</span> left
              </PledgeNo>
              <PledgeButton>Select Reward</PledgeButton>
            </RowDouble>
          </PledgeItemContainer>
        </PledgeWrapper>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default InfoSection
