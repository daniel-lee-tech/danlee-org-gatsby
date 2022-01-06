import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { extendTheme } from "@chakra-ui/react"
import {
  ChakraProvider,
  Box,
  Link as ChakraLink,
  Flex,
  Text,
} from "@chakra-ui/react"
import { Navbar } from "../../navbar"

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
  styles: {
    global: _props => ({
      body: {
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
      },
    }),
  },
}

const theme = extendTheme({ ...themeConfig })

const BaseLayout = ({ pageTitle, children }): JSX.Element => {
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
      <Box paddingX={{ base: 0, md: 20 }} paddingTop={19}>
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
        <Flex as="header" justifyContent="space-between">
          <Text padding={4} fontSize="2xl">
            {" "}
            {data.site.siteMetadata.title}
          </Text>

          {/* NAVBAR */}
          <Navbar />
        </Flex>
        {/* MAIN CONTENT */}
        <Flex as="main" flexDirection="column" alignItems="center">
          <Text fontSize="6xl" marginBottom={19} paddingBottom={19}>{pageTitle}</Text>
          <Flex width={{ base: "90%", md: "70%", lg: "50%", xl: "40%" }}>{children}</Flex>
        </Flex>
      </Box>
    </ChakraProvider>
  )
}

export default BaseLayout
