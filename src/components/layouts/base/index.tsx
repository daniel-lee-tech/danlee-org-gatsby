import * as React from "react"
import { Link as GatsbyLink, useStaticQuery, graphql } from "gatsby"
import { extendTheme } from "@chakra-ui/react"
import { ChakraProvider, Box, Link as ChakraLink, Flex, Text} from "@chakra-ui/react"
import { UnstyledListing } from "../../unstyled-listing"
import { NavItem } from "../../nav-item"

// 2. Extend the theme to include custom colors, fonts, etc
const themeConfig = {
  colors: {
    brand: {
      900: "#1a365d",
      800: "#153e75",
      700: "#2a69ac",
    },
  },
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
}

const theme = extendTheme({ ...themeConfig })

const BaseLayout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ChakraProvider theme={theme}>
      <Box>
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
        <Flex as="header" justifyContent="space-between">
          <Text padding={4} fontSize="2xl"> {data.site.siteMetadata.title}</Text>

          <Box as="nav">
            <Flex as="ul" justifyContent="flex-end">
              <NavItem to="/" text="Home" />
              <NavItem to="/about" text="About" />
              <NavItem to="/blog" text="Blog" />
            </Flex>
          </Box>
        </Flex>
        <main>
          <h1>{pageTitle}</h1>
          {children}
        </main>
      </Box>
    </ChakraProvider>
  )
}

export default BaseLayout