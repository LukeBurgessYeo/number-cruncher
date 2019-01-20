import React from 'react'
import { Grid } from 'grommet'
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

const buttonSize = '33%'

const Buttons = ({ handleClick, disabled }) =>
  letters.map((k, i) => (
    <Key
      key={i}
      label={k.label}
      number={k.number}
      index={i}
      handleClick={i === 0 ? null : handleClick}
      disabled={disabled}
    />
  ))

const Keypad = ({ handleClick, handleDelete, disabled }) => (
  <Grid
    columns={[buttonSize, buttonSize, buttonSize]}
    rows={[buttonSize, buttonSize, buttonSize, '50px']}
    justifyContent="center"
    gap="small"
    margin="small"
  >
    <Buttons handleClick={handleClick} disabled={disabled} />
    <Key label="" number="*" index={10} disabled={disabled} />
    <Key label="" number={0} index={11} disabled={disabled} />
    <Key
      label=""
      number={'\u232B'}
      index={10}
      handleClick={handleDelete}
      disabled={disabled}
    />
  </Grid>
)

export default Keypad
