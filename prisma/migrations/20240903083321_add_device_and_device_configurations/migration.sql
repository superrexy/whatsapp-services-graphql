-- CreateEnum
CREATE TYPE "DeviceStatus" AS ENUM ('connected', 'disconnected', 'waiting_for_qr_scan', 'loading');

-- CreateTable
CREATE TABLE "devices" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "status" "DeviceStatus" NOT NULL DEFAULT 'waiting_for_qr_scan',
    "token" TEXT NOT NULL,
    "last_seen" TIMESTAMP(3),
    "disconnected_at" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "devices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "device_configurations" (
    "id" SERIAL NOT NULL,
    "device_id" INTEGER NOT NULL,
    "is_delayed_on_send" BOOLEAN NOT NULL DEFAULT false,
    "delay_on_send" INTEGER,
    "notify_when_disconnect" BOOLEAN NOT NULL DEFAULT false,
    "notify_when_connect" BOOLEAN NOT NULL DEFAULT false,
    "notify_when_error" BOOLEAN NOT NULL DEFAULT false,
    "telegram_chat_id" TEXT,
    "telegram_bot_token" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "device_configurations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "device_configurations_device_id_key" ON "device_configurations"("device_id");

-- AddForeignKey
ALTER TABLE "devices" ADD CONSTRAINT "devices_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "device_configurations" ADD CONSTRAINT "device_configurations_device_id_fkey" FOREIGN KEY ("device_id") REFERENCES "devices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
