import { env } from '@/env'
import { InvalidConsumptionValueError } from '@/services/errors/invalidate-consumption-value-error'
import { FastifyReply, FastifyRequest } from 'fastify'
import { ZodError } from 'zod'

export function errorHandler(error: Error, _: FastifyRequest, reply: FastifyReply) {
  if (error instanceof ZodError) {
    console.log('error handler =======>', error);

    return reply.status(400).send({ message: 'Erro de validação', issues: error.format() })
  }

  if (error instanceof InvalidConsumptionValueError) {
    return reply.status(400).send({ messge: error.message })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // ToDo: Here we should log to an external tool like DataDog/NewRelic/Sentry
  }

  return reply.status(500).send({ message: 'Internal server error.' })
}
