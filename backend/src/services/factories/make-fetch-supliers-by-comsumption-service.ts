import { PrismaSupliersRepository } from '@/repositories/prisma/prisma-supliers-repository'
import { FetchSupliersByConsumptionService } from '../fetch-supliers-by-consumption'

export function MakeFetchSupliersByConsumption() {
  const supliersRepository = new PrismaSupliersRepository()
  const fetchSupliersByConsumptionService = new FetchSupliersByConsumptionService(supliersRepository)

  return fetchSupliersByConsumptionService
}