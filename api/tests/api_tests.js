/* eslint no-undef: 0 */
import request from 'supertest'
import { assert } from 'chai'
import app from '../src/index'

const notFoundMessage = 'This route does not exist. Try: GET /api/phonewords/:value'

describe('/api/phonewords/:value', () => {
  it('Should return expected words if value is valid', () => {
    request(app)
      .get('/api/phonewords/2')
      .expect(200)
      .then(response => {
        assert(response.body[0] === 'a', 'Response is not a')
      })
  })

  it('Should return 400 words if value is not valid', () => {
    request(app)
      .get('/api/phonewords/1')
      .expect(400)
      .then(response => {
        assert(response.body === 'Invalid value. Only numbers with digits 2-9 allowed.', 'Response is incorrect')
      })
  })
})

describe('All other routes', () => {
  it('Should return 404 if route is invalid', () => {
    request(app)
      .get('/api/phonewords/')
      .expect(404)
      .then(response => {
        assert(response.body === notFoundMessage, 'Response message incorrect')
      })
  })

  it('Should return 404 if not GET request', () => {
    request(app)
      .post('/api/phonewords/')
      .send('data=2')
      .expect(404)
      .then(response => {
        assert(response.body === notFoundMessage, 'Response message incorrect')
      })
  })
})
