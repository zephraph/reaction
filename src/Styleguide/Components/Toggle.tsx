import React from "react"
import Icon from "Components/Icon"
import styled from "styled-components"
import { Flex } from "../Elements/Flex"
import { Sans } from "@artsy/palette"
import { themeGet } from "styled-system"

export interface ToggleProps {
  disabled?: boolean
  expanded?: boolean
  label?: string
}

export interface ToggleState {
  disabled: boolean
  expanded: boolean
}

export class Toggle extends React.Component<ToggleProps> {
  state = {
    expanded: false,
    disabled: false,
  }

  constructor(props) {
    super(props)

    this.state = {
      ...props,
    }
  }

  toggleExpand = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const { disabled, expanded } = this.state

    return (
      <Flex width="100%" flexDirection="column">
        <Header onClick={this.toggleExpand} disabled={disabled}>
          <Flex justifyContent="space-between">
            <Sans size="2" color="black100" mt={1}>
              {this.props.label}
            </Sans>
            {!disabled && (
              <Flex justifyContent="right">
                <Arrow direction={expanded ? "up" : "down"} />
              </Flex>
            )}
          </Flex>
        </Header>
        {expanded && (
          <Flex flexDirection="column" alignItems="left" mt={-3} mb={3}>
            {this.props.children}
          </Flex>
        )}
      </Flex>
    )
  }
}

const Header = styled.div.attrs<ToggleProps>({})`
  border-top: 1px solid ${themeGet("colors.black10")};
  cursor: pointer;
  padding-bottom: 16px;
  padding-top: 16px;
  pointer-events: ${props => (props.disabled ? "none" : "auto")};
  user-select: none;
`

const Arrow = ({ direction }) => {
  return (
    <Icon name={`chevron-${direction}` as any} color="black" fontSize="9px" />
  )
}
