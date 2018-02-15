// @ts-ignore Microsoft/TypeScript#5711
import styled, { StyledComponentClass } from "styled-components"
import colors from "../../Assets/Colors"
// @ts-ignore
import Button, { ButtonProps } from "./Default"

const InvertedButton = styled(Button)`
  background: ${props => (props.disabled ? colors.graySemibold : "black")};
  color: ${props => (props.disabled ? "rgba(255,255,255,0.7)" : "white")};

  &:hover:not(:disabled) {
    background: ${colors.purpleRegular};
  }
`

export default InvertedButton
