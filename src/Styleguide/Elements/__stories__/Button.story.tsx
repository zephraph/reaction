import React from "react"
import styled from "styled-components"
import { color, space } from "styled-system"
import { Button } from "../"
import { Section } from "../../Utils/Section"
import { storiesOf } from "storybook/storiesOf"

storiesOf("Styleguide/Elements", module).add("Button", () => {
  return (
    <React.Fragment>
      <Section title="primaryBlack">
        <Button variant="primaryBlack" size="small" m={2}>
          Follow
        </Button>
        <Button variant="primaryBlack" size="medium" m={2}>
          Follow
        </Button>
        <Button variant="primaryBlack" size="large" m={2}>
          Follow
        </Button>
      </Section>

      <Section title="primaryWhite">
        <Item bg="black" p={3} m={2}>
          <Button variant="primaryWhite" size="small">
            Follow
          </Button>
        </Item>
        <Item bg="black" p={3} m={2}>
          <Button variant="primaryWhite" size="medium">
            Follow
          </Button>
        </Item>
        <Item bg="black" p={3} m={2}>
          <Button variant="primaryWhite" size="large">
            Follow
          </Button>
        </Item>
      </Section>

      <Section title="secondaryOutline">
        <Button variant="secondaryOutline" size="small" m={2}>
          Follow
        </Button>
        <Button variant="secondaryOutline" size="medium" m={2}>
          Follow
        </Button>
        <Button variant="secondaryOutline" size="large" m={2}>
          Follow
        </Button>
      </Section>
      <Section title="Full width">
        <Button width="100%" size="large" m={2}>
          Contact Gallery
        </Button>
        <Button variant="secondaryOutline" width="100%" size="medium" m={2}>
          Contact Gallery
        </Button>
      </Section>
    </React.Fragment>
  )
})

const Item = styled.div.attrs<any>({})`
  ${space};
  ${color};
`
