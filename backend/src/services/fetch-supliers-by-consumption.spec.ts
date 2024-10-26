import { FakeSupliersRepository } from '@/repositories/fakes/fake-supliers-repository'
import { FetchSupliersByConsumptionService } from './fetch-supliers-by-consumption'
import { beforeEach, describe, it, expect } from 'vitest'
import { InvalidConsumptionValueError } from './errors/invalidate-consumption-value-error'

let supliersRepository: FakeSupliersRepository
let sut: FetchSupliersByConsumptionService

describe('Fetch supliers by consumption', () => {
  beforeEach(() => {
    supliersRepository = new FakeSupliersRepository()
    sut = new FetchSupliersByConsumptionService(supliersRepository)
  })

  it('should be able to fetch supliers by consumption', async () => {
    await supliersRepository.createSuplier({
      logo: 'fakeLogoURL',
      name: 'Fake suplier',
      state_of_origin: 'fake state',
      cost_per_kwh: 1,
      min_kwh_limit: 1000,
      total_customers: 1,
      average_customer_rating: 1,
    })

    const { supliers } = await sut.execute({ consumption: 1100 })
    expect(supliers).toHaveLength(1)
  })

  it('should be able to return multiple supliers', async () => {
    await supliersRepository.createSuplier({
      logo: 'fakeLogoURL1',
      name: 'Fake suplier 1',
      state_of_origin: 'fake state',
      cost_per_kwh: 1,
      min_kwh_limit: 1000,
      total_customers: 1,
      average_customer_rating: 1,
    })

    await supliersRepository.createSuplier({
      logo: 'fakeLogoURL2',
      name: 'Fake suplier 2',
      state_of_origin: 'fake state',
      cost_per_kwh: 0.8,
      min_kwh_limit: 500,
      total_customers: 5,
      average_customer_rating: 4.5,
    })

    const { supliers } = await sut.execute({ consumption: 1100 })
    expect(supliers).toHaveLength(2)
  })

  it('should be able to fetch supliers by consumption paginated', async () => {
    await supliersRepository.createSuplier({
      logo: 'fakeLogoURL1',
      name: 'Fake suplier 1',
      state_of_origin: 'fake state',
      cost_per_kwh: 1,
      min_kwh_limit: 1000,
      total_customers: 1,
      average_customer_rating: 1,
    })

    await supliersRepository.createSuplier({
      logo: 'fakeLogoURL2',
      name: 'Fake suplier 2',
      state_of_origin: 'fake state',
      cost_per_kwh: 0.8,
      min_kwh_limit: 500,
      total_customers: 5,
      average_customer_rating: 4.5,
    })

    const { supliers } = await sut.execute({ consumption: 1220, page: 1, limit: 1 })
    expect(supliers).toHaveLength(1)
  })

  it('should not be able to fetch supliers if consumption is lower than or equal to 0', async () => {
    await expect(sut.execute(({ consumption: -1100 }))).rejects.toBeInstanceOf(InvalidConsumptionValueError)
    await expect(sut.execute({ consumption: 0 })).rejects.toBeInstanceOf(InvalidConsumptionValueError)
  })

  it('should return an empty array if no supliers can satisfy the consumption', async () => {
    await supliersRepository.createSuplier({
      logo: 'fakeLogoURL',
      name: 'Fake suplier',
      state_of_origin: 'fake state',
      cost_per_kwh: 1,
      min_kwh_limit: 5000,
      total_customers: 1,
      average_customer_rating: 1,
    })

    const { supliers } = await sut.execute({ consumption: 3000 })
    expect(supliers).toHaveLength(0)
  })

  it('should handle very high consumption values', async () => {
    await supliersRepository.createSuplier({
      logo: 'fakeLogoURL',
      name: 'Fake suplier',
      state_of_origin: 'fake state',
      cost_per_kwh: 1,
      min_kwh_limit: 100000,
      total_customers: 1,
      average_customer_rating: 5,
    })

    const { supliers } = await sut.execute({ consumption: 1000000 })
    expect(supliers).toHaveLength(1)
  })

  it('should be able to fetch supliers with decimal consumption values', async () => {
    await supliersRepository.createSuplier({
      logo: 'fakeLogoURL',
      name: 'Decimal Suplier',
      state_of_origin: 'fake state',
      cost_per_kwh: 0.5,
      min_kwh_limit: 1500.5,
      total_customers: 10,
      average_customer_rating: 4.2,
    })

    const { supliers } = await sut.execute({ consumption: 2000.75 })
    expect(supliers).toHaveLength(1)
  })

  it('should not fetch supliers if decimal consumption is below min limit', async () => {
    await supliersRepository.createSuplier({
      logo: 'fakeLogoURL',
      name: 'Decimal Suplier',
      state_of_origin: 'fake state',
      cost_per_kwh: 0.5,
      min_kwh_limit: 2000.5,
      total_customers: 10,
      average_customer_rating: 4.2,
    })

    const { supliers } = await sut.execute({ consumption: 2000.4 })
    expect(supliers).toHaveLength(0)
  })
})