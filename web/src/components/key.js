import React from 'react'
import { Button } from 'grommet'

const Key = ({ label, number, index, handleClick }) => (
  <Button
    id={number}
    key={index}
    gridArea={`(${index % 3}, ${Math.floor(index / 3)})`}
    onClick={handleClick}
    label={
      <>
        <span style={{ fontSize: '28px' }}>{number}</span>
        <br />
        {label}
      </>
    }
  />
)

export default Key
