import React from 'react'
import { Box } from 'grommet'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Keypad from '../components/keypad'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`phonewords`, `T9`, `react`]} />
    <Box alignSelf="center" style={{ minWidth: '50%' }} animation="fadeIn">
      <Keypad />
    </Box>
  </Layout>
)

export default IndexPage
