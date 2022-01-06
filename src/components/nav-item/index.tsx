import * as React from "react"

import { Link as GatsbyLink, useStaticQuery, graphql } from "gatsby"
import { UnstyledListing } from "../unstyled-listing"
import { Box, Text } from "@chakra-ui/react"

interface NavItemProps {
  to: string
  text: string
}

function NavItem(props: NavItemProps) {
  const activeLinkStyle = {
    border: "1px solid ",
    color: "rgb(39, 103, 73)",
    background: "rgb(198, 246, 213)",
    outline: "transparent solid 2\npx",
    outlineOffset: "2\npx",
    display: "flex",
    WebkitBoxAlign: "center",
    alignItems: "center",
    WebkitBoxPack: "center",
    justifyContent: "center",
    transitionProperty: "var(--chakra-transition-property-common)",
    transitionDuration: "var(--chakra-transition-duration-normal)",
    fontSize: "var(--chakra-fontSizes-md)",
    paddingTop: "var(--chakra-space-2)",
    paddingBottom: "var(--chakra-space-2)",
    paddingInlineStart: "var(--chakra-space-4)",
    paddingInlineEnd: "var(--chakra-space-4)",
    borderRadius: "var(--chakra-radii-full)",
    fontWeight: "var(--chakra-fontWeights-semibold)",
  }

	const linkStyle = {
    outline: "transparent solid 2\npx",
    outlineOffset: "2\npx",
    display: "flex",
    WebkitBoxAlign: "center",
    alignItems: "center",
    WebkitBoxPack: "center",
    justifyContent: "center",
    transitionProperty: "var(--chakra-transition-property-common)",
    transitionDuration: "var(--chakra-transition-duration-normal)",
    fontSize: "var(--chakra-fontSizes-md)",
    paddingTop: "var(--chakra-space-2)",
    paddingBottom: "var(--chakra-space-2)",
    paddingInlineStart: "var(--chakra-space-4)",
    paddingInlineEnd: "var(--chakra-space-4)",
    borderRadius: "var(--chakra-radii-full)",
    fontWeight: "var(--chakra-fontWeights-semibold)",
  }

  return (
    <UnstyledListing>
      <Box marginRight={18} marginTop={1}>

				{/* @ts-ignore */}
        <GatsbyLink style={linkStyle} to={props.to} activeStyle={activeLinkStyle}>
          <Text fontSize="xl">{props.text}</Text>
        </GatsbyLink>
      </Box>
    </UnstyledListing>
  )
}

export { NavItem }
