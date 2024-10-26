import { z } from 'zod'

export const fetchSupliersByConsumptionParamsSchema = z.object({
  consumption: z
    .string()
    .transform((val) => parseFloat(val)) // Transforma o valor da string para número
    .refine((val) => !isNaN(val) && val > 0, {
      message: 'Consumption must be a positive number',
    }),
})

export const fetchSupliersByConsumptionQuerySchema = z.object({
  page: z
    .string()
    .transform((val) => parseInt(val, 10))
    .refine((val) => !isNaN(val) && val > 0, {
      message: 'Page must be a positive integer',
    })
    .default('1'),
  limit: z
    .string()
    .transform((val) => parseInt(val, 10))
    .refine((val) => !isNaN(val) && val > 0, {
      message: 'Page must be a positive integer',
    })
    .default('10'),
})
