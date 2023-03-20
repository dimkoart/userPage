import React, { CSSProperties, FC, HTMLAttributes } from 'react'
import IcoMoon from 'react-icomoon'
import styled from 'styled-components'
import iconSet from '../../assets/icon.json'
interface Props {
  icon?: string
  color?: string
  size?: number
  style: CSSProperties
}
const Icon: FC<Props & HTMLAttributes<HTMLDivElement>> = ({
  icon,
  color,
  size,
  style,
}: Props) => {
  return (
    <Container style={style}>
      <IcoMoon iconSet={iconSet} icon={icon!} color={color} size={size || 24} />
    </Container>
  )
}
const Container = styled.div`
  display: flex;

  justify-content: center;
  align-content: center;
  width: 35px;
  height: 35px;
  border-radius: 90px;
`
export default Icon
