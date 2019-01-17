import express from 'express'
import convert from './converter'

const app = express()
const PORT = 3000

app.get('/api/:value', (req, res) => {
  res.json({ value: convert(req.params.value) })
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}/`)
})

export default app
