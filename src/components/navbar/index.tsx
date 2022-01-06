import { ReactNode } from "react"
import * as React from "react"
import { Box, Flex } from "@chakra-ui/react"
import { NavItem } from "../nav-item"

function Navbar(): JSX.Element {
  return (
    <Box as="nav">
      <Flex as="ul" justifyContent="flex-end">
        <NavItem to="/" text="Home" />
        <NavItem to="/career" text="Career" />
        <NavItem to="/biography" text="Biography" />
        <NavItem to="/blog" text="Blog" />
      </Flex>
    </Box>
  )
}

export { Navbar }
