import React, { CSSProperties, FC, HTMLAttributes } from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'

interface InputProps {
  style?: CSSProperties
  text?: string
  type?: string | undefined
  placeholder?: string | undefined
}
const Input: FC<InputProps & HTMLAttributes<HTMLInputElement>> = ({
  style,
  ...props
}: InputProps) => {
  return <StyledInput style={style} {...props}></StyledInput>
}

const StyledInput = styled.input`
  display: flex;
  width: 400px;
  height: 49.48px;
  padding-left: 25px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: ${colors.white};
  background: ${colors.inputColor};
  border-radius: 15px;
  border: 0;
  box-sizing: border-box;
  filter: drop-shadow(2px 5px 25px ${colors.dropShadow});
  ::placeholder {
    color: ${colors.placeHolder};
    font-size: 20px;
  }
`

export default Input
