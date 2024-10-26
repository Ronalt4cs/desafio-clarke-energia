import { FastifyInstance } from 'fastify'
import { fetchSupliersByConsumption } from './controllers/fetch-supliers-by-consumption'

export async function appRoutes(app: FastifyInstance) {
  app.get('/hello', () => { return 'hello world' })
  app.get('/supliers/:consumption', fetchSupliersByConsumption)
}
