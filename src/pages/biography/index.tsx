// Step 1: Import React
import * as React from "react"
import BaseLayout from "../../components/layouts/base"

// Step 2: Define your component
const Biography = (): JSX.Element => {
  return (
    <BaseLayout pageTitle="Biography">
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </BaseLayout>
  )
}

// Step 3: Export your component
export default Biography
