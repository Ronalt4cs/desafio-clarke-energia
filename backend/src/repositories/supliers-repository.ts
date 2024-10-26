import { Suplier } from '@prisma/client'

export interface SupliersRepository {
  fetchSupliersByConsumption(consumption: number, page?: number, limit?: number): Promise<Suplier[]>
}