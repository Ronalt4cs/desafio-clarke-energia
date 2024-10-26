export class InvalidConsumptionValueError extends Error {
  constructor() {
    super('O valor do consumo deve ser maior que zero')
  }
}