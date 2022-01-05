/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
// gatsby-ssr.js
import React from "react"
import { ColorModeScript } from "@chakra-ui/react"
export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <ColorModeScript initialColorMode="dark" key="chakra-ui-no-flash" />,
  ])
}