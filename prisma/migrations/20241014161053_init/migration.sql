-- CreateTable
CREATE TABLE "clients" (
    "id" SERIAL NOT NULL,
    "create_time" DATE,
    "nombre" VARCHAR(255),
    "apellido" VARCHAR(255),
    "direccion" VARCHAR(255),
    "email" VARCHAR(255),
    "telefono" VARCHAR(20),
    "cuil" VARCHAR(20),
    "estado" INTEGER DEFAULT 1,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);
