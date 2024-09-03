import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Authenticated } from '../common/decorators/authenticated.decorators';
import { CurrentUser } from '../common/decorators/current-user.decorators';
import { DevicesService } from './devices.service';
import { CreateDeviceInput } from './dto/create-device.input';
import { UpdateDeviceInput } from './dto/update-device.input';
import { DeviceEntity } from './entities/device.entity';

@Resolver(() => DeviceEntity)
export class DevicesResolver {
  constructor(private readonly devicesService: DevicesService) {}

  @Authenticated()
  @Mutation(() => DeviceEntity)
  async createDevice(
    @Args('createDeviceInput') createDeviceInput: CreateDeviceInput,
    @CurrentUser('id') userId: number,
  ) {
    const data = await this.devicesService.create(createDeviceInput, userId);
    return new DeviceEntity(data);
  }

  @Authenticated()
  @Query(() => [DeviceEntity], { name: 'devices' })
  async findAll(@CurrentUser('id') userId: number) {
    return await this.devicesService
      .findAll(userId)
      .then((devices) => devices.map((device) => new DeviceEntity(device)));
  }

  @Authenticated()
  @Query(() => DeviceEntity, { name: 'device' })
  async findOne(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser('id') userId: number,
  ) {
    const data = await this.devicesService.findOne(id, userId);
    return new DeviceEntity({
      ...data,
      deviceConfigurations: data.DeviceConfigurations,
    });
  }

  @Authenticated()
  @Mutation(() => DeviceEntity)
  async updateDevice(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateDeviceInput') updateDeviceInput: UpdateDeviceInput,
    @CurrentUser('id') userId: number,
  ) {
    const data = await this.devicesService.update(
      id,
      userId,
      updateDeviceInput,
    );
    return new DeviceEntity(data);
  }

  @Authenticated()
  @Mutation(() => DeviceEntity)
  async removeDevice(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser('id') userId: number,
  ) {
    const data = await this.devicesService.remove(id, userId);
    return new DeviceEntity(data);
  }
}
