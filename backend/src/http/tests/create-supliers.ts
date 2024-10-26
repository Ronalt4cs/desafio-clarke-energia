import { prisma } from '@/lib/prisma'

export async function createSupliers() {
  await prisma.suplier.createMany({
    data: [
      {
        logo: 'http://example.com/logo1.png',
        name: 'Energy Suplier 1',
        state_of_origin: 'SP',
        cost_per_kwh: 0.5,
        min_kwh_limit: 1000,
        total_customers: 5000,
        average_customer_rating: 4.5,
      },
      {
        logo: 'http://example.com/logo2.png',
        name: 'Energy Suplier 2',
        state_of_origin: 'RJ',
        cost_per_kwh: 0.4,
        min_kwh_limit: 2000,
        total_customers: 3000,
        average_customer_rating: 4.0,
      },
      {
        logo: 'http://example.com/logo3.png',
        name: 'Energy Suplier 3',
        state_of_origin: 'MG',
        cost_per_kwh: 0.6,
        min_kwh_limit: 500,
        total_customers: 1500,
        average_customer_rating: 3.5,
      }
    ],
  })
}