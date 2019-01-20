import React from 'react'
import { Box } from 'grommet'

const Display = ({ loading, text }) => (
  <Box
    border={{ side: 'all', color: 'brand', size: 'medium' }}
    round="medium"
    pad="small"
    margin={{ bottom: 'small' }}
    height="150px"
    overflow="scroll"
    justify={loading ? 'center' : 'start'}
  >
    {loading ? <Box alignSelf="center">loading...</Box> : text}
  </Box>
)

export default Display
