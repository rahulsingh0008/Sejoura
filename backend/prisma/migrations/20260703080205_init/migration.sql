-- CreateTable
CREATE TABLE "GuestQuery" (
    "id" SERIAL NOT NULL,
    "guestName" TEXT NOT NULL,
    "query" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GuestQuery_pkey" PRIMARY KEY ("id")
);
