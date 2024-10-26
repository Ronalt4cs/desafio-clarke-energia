import { Prisma, Suplier } from '@prisma/client'
import { SupliersRepository } from '../supliers-repository'
import { randomUUID } from 'crypto'

export class FakeSupliersRepository implements SupliersRepository {
  public supliers: Suplier[] = []

  async fetchSupliersByConsumption(consumption: number, page: number, limit: number): Promise<Suplier[]> {
    const supliersFound: Suplier[] = []
    const skip = (page - 1) * 10
    const take = limit

    for (let i = 0; i < this.supliers.length; i++) {
      this.supliers.find(suplier => {
        return suplier.min_kwh_limit < consumption && supliersFound.push(suplier)
      })
    }

    return supliersFound.slice(skip, take)
  }

  async createSuplier(suplier: Prisma.SuplierUncheckedCreateInput) {
    return this.supliers.push({
      id: randomUUID(),
      ...suplier
    })
  }
}