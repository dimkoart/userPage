import React, { FC } from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'
import { Films } from '../../types/FilmsType'

import Icon from './Icon'

interface Props {
  changePage: (value: number) => void
  getPage: () => number
  filmsCount: Films
}
const Pagination: FC<Props> = ({ changePage, filmsCount, getPage }: Props) => {
  const pageNumbers: number[] = []
  const currPage = getPage()

  for (let i = 1; i <= filmsCount.pagesCount; i++) {
    pageNumbers.push(i)
  }

  return (
    <ButtonContainer>
      <Button
        onClick={() => {
          if (currPage > 1) {
            changePage(currPage - 1)
          }
        }}
        disabled={currPage === 1}
      >
        <Icon icon='arrow-left' size={25} color='black' />
      </Button>
      {/* отрисовка кнопок в зависимости от кол-ва вкладок */}
      {pageNumbers.map((number) => (
        <Button
          key={number}
          style={{
            boxShadow: `2px 5px 5px -3px ${
              currPage == number ? `white` : colors.textShadow
            }`,
          }}
          onClick={() => {
            changePage(number)
          }}
        >
          {number}
        </Button>
      ))}

      <Button
        onClick={() => {
          if (currPage < pageNumbers.length) {
            changePage(currPage + 1)
          }
        }}
        disabled={currPage === pageNumbers.length}
      >
        <Icon icon='arrow-right' size={25} color='black' />
      </Button>
    </ButtonContainer>
  )
}
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  justify-content: center;
  margin-top: 25px;
  margin-bottom: 10px;
  margin-left: 15px;
`
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  height: 45px;
  width: 45px;
  font-size: 18px;
  border-radius: 10px;
  border: 0;
  background-color: #1d1c1c;
  color: ${colors.paginationButtonColor};
  cursor: pointer;
  :disabled {
    background-color: ${colors.disabledButton};
  }
`
export default Pagination
