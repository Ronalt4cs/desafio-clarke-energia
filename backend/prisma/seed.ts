import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.suplier.createMany({
    data: [
      {
        name: 'EnergyCo',
        logo: 'https://i.pinimg.com/564x/d9/5c/e7/d95ce7b9ac8547c1b8f6b740f453fa33.jpg',
        state_of_origin: 'São Paulo',
        cost_per_kwh: 0.45,
        min_kwh_limit: 1000,
        total_customers: 200,
        average_customer_rating: 4.5,
      },
      {
        name: 'PowerHouse',
        logo: 'https://i.pinimg.com/564x/cc/1a/d3/cc1ad31734a57ac07ed560aa491709d7.jpg',
        state_of_origin: 'Rio de Janeiro',
        cost_per_kwh: 0.40,
        min_kwh_limit: 1500,
        total_customers: 300,
        average_customer_rating: 4.2,
      },
      {
        name: 'EcoPower',
        logo: 'https://i.pinimg.com/564x/7e/d0/61/7ed061390f3fc441b399d83c8522561f.jpg',
        state_of_origin: 'Minas Gerais',
        cost_per_kwh: 0.55,
        min_kwh_limit: 500,
        total_customers: 100,
        average_customer_rating: 3.8,
      },
      {
        name: 'GreenEnergy',
        logo: 'https://i.pinimg.com/564x/c8/e7/87/c8e7874bbcd66032f067a41b5efdaff1.jpg',
        state_of_origin: 'Bahia',
        cost_per_kwh: 0.60,
        min_kwh_limit: 1200,
        total_customers: 150,
        average_customer_rating: 4.1,
      },
      {
        name: 'VoltPower',
        logo: 'https://i.pinimg.com/564x/99/d5/cf/99d5cfbeea94fcef744c53c16b0a061e.jpg',
        state_of_origin: 'Pernambuco',
        cost_per_kwh: 0.50,
        min_kwh_limit: 800,
        total_customers: 180,
        average_customer_rating: 3.9,
      },
      {
        name: 'SunVolt',
        logo: 'https://i.pinimg.com/564x/42/bc/9b/42bc9b958ccc25d79fe592c25f6a7797.jpg',
        state_of_origin: 'Paraná',
        cost_per_kwh: 0.47,
        min_kwh_limit: 700,
        total_customers: 220,
        average_customer_rating: 4.3,
      },
    ],
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
