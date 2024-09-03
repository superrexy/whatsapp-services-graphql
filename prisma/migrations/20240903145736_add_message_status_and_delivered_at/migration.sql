-- CreateEnum
CREATE TYPE "MessageStatus" AS ENUM ('sent', 'failed');

-- AlterTable
ALTER TABLE "message_history" ADD COLUMN     "delivered_at" TIMESTAMP(3),
ADD COLUMN     "status" "MessageStatus" NOT NULL DEFAULT 'sent';
