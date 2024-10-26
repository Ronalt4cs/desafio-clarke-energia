import { prisma } from '@/lib/prisma'
import { SupliersRepository } from '../supliers-repository'
import { Suplier } from '@prisma/client'

export class PrismaSupliersRepository implements SupliersRepository {
  async fetchSupliersByConsumption(consumption: number, page: number, limit: number): Promise<Suplier[]> {
    const skip = (page - 1) * 10
    const take = limit

    return await prisma.suplier.findMany({
      where: {
        min_kwh_limit: { lt: consumption }
      },
      skip,
      take
    })
  }
}
