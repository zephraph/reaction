import React from "react"
import styled from "styled-components"
import { Responsive } from "../Utils/Responsive"
import { Flex } from "../Elements/Flex"
import { Arrow } from "../Elements/Arrow"
import { ImageProps } from "../Elements/Image"

import {
  border,
  height,
  HeightProps,
  width,
  WidthProps,
  themeGet,
} from "styled-system"

export class Slider extends React.Component {
  render() {
    return (
      <Responsive>
        {({ xs }) => {
          if (xs) return <SmallSlider {...this.props} />
          else return <LargeSlider {...this.props} />
        }}
      </Responsive>
    )
  }
}

export const LargeSlider = props => {
  return (
    <Container>
      <Flex justifyContent="space-around" alignItems="center">
        <Button>
          <Arrow direction="left" color="black10" />
        </Button>
        <ImageContainer>
          {React.Children.map(
            props.children,
            (child: React.ReactElement<ImageProps>) => {
              return React.cloneElement(child, {
                mx: 2,
              })
            }
          )}
        </ImageContainer>
        <Button>
          <Arrow direction="right" color="black10" />
        </Button>
      </Flex>
    </Container>
  )
}

export const SmallSlider = props => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
    >
      <ImageContainer {...props}>
        {React.Children.map(
          props.children,
          (child: React.ReactElement<ImageProps>) => {
            return React.cloneElement(child, {
              style: {
                objectFit: "cover",
              },
              mx: 2,
              width: "100%",
              height: "200px",
            })
          }
        )}
      </ImageContainer>
      <Dots justifyContent="center" mt={3}>
        <Dot active />
        <Dot />
        <Dot />
        <Dot />
        <Dot />
      </Dots>
    </Flex>
  )
}

const Container = styled.div`
  position: relative;
  width: 100%;
  min-width: 0;
`

const Button = styled.div`
  height: 100%;
  position: relative;
`

interface ImageContainerProps extends WidthProps, HeightProps {}
const ImageContainer = styled.div.attrs<ImageContainerProps>({})`
  overflow-x: scroll;
  display: inline-block;
  white-space: nowrap;
  text-align: center;
  width: 95%;
  height: 100%;

  ${width};
  ${height};
  ${border};
`

const Dots = styled(Flex)``

const Dot = styled.div.attrs<{ active?: boolean }>({})`
  ${props => {
    const colors = themeGet("colors")(props)
    const activeColor = props.active ? colors.black100 : colors.black10

    return `
      background: ${activeColor};
      border-radius: 50%;
      width: 3px;
      height: 3px;
      margin: 1px;
    `
  }};
`
