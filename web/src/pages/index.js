import React from 'react'
import { Box } from 'grommet'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Page from '../components/homePage'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`phonewords`, `T9`, `react`]} />
    <Box alignSelf="center" animation="fadeIn">
      <Page />
    </Box>
  </Layout>
)

export default IndexPage
