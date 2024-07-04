-- CreateTable
CREATE TABLE "Chall" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "flag" TEXT NOT NULL,
    "points" INTEGER NOT NULL,
    "public" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Chall_pkey" PRIMARY KEY ("id")
);
