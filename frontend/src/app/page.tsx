'use client'
import ConsumptionForm from "@/components/ConsumptionForm";
import SuplierCard from "@/components/SuplierCard";
import { useState } from "react";
import { api } from "./lib/api";

type Suplier = {
  name: string;
  logo: string;
  state_of_origin: string;
  cost_per_kwh: number;
  min_kwh_limit: number;
  total_customers: number;
  average_customer_rating: number;
};

export default function Home() {
  const [supliers, setSupliers] = useState<Suplier[]>([]);
  const [showNoSuppliersMessage, setShowNoSuppliersMessage] = useState(false);

  const fetchSupliers = async (consumption: number) => {
    try {
      const { data } = await api.get(`/supliers/${consumption}`);

      if (data.length === 0) {
        setShowNoSuppliersMessage(true);
        setTimeout(() => {
          setShowNoSuppliersMessage(false);
        }, 5000);
      } else {
        return setSupliers(data);
      }

      return setSupliers(data);
    } catch (error) {
      console.error('Error fetching suppliers:', error);
      throw error;
    }
  };

  return (
    <div className="container mx-auto flex flex-col justify-center items-center">
      <h1 className="mb-1 max-w-80 font-semibold text-lg text-center md:text-2xl md:max-w-full">
        Encontre fornecedores para economizar sua energia
      </h1>
      <ConsumptionForm onSubmit={fetchSupliers} />
      {
        showNoSuppliersMessage && (
          <p className="text-gray-500 mt-4">Nenhum fornecedor encontrado.</p>
        )
      }
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {supliers.map((suplier, index) => (
          <SuplierCard
            key={index}
            name={suplier.name}
            logo={suplier.logo}
            state={suplier.state_of_origin}
            costPerKwh={suplier.cost_per_kwh}
            minKwhLimit={suplier.min_kwh_limit}
            totalCustomers={suplier.total_customers}
            rating={suplier.average_customer_rating}
          />
        ))}
      </div>
    </div>
  );
}
