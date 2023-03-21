import styled from 'styled-components'
import colors from '../../constants/colors'
interface Props {
  marginTop?: number
  marginLeft?: number
  fontSize?: number
  fontWeight?: number
  alignSelf?: string
}

export const StyledText = styled.text<Props>`
  display: flex;
  text-align: left;
  margin-bottom: 8px;
  align-self: ${(props) => props.alignSelf || 'auto'};
  margin-left: ${(props) => props.marginLeft + 'px' || 5 + 'px'};
  margin-top: ${(props) => props.marginTop + 'px' || 5 + 'px'};
  font-family: 'Poppins';
  font-style: normal;
  font-size: ${(props) => props.fontSize + 'px' || 20 + 'px'};
  font-weight: 400;
  line-height: 18px;
  color: ${colors.textColors};
  text-shadow: 0px 4px 4px ${colors.textShadow};
`
