// Step 1: Import React
import * as React from "react"
import { Box } from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"
import { Text, Flex } from "@chakra-ui/react"

function HomeImages(): JSX.Element {
  return (
    <Flex flexDirection="column" justifyContent="space-between">
      <Box as="figure" marginBottom={12}>
        <StaticImage
          alt="Dan and Lexy goofing on the train"
          src={"../../images/lexy_dan_train.jpg"}
        />
        <Box as="figcaption" textAlign="center">
          Dan and Lexy goofing on the train
        </Box>
      </Box>
      <Box as="figure" marginBottom={12}>
        <StaticImage
          alt="Daniel and Lexy at Coney Island Beach"
          src={"../../images/lexy_dan_beach.jpg"}
        />
        <Box as="figcaption" textAlign="center">
          Daniel and Lexy at Coney Island Beach
        </Box>
      </Box>
      <Box as="figure" marginBottom={12}>
        <StaticImage
          alt="Daniel in his army days, after a long week of training."
          src={"../../images/army.jpg"}
        />
        <Box as="figcaption" textAlign="center">
          Daniel in his army days, after a long week of training.
        </Box>
      </Box>
      <Box as="figure" marginBottom={12}>
        <StaticImage
          alt="Ruby (left) and Fae (right) cuddling."
          src="../../images/cats.jpg"
        />
        <Box as="figcaption" textAlign="center">
          Ruby (left) and Fae (right) cuddling.
        </Box>
      </Box>
      <Box as="figure" marginBottom={12}>
        <StaticImage
          alt="Fae sleeping like a goofball"
          src="../../images/fae.jpg"
        />
        <Box as="figcaption" textAlign="center">
          Fae sleeping like a goofball
        </Box>
      </Box>
      <Box as="figure" marginBottom={12}>
        <StaticImage
          alt="Ruby chilling on the bed"
          src="../../images/ruby.jpg"
        />
        <Box as="figcaption" textAlign="center">
          Ruby chilling on the bed
        </Box>
      </Box>
    </Flex>
  )
}

export { HomeImages }
