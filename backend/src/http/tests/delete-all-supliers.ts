import { prisma } from '@/lib/prisma'

export async function deleteAllSupliers() {
  await prisma.suplier.deleteMany()
}