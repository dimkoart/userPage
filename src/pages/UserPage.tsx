import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../component/UI/Button'
import FilmCards from '../component/UI/FilmCards'
import Icon from '../component/UI/Icon'
import Tabs from '../component/UI/Tabs'
import { StyledText } from '../component/UI/Text'
import colors from '../constants/colors'
import { FilmService } from '../services/FilmService'
import { useQuery } from 'react-query'
import Pagination from '../component/UI/Pagination'
import EditWindow from '../component/UI/EditWindow'

const UserPage = () => {
  const [modal, setModal] = useState(false)
  const [pageNumber, setPage] = useState(1)
  const [tabsState, setTabs] = useState(1)
  const { data, isLoading, error } = useQuery(
    ['films', pageNumber],
    async () => await FilmService.fetchFilms(pageNumber),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  )
  const closeModal = (): void => {
    setModal(false)
  }
  const changePageFilms = (value: number): void => {
    setPage(value)
  }
  const getPageNumber = (): number => {
    return pageNumber
  }
  const setTabValue = (value: number): void => {
    setTabs(value)
  }
  const getTabValue = (): number => {
    return tabsState
  }
  // функция для отрисовки фильмов и пагинации
  function FilmCard() {
    if (isLoading) {
      return <h1>LOADING.......</h1>
    }
    if (error) {
      return <h1>error</h1>
    }
    return (
      <>
        {tabsState == 1 ? (
          <FilmCards data={data.films} />
        ) : tabsState == 2 ? (
          'ЗДЕСЬ ПОКА ЧТО НИЧЕГО'
        ) : tabsState == 3 ? (
          'И ЗДЕСЬ ТОЖЕ =)'
        ) : (
          tabsState
        )}
        <Pagination
          changePage={changePageFilms}
          getPage={getPageNumber}
          filmsCount={tabsState == 1 ? data : ''}
        />
      </>
    )
  }
  return (
    <Container>
      <UserContent>
        <Header>
          <Image>
            <EditPhotoContainer>
              <Icon
                icon='camera'
                size={25}
                color='black'
                style={{
                  position: 'relative',
                  marginLeft: 5,
                  marginTop: 3,
                }}
              />
              <EditPhotoInput />
            </EditPhotoContainer>
          </Image>
          <UserInfo>
            <StyledText
              fontSize={32}
              fontWeight={900}
              marginTop={25}
              marginLeft={20}
            >
              Dzmitry Samaseika
            </StyledText>
            <StyledText fontSize={15} marginTop={25} marginLeft={20}>
              Registration date: 30 January 2023
            </StyledText>
          </UserInfo>
          <Button
            text='Edit'
            style={{ marginLeft: 150, marginTop: 17 }}
            onClick={() => {
              setModal(true)
            }}
          />
          <EditWindow active={modal} onClose={closeModal} />
        </Header>
        {/* блок с переключателями вкладок и сами фильмы */}
        <FilmList>
          <Tabs setTab={setTabValue} getTab={getTabValue} />
          <hr style={{ margin: '15px 0' }} />
          <FilmCard />
        </FilmList>
      </UserContent>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: start;
  overflow: scroll;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  background-image: url('https://yastatic.net/s3/passport-auth-customs/customs/_/4vui26y6.jpg');
`
const Header = styled.div`
  display: flex;
  margin-top: 25px;
  padding: 20px;
  background-color: ${colors.loginForm};
  border-radius: 16px;
  box-shadow: 2px 5px 25px -3px ${colors.textShadow};
`
const FilmList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  padding: 20px;
  width: 750px;
  scrollbar-width: auto;
  background-color: ${colors.loginForm};
  border-radius: 16px;
  box-shadow: 2px 5px 25px -3px ${colors.textShadow};
`

const UserContent = styled.div`
  display: inline-block;
`
const UserInfo = styled.div`
  flex-direction: column;
`

const Image = styled.div`
  display: flex;
  justify-content: right;
  align-items: end;
  width: 168px;
  height: 168px;
  border-radius: 100px;
  background-image: url('https://lastfm.freetls.fastly.net/i/u/770x0/184fc92686e96c0f0b63e426c233bd59.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  cursor: pointer;
`
const EditPhotoContainer = styled.div`
  position: relative;
  width: 35px;
  height: 35px;
  margin-right: 5px;
  border-radius: 90px;
  background-color: ${colors.gray};
  cursor: pointer;
`
const EditPhotoInput = styled.input.attrs(() => ({ type: 'file' }))`
  position: absolute;
  margin-top: 7px;
  left: 11px;
  width: 35px;
  height: 35px;
  opacity: 0;
`

export default UserPage
