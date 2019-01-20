import express from 'express'
import getPhonewords from './getPhonewords'

const app = express()
const PORT = 3000

app.get('/api/phonewords/:value', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  const { value } = req.params
  if (!/^[2-9]+$/g.test(value)) {
    res.status(400).json('Invalid value. Only numbers with digits 2-9 allowed.')
  } else {
    res.send(getPhonewords(value))
  }
})

app.all('*', (req, res) => {
  res.status(404).json('This route does not exist. Try: GET /api/phonewords/:value')
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}/`)
})

export default app
