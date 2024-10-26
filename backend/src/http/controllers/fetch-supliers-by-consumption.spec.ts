import request from 'supertest'
import { app } from '@/app'
import { describe, it, beforeAll, afterAll, expect } from 'vitest'
import { createSupliers } from '@/http/tests/create-supliers'
import { deleteAllSupliers } from '@/http/tests/delete-all-supliers'

describe('Fetch Supliers By Consumption - E2E', () => {
  beforeAll(async () => {
    await app.ready()
    await deleteAllSupliers()
    await createSupliers()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should fetch supliers based on the consumption', async () => {
    const response = await request(app.server)
      .get('/supliers/1500')
      .expect(200)

    expect(response.body).toHaveLength(2)
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: 'Energy Suplier 1' }),
        expect.objectContaining({ name: 'Energy Suplier 3' }),
      ])
    )
  })

  it('should handle decimal consumption values', async () => {
    const response = await request(app.server)
      .get('/supliers/1500.75')
      .expect(200)

    expect(response.body).toHaveLength(2)
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: 'Energy Suplier 1' }),
        expect.objectContaining({ name: 'Energy Suplier 3' }),
      ])
    )
  })

  it('should fetch supliers based on the consumption paginated', async () => {
    const response = await request(app.server)
      .get('/supliers/1500')
      .query({ page: 1, limit: 1 })
      .expect(200)

    expect(response.body).toHaveLength(1)
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: 'Energy Suplier 1' })
      ])
    )
  })
})
