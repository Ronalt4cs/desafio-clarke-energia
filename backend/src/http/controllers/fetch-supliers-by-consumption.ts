import { FastifyReply, FastifyRequest } from 'fastify'
import { fetchSupliersByConsumptionParamsSchema, fetchSupliersByConsumptionQuerySchema } from '../helpers/fetch-supliers-schemas'
import { MakeFetchSupliersByConsumption } from '@/services/factories/make-fetch-supliers-by-comsumption-service'

export async function fetchSupliersByConsumption(request: FastifyRequest, reply: FastifyReply) {
  const { consumption } = fetchSupliersByConsumptionParamsSchema.parse(request.params)
  const { page, limit } = fetchSupliersByConsumptionQuerySchema.parse(request.query)

  const makeFetchSupliersByConsumptionService = MakeFetchSupliersByConsumption()
  const { supliers } = await makeFetchSupliersByConsumptionService.execute({ consumption, page, limit })

  return reply.status(200).send(supliers)
}