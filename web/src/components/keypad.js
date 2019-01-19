import React from 'react'
import { Box, TextInput, Grid } from 'grommet'
import Key from './key'

const letters = [
  '',
  'abc',
  'def',
  'ghi',
  'jkl',
  'mno',
  'pqrs',
  'tuv',
  'wxyz',
].map((val, ind) => ({ number: ++ind % 11, label: val }))

class Keypad extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      display:
        'Press the numbers (or type in the box) to see which words you can create!',
    }
  }

  componentDidUpdate = () => {
    const { value } = this.state
    value && console.log(value)
  }

  validate = value => {
    const test = value.match(/[2-9]/g)
    return test ? test.join('') : ''
  }

  handleChange = event => {
    this.setState({ value: this.validate(event.target.value) })
  }

  handleClick = event => {
    const newNum = event.target.id
    this.setState(p => ({ value: p.value + newNum }))
  }

  handleDelete = () => {
    this.setState(p => ({ value: p.value.substring(0, p.value.length - 1) }))
  }

  render() {
    const buttons = letters.map((k, i) => (
      <Key
        key={i}
        label={k.label}
        number={k.number}
        index={i}
        handleClick={i === 0 ? null : this.handleClick}
      />
    ))

    const buttonSize = '33%'

    return (
      <>
        <Box
          border={{ side: 'all', color: 'brand', size: 'medium' }}
          round="medium"
          pad="small"
          margin={{ bottom: 'small' }}
          height="150px"
          style={{ maxWidth: '500px' }}
        >
          {this.state.display}
        </Box>
        <TextInput
          style={{ fontFamily: 'monospace', fontSize: '18px' }}
          value={this.state.value}
          onChange={this.handleChange}
        />
        <Grid
          columns={[buttonSize, buttonSize, buttonSize]}
          rows={[buttonSize, buttonSize, buttonSize, '50px']}
          justifyContent="center"
          gap="small"
          margin="small"
        >
          {buttons}
          <Key label="" number="*" index={10} />
          <Key label="" number={0} index={11} />
          <Key
            label=""
            number={'\u232B'}
            index={10}
            handleClick={this.handleDelete}
          />
        </Grid>
      </>
    )
  }
}

export default Keypad
