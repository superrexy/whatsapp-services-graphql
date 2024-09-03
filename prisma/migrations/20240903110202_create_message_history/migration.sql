-- CreateTable
CREATE TABLE "message_history" (
    "id" SERIAL NOT NULL,
    "device_id" INTEGER NOT NULL,
    "target_number" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "message_history_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "message_history" ADD CONSTRAINT "message_history_device_id_fkey" FOREIGN KEY ("device_id") REFERENCES "devices"("id") ON DELETE CASCADE ON UPDATE CASCADE;
