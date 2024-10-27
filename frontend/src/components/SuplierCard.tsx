import Image from "next/image";

type SupplierProps = {
  name: string;
  logo: string;
  state: string;
  costPerKwh: number;
  minKwhLimit: number;
  totalCustomers: number;
  rating: number;
};

export default function SupplierCard({
  name,
  logo,
  state,
  costPerKwh,
  minKwhLimit,
  totalCustomers,
  rating,
}: SupplierProps) {
  return (
    <div className="border rounded p-4 flex flex-row items-start max-xl:flex max-xl:flex-col max-xl:gap-2 max-md:min-w-80">
      <div className="flex items-center mb-4 md:mb-0">
        <Image src={logo} alt={`${name} logo`} width={80} height={80} className="w-20 h-20 mr-4" />
        <h2 className="text-lg font-bold">{name}</h2>
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:justify-between md:ml-4">
        <div className="flex flex-col mb-2 md:mb-0">
          <p className="font-medium">Estado: {state}</p>
          <p className="font-medium">Custo por kWh: R${costPerKwh}</p>
          <p className="font-medium">Mínimo de kWh: {minKwhLimit}</p>
        </div>
        <div className="flex flex-col mb-2 md:mb-0">
          <p className="font-medium">Clientes: {totalCustomers}</p>
          <p className="font-medium">Nota: {rating}</p>
        </div>
      </div>
    </div>
  );
}
