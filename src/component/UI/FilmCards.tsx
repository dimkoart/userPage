import React, { FC } from 'react'
import styled from 'styled-components'
import Card from './Card'
export type Film = {
  filmId: number
  posterUrl: string
}
interface Props {
  data: Film[]
}
const FilmCards = ({ data }: Props) => {
  return (
    <FilmList>
      {data.map((film) => (
        <Card key={film.filmId} {...film}></Card>
      ))}
    </FilmList>
  )
}
const FilmList = styled.div`
  display: flex;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 750px;
`
export default FilmCards
