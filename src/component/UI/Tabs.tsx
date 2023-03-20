import React from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'

const TabsComponent = () => {
  const tabs = [
    {
      value: 'Favorites',
    },
    {
      value: 'Viewed',
    },
    {
      value: 'Watch later',
    },
  ]
  return (
    <TabsContainer>
      {tabs.map((tab) => (
        <Tab key={tab.value}>{tab.value}</Tab>
      ))}
    </TabsContainer>
  )
}

const TabsContainer = styled.div`
  margin-left: 15px;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
  margin-top: 20px;
  &.active {
    background: #4793ff;
    color: #fff;
  }
`
const Tab = styled.div`
  box-shadow: 2px 5px 25px -3px ${colors.textShadow};
  border-radius: 10px;
  padding: 9px 20px;
  background-color: #1d1c1c;
  color: #e6e6e6;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  cursor: pointer;
  &.active {
    background: #4793ff;
    color: #fff;
  }
`

export default TabsComponent
