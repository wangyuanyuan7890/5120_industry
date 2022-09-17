-- CreateTable
CREATE TABLE "Material" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "suggestion" TEXT NOT NULL,
    "biodegradable" BOOLEAN NOT NULL,
    "sustainability_score" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Material_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Shop" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "types" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Shop_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShopLocation" (
    "id" SERIAL NOT NULL,
    "address" TEXT NOT NULL,
    "suburb" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "shopId" INTEGER NOT NULL,

    CONSTRAINT "ShopLocation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ShopLocation" ADD CONSTRAINT "ShopLocation_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
