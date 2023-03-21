import React, { CSSProperties, FC, HTMLAttributes } from 'react'
import IcoMoon from 'react-icomoon'

import iconSet from '../../assets/icon.json'
interface Props {
  icon: string
  color?: string
  size?: number
  style?: CSSProperties
}
const Icon: FC<Props & HTMLAttributes<HTMLDivElement>> = ({
  icon,
  color,
  size,
  style,
}: Props) => {
  return (
    <IcoMoon
      style={style}
      iconSet={iconSet}
      icon={icon}
      color={color}
      size={size || 24}
    />
  )
}

export default Icon
