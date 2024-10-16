-- AlterTable
ALTER TABLE "RSVP" ADD COLUMN     "isAproved" BOOLEAN DEFAULT false,
ALTER COLUMN "createdAt" DROP NOT NULL;

-- CreateTable
CREATE TABLE "OrderSong" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT,
    "email" TEXT,
    "name" TEXT,
    "youtubeUrl" TEXT,
    "isAproved" BOOLEAN DEFAULT false,

    CONSTRAINT "OrderSong_pkey" PRIMARY KEY ("id")
);
