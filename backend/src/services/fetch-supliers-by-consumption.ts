import { SupliersRepository } from '@/repositories/supliers-repository'
import { InvalidConsumptionValueError } from './errors/invalidate-consumption-value-error'
import { Suplier } from '@prisma/client'

export interface FetchSupliersByConsumptionServiceRequest {
  consumption: number
  page?: number
  limit?: number
}

interface FetchSupliersByConsumptionServiceResponse {
  supliers: Suplier[]
}

export class FetchSupliersByConsumptionService {
  constructor(private supliesRepository: SupliersRepository) { }

  async execute({
    consumption,
    page,
    limit
  }: FetchSupliersByConsumptionServiceRequest): Promise<FetchSupliersByConsumptionServiceResponse> {

    const currentPage = page || 1
    const currentLimit = limit || 10

    if (consumption <= 0) {
      throw new InvalidConsumptionValueError()
    }

    const supliers = await this.supliesRepository.fetchSupliersByConsumption(consumption, currentPage, currentLimit)
    return { supliers }
  }
}