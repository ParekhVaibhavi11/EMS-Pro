-- AlterTable
ALTER TABLE "leaves" ADD COLUMN     "approvedAt" TIMESTAMP(3),
ADD COLUMN     "approvedBy" TEXT,
ADD COLUMN     "approvedRole" TEXT;
