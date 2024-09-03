import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { StringHelper } from '../common/helpers/string.helpers';
import { CreateDeviceInput } from './dto/create-device.input';
import { UpdateDeviceInput } from './dto/update-device.input';

@Injectable()
export class DevicesService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createDeviceInput: CreateDeviceInput, userId: number) {
    const { name, phone_number, config } = createDeviceInput;
    return await this.prismaService.device.create({
      data: {
        name,
        phone_number,
        user_id: userId,
        token: StringHelper.random(12),
        DeviceConfigurations: {
          create: {
            ...config,
          },
        },
      },
    });
  }

  async findAll(userId: number) {
    return await this.prismaService.device.findMany({
      where: {
        user_id: userId,
      },
    });
  }

  async findOne(id: number, userId: number, throwException = true) {
    const data = await this.prismaService.device.findUnique({
      where: { id, user_id: userId },
      include: {
        DeviceConfigurations: true,
      },
    });

    if (!data && throwException) throw new NotFoundException();

    return data;
  }

  async update(
    id: number,
    userId: number,
    updateDeviceInput: UpdateDeviceInput,
  ) {
    const { name, phone_number, config } = updateDeviceInput;

    const device = await this.findOne(id, userId);

    return await this.prismaService.device.update({
      where: { id: device.id },
      data: {
        name,
        phone_number,
        DeviceConfigurations: {
          update: {
            where: {
              device_id: id,
            },
            data: {
              ...config,
            },
          },
        },
      },
    });
  }

  async remove(id: number, userId: number) {
    const device = await this.findOne(id, userId);

    return await this.prismaService.device.delete({
      where: { id: device.id },
    });
  }
}
