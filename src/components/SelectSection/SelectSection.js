import React from 'react'
import styled from 'styled-components'
import close from '../../images/icon-close-modal.svg'

const Hide = styled.div`
  display: block;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
  padding: 50px 0;
  transition: all 0.2s ease-in-out;
  visibility: ${({ selectIsOpen }) => (selectIsOpen ? 'visible' : 'hidden')};
`

const SelectContainer = styled.div`
  position: absolute;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  transition: all 0.2s ease-in-out;
  visibility: ${({ selectIsOpen }) => (selectIsOpen ? 'visible' : 'hidden')};
`

const SelectWrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: grid;
  background-color: #fff;
  width: 680px;
  padding: 50px 0;
  border-radius: 10px;
`

const ItemsContainer = styled.div`
  width: 560px;
`
const HeadingContainer = styled.div`
  padding-bottom: 30px;
`

const CloseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Close = styled.img`
  cursor: pointer;
`

const SelectH1 = styled.h1`
  font-size: 1.5rem;
  padding-bottom: 30px;
`
const SelectP = styled.p`
  color: hsl(0, 0%, 38%);
`

const OptionContainer = styled.div`
  padding: 30px 25px;
  border-style: solid;
  border-radius: 10px;
  border-color: lightgray;
  margin-bottom: 20px;
`

const OptionWrapper = styled.div``
const Row1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Item1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  label {
    padding-left: 20px;
    font-weight: bold;
  }
`
const Item2 = styled.div``

const Amount = styled.p`
  color: hsl(176, 72%, 28%);
  padding-left: 20px;
`
const Stock = styled.div`
  color: hsl(0, 0%, 38%);

  span {
    color: black;
    font-weight: bold;
    font-size: 1.1rem;
  }
`
const Row2 = styled.div`
  padding-top: 20px;
  padding-left: 33px;
`

const OptionP = styled.p`
  color: hsl(0, 0%, 38%);
  line-height: 25px;
`

const Button = styled.button`
  border-style: none;
  background-color: hsl(176, 50%, 47%);
  padding: 20px 40px;
  color: #fff;
  font-weight: bold;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: hsl(176, 72%, 28%);
  }
`

const SelectSection = ({ selectObjects, selectIsOpen, toggleSelect }) => {
  return (
    <>
      <Hide selectIsOpen={selectIsOpen} />
      <SelectContainer selectIsOpen={selectIsOpen}>
        <SelectWrapper>
          <ItemsContainer>
            <HeadingContainer>
              <CloseContainer>
                <Close onClick={toggleSelect} src={close} />
              </CloseContainer>
              <SelectH1>Back this project</SelectH1>
              <SelectP>
                Want to support us in bringing Mastercraft Bamboo Monitor Riser
                out in the world?
              </SelectP>
            </HeadingContainer>
            {selectObjects.map((select, index) => {
              return (
                <OptionContainer>
                  <OptionWrapper>
                    <Row1>
                      <Item1>
                        <input
                          type='radio'
                          name='projectselection'
                          value={select.label}
                        />
                        <label for={select.label}>{select.name}</label>
                        <Amount>Pledge ${select.amount} or more</Amount>
                      </Item1>
                      <Item2>
                        <Stock>
                          <span>{select.stock} </span>left
                        </Stock>
                      </Item2>
                    </Row1>
                    <Row2>
                      <OptionP>{select.desc}</OptionP>
                    </Row2>
                  </OptionWrapper>
                </OptionContainer>
              )
            })}

            <Button onClick={toggleSelect}>Go</Button>
          </ItemsContainer>
        </SelectWrapper>
      </SelectContainer>
    </>
  )
}

export default SelectSection
