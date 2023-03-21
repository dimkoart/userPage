import React from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'
import Button from './Button'
import Input from './Input'
import { StyledText } from './Text'
import Icon from './Icon'
interface Props {
  active: boolean
  onClose: () => void
}
const EditWindow = ({ active, onClose }: Props) => {
  if (!active) {
    return null
  }
  return (
    <Blure
      onClick={() => {
        onClose()
      }}
    >
      <Form
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <CloseWIndow
          style={{ alignSelf: 'end', cursor: 'pointer' }}
          onClick={() => {
            onClose()
          }}
        >
          <Icon icon='cross' size={25} color={`${colors.buttonLoginColor}`} />
        </CloseWIndow>

        <Title>Edit Form</Title>
        <StyledText alignSelf={'start'} marginTop={5} fontSize={25}>
          Name
        </StyledText>
        <Input type='text' placeholder='Enter Name' />
        <StyledText alignSelf={'start'} marginTop={25} fontSize={25}>
          Surname
        </StyledText>
        <Input
          type='text'
          placeholder='Enter Surname'
          style={{ marginBottom: 10 }}
        />
        <StyledText alignSelf={'start'} marginTop={25} fontSize={25}>
          Write your password
        </StyledText>
        <Input
          type='password'
          placeholder=' Write your password'
          style={{ marginBottom: 10 }}
        />
        <StyledText alignSelf={'start'} marginTop={25} fontSize={25}>
          New Password
        </StyledText>
        <Input
          type='text'
          placeholder=' New Password'
          style={{ marginBottom: 10 }}
        />
        <Button
          text='Submit'
          style={{ width: 150, height: 50, marginTop: 15, fontWeight: 900 }}
        />
      </Form>
    </Blure>
  )
}
const Form = styled.div`
  display: flex;
  position: fixed;
  align-self: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  background-color: ${colors.loginForm};
  border-radius: 16px;
  box-shadow: 2px 5px 25px -3px white;
`
const Blure = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
`
const Title = styled.div`
  color: ${(props) => props.color || colors.white};
  margin-bottom: 20px;
  text-align: center;
  font-size: 36px;
  font-weight: 500;
`
const CloseWIndow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: rotate(540deg);
    transition: all 0.7s ease-in-out 0s;
    cursor: pointer;
  }
`
export default EditWindow
