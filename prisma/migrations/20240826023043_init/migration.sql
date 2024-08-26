-- CreateTable
CREATE TABLE "RSVP" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT,
    "email" TEXT,
    "name" TEXT,

    CONSTRAINT "RSVP_pkey" PRIMARY KEY ("id")
);
