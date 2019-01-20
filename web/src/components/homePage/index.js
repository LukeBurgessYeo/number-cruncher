import React from 'react'
import { Box, TextInput } from 'grommet'
import Keypad from './keypad'
import Display from './display'

// See documentation on Gatsby environment variables
// https://www.gatsbyjs.org/docs/environment-variables/
// they don't work as documented, hence backup value
const api = process.env.API_URL || 'http://localhost:3000/api'

class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      display: 'Welcome to Number Cruncher. Press the numbers (or type in the box) to see which words you can create!',
      loading: false,
    }
  }

  componentDidUpdate = async (prevProps, prevState) => {
    const { value } = this.state

    if (value.length !== 0 && prevState.value !== value) {
      this.setState({ loading: true })

      try {
        const response = await fetch(`${api}/phonewords/${value}`)
        const json = await response.json()
        if (json.length === 0) {
          this.setState({ display: 'No English words found.' })
        } else {
          this.setState({ display: json.join(', ') })
        }
      } catch (err) {
        console.log(err)
        this.setState({ display: 'Oops, something went wrong!' })
      }

      this.setState({ loading: false })
    }
  }

  validate = value => {
    const test = value.match(/[2-9]+/g)
    return test ? test.join('') : ''
  }

  handleChange = event => {
    const num = event.target.value
    this.setState(p => ({
      value: p.loading ? p.value : this.validate(num),
      display: p.value.length === 1 ? '' : p.display,
    }))
  }

  handleClick = event => {
    const num = event.target.id
    this.setState(p => ({ value: p.loading ? p.value : p.value + num }))
  }

  handleDelete = () => {
    this.setState(p => ({
      value: p.value.substring(0, p.value.length - 1),
      display: p.value.length === 1 ? '' : p.display,
    }))
  }

  render() {
    return (
      <Box width="medium" alignSelf="center">
        <Display loading={this.state.loading} text={this.state.display} />
        <TextInput
          style={{ fontFamily: 'monospace', fontSize: '18px' }}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <Keypad
          handleClick={this.handleClick}
          handleDelete={this.handleDelete}
          disabled={this.state.loading}
        />
      </Box>
    )
  }
}

export default HomePage
