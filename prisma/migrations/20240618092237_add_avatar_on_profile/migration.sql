-- AlterTable
ALTER TABLE "users" ADD COLUMN     "avatar" TEXT;

-- CreateIndex
CREATE INDEX "access_tokens_session_id_idx" ON "access_tokens"("session_id");
