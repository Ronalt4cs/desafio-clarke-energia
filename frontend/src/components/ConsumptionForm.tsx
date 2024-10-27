import { useState } from 'react';

type Props = {
  onSubmit: (consumption: number) => void;
};

export default function ConsumptionForm({ onSubmit }: Props) {
  const [consumption, setConsumption] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const consumptionValue = parseFloat(consumption);
    if (consumptionValue > 0) {
      onSubmit(consumptionValue);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-2 gap-1 w-full flex flex-col md:flex-row justify-center items-center">
      <input
        type="number"
        value={consumption}
        onChange={(e) => setConsumption(e.target.value)}
        placeholder="Digite o consumo mensal em kWh"
        className="border p-3 rounded-full min-w-[300px] focus:border-blue-300 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-green-400 text-slate-950 p-3 rounded-full hover:bg-green-500 min-w-[300px]"
      >
        Encontrar Fornecedores
      </button>
    </form>
  );
}
