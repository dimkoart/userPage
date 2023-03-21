import React, { FC, HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Film } from '../../types/FilmsType'
import Card from './Card'

interface Props {
  data: Film[]
}
const FilmCards: FC<Props & HTMLAttributes<HTMLDivElement>> = ({
  data,
}: Props) => {
  return (
    <FilmList>
      {data.map((film) => (
        <Card key={film.filmId} film={film}></Card>
      ))}
    </FilmList>
  )
}
const FilmList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 750px;
`
export default FilmCards
