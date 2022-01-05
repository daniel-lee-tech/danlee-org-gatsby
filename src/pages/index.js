// Step 1: Import React
import * as React from 'react'
import { Link } from "gatsby";
import BaseLayout from '../components/layouts/base';
import { StaticImage } from 'gatsby-plugin-image';

// Step 2: Define your component
const IndexPage = () => {
  return (
    <BaseLayout pageTitle="Home">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage alt="Astronaut logo" src="../images/gatsby-astronaut.png"
      />
    </BaseLayout>
  )
}

// Step 3: Export your component
export default IndexPage