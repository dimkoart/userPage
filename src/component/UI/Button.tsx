import React, { CSSProperties, FC, HTMLAttributes } from 'react'
import styled from 'styled-components'
import colors from '../../constants/colors'

interface ButtonProps {
  text?: string
  style?: CSSProperties
}

const Button: FC<ButtonProps & HTMLAttributes<HTMLButtonElement>> = ({
  text,
  style,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton style={style} {...props}>
      {text}
    </StyledButton>
  )
}
const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 75px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: ${colors.buttonText};
  background: ${colors.buttonLoginColor};
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${colors.buttonLoginHoverColor};
  }
`

export default Button
