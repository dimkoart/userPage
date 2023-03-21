import React, { FC, HTMLAttributes } from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'
import { Film } from '../../types/FilmsType'
interface Props {
  film: Film
}

const Card: FC<Props & HTMLAttributes<HTMLDivElement>> = ({ film }: Props) => {
  return (
    <FilmCard {...film}>
      <img style={{ borderRadius: 15 }} src={film.posterUrl} />
    </FilmCard>
  )
}
const FilmCard = styled.div`
  display: flex;
  margin-top: 10px;
  margin-left: 15px;
  width: 170px;
  height: 250px;
  border-radius: 10px;
  background-color: ${colors.loginForm};
  border-radius: 16px;
  box-shadow: 2px 5px 25px -3px ${colors.textShadow};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`
export default Card
