import React from 'react'
import styled from 'styled-components'

const StatsContainer = styled.div`
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
const StatsWrapper = styled.div`
  padding: 20px 0;
`

const NumbersContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  align-items: center;
`

const Col = styled.div``

const StatsH1 = styled.h1`
  padding-bottom: 8px;
`

const StatsP = styled.p`
  color: hsl(0, 0%, 38%);
`

const ProgressContainer = styled.div`
  padding-top: 40px;
`

const ProgressBar = styled.div`
  height: 12px;
  width: 650px;
  background-color: #f5f5f5;
  border-radius: 5px;
`
const ProgressBarCurrent = styled.div`
  height: 12px;
  width: calc(0.89 * 650px);
  background-color: hsl(176, 50%, 47%);
  border-radius: 5px;
`

const StatsSection = () => {
  return (
    <StatsContainer>
      <StatsWrapper>
        <NumbersContainer>
          <Col>
            <StatsH1>$89,914</StatsH1>
            <StatsP>of $100,000 backed</StatsP>
          </Col>
          <Col>
            <StatsH1>5,007</StatsH1>
            <StatsP>total backers</StatsP>
          </Col>
          <Col>
            <StatsH1>56</StatsH1>
            <StatsP>days left</StatsP>
          </Col>
        </NumbersContainer>
        <ProgressContainer>
          <ProgressBar>
            <ProgressBarCurrent />
          </ProgressBar>
        </ProgressContainer>
      </StatsWrapper>
    </StatsContainer>
  )
}

export default StatsSection
