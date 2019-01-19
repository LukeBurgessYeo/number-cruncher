import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Grommet, Box } from 'grommet'

const theme = {
  global: {
    font: {
      family: 'monospace',
      size: '16px',
      height: '20px',
    },
  },
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={() => (
      <>
        <Grommet full={true} theme={theme}>
          <Box
            fill="vertical"
            justify="start"
            pad={{ vertical: 'large', horizontal: 'medium' }}
          >
            {children}
          </Box>
        </Grommet>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
