import { registerEnumType } from '@nestjs/graphql';

export enum DeviceStatus {
    connected = "connected",
    disconnected = "disconnected",
    waiting_for_qr_scan = "waiting_for_qr_scan",
    loading = "loading"
}


registerEnumType(DeviceStatus, { name: 'DeviceStatus', description: undefined })
