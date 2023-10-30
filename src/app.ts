import fastify from 'fastify'
import cookie, { FastifyCookieOptions } from '@fastify/cookie'
import { transactionRoutes } from './routes/transactions'

export const app = fastify()

app.register(cookie, {
  secret: 'sessionId',
  parseOptions: { maxAge: 1000 * 60 * 60 * 24 * 7 },
} as FastifyCookieOptions)
app.register(transactionRoutes, {
  prefix: 'transactions',
})
