import { FC } from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'
interface Props {
  setTab: (value: number) => void
  getTab: () => number
}
const TabsComponent: FC<Props> = ({ setTab, getTab }: Props) => {
  const currTab = getTab()
  const tabs = [
    {
      value: 'Favorites',
      number: 1,
    },
    {
      value: 'Viewed',
      number: 2,
    },
    {
      value: 'Watch later',
      number: 3,
    },
  ]

  return (
    <TabsContainer>
      {tabs.map((tab) => (
        <Tab
          style={{
            boxShadow: `2px 5px 5px -3px ${
              currTab == tab.number ? `white` : colors.textShadow
            }`,
          }}
          key={tab.value}
          onClick={() => {
            setTab(tab.number)
          }}
        >
          {tab.value}
        </Tab>
      ))}
    </TabsContainer>
  )
}

const TabsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: 15px;
`
const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  padding: 9px 20px;
  font-size: 18px;
  box-shadow: 2px 5px 25px -3px ${colors.textShadow};
  border-radius: 10px;
  background-color: ${colors.tabsBackColor};
  color: ${colors.paginationButtonColor};
  cursor: pointer;
`

export default TabsComponent
