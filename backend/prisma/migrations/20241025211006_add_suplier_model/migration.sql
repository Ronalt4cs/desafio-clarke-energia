-- CreateTable
CREATE TABLE "Suplier" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "state_of_origin" TEXT NOT NULL,
    "cost_per_kwh" DOUBLE PRECISION NOT NULL,
    "min_kwh_limit" DOUBLE PRECISION NOT NULL,
    "average_customer_rating" DOUBLE PRECISION NOT NULL,
    "total_customers" INTEGER NOT NULL,

    CONSTRAINT "Suplier_pkey" PRIMARY KEY ("id")
);
