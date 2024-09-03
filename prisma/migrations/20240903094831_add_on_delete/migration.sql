-- DropForeignKey
ALTER TABLE "device_configurations" DROP CONSTRAINT "device_configurations_device_id_fkey";

-- AddForeignKey
ALTER TABLE "device_configurations" ADD CONSTRAINT "device_configurations_device_id_fkey" FOREIGN KEY ("device_id") REFERENCES "devices"("id") ON DELETE CASCADE ON UPDATE CASCADE;
