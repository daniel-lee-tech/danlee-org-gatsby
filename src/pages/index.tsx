// Step 1: Import React
import * as React from "react"
import BaseLayout from "../components/layouts/base"
import { Text, Flex, Box } from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"
import { HomeImages } from "../components/home-images"
import { StaticImage } from "gatsby-plugin-image"

// Step 2: Define your component
const IndexPage = () => {
  return (
    <BaseLayout pageTitle="Welcome">
      <Flex flexDirection="column">
        <Box width={{ base: "80%" }} margin={"auto"}>
          <Text fontSize="4xl" marginBottom={15}>
            About Me
          </Text>
          <Text fontSize="xl">
            My name is Daniel Lee. I was born 1996, in New York City. I
            currently live with my soul mate, Lexy, and our two cats, Fae and
            Ruby. We all reside in Seoul, South Korea. I really enjoying
            programming, reading, and consuming podcasts.
          </Text>
          <Text fontSize="xl" marginY={10} color="rgb(228, 209, 209)">
            <GatsbyLink to="/biography">👉 Quick Biography About Me</GatsbyLink>
          </Text>
          <Text fontSize="3xl" marginBottom={15}>
            Some Photos
          </Text>
          <HomeImages />
         
        </Box>
      </Flex>
    </BaseLayout>
  )
}

// Step 3: Export your component
export default IndexPage
