import { ReactQueryDevtools } from 'react-query/devtools'
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

const UserPage = () => {
  const [page, setPage] = useState(1)
  const { data, isLoading, error } = useQuery(
    ['films', page],
    async () => await FilmService.fetchFilms(page),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  )

  return (
    <Container>
      <Govno>
        <Header>
          <Image>
            <Icon
              icon='camera'
              size={25}
              color='black'
              style={{
                marginRight: 7,
                marginBottom: 12,
                backgroundColor: '#C4C4C4',
              }}
            />
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
          <Button text='Edit' style={{ marginLeft: 150, marginTop: 17 }} />
        </Header>
        <Content>
          <div>
            <Tabs />
          </div>
          {isLoading ? <h1>LOADING</h1> : <FilmCards data={data.films} />}
          <Button style={{}} onClick={() => setPage((p) => p + 1)} />
          <Button onClick={() => setPage((p) => p - 1)} />
        </Content>
      </Govno>
      <ReactQueryDevtools initialIsOpen />
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
const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  padding: 20px;
  width: 750px;
  background-color: ${colors.loginForm};
  border-radius: 16px;
  box-shadow: 2px 5px 25px -3px ${colors.textShadow};
`

const Govno = styled.div`
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
export default UserPage
