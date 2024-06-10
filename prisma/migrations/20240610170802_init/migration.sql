-- CreateTable
CREATE TABLE "info" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "fuel_type" TEXT NOT NULL,

    CONSTRAINT "info_pkey" PRIMARY KEY ("id")
);
