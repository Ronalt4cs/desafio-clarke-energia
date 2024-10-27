import fastify from 'fastify'
import { appRoutes } from './http/routes'
import { errorHandler } from './http/middlewares/error-handler'
import cors from '@fastify/cors'
import { env } from './env'

export const app = fastify()

app.register(cors, {
  origin: '*',
  methods: ['GET']
})

app.register(appRoutes)

app.setErrorHandler(errorHandler)
