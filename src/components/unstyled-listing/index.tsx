import * as React from "react"
import { ChakraProvider, Box, Link as ChakraLink, Flex} from "@chakra-ui/react"

function UnstyledListing({children}) {
    return (
        <Box as="li" sx={{"listStyleType": "none"}}>
            {children}
        </Box>
    )
}

export {UnstyledListing};