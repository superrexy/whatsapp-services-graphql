import { Field, Int, ObjectType } from '@nestjs/graphql';
import { $Enums, Device, DeviceConfigurations } from '@prisma/client';

@ObjectType()
export class DeviceConfigurationEntity implements DeviceConfigurations {
  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  device_id: number;

  @Field({ nullable: true })
  is_delayed_on_send: boolean;

  @Field({ nullable: true })
  delay_on_send: number;

  @Field({ nullable: true })
  notify_when_disconnect: boolean;

  @Field({ nullable: true })
  notify_when_connect: boolean;

  @Field({ nullable: true })
  notify_when_error: boolean;

  @Field({ nullable: true })
  telegram_chat_id: string;

  @Field({ nullable: true })
  telegram_bot_token: string;

  @Field({ nullable: true })
  created_at: Date;

  @Field({ nullable: true })
  updated_at: Date;
}

@ObjectType()
export class DeviceEntity implements Device {
  constructor(partial: Partial<DeviceEntity>) {
    Object.assign(this, partial);
  }

  @Field(() => Int, {
    description: 'Unique identifier for the device',
    nullable: false,
  })
  id: number;

  @Field(() => String, { description: 'Name of the device', nullable: false })
  name: string;

  @Field(() => String, {
    description: 'Phone number of the device',
    nullable: false,
  })
  phone_number: string;

  @Field(() => Int, {
    description: 'Unique identifier of the user who owns the device',
    nullable: false,
  })
  user_id: number;

  @Field(() => String, {
    description: 'Status of the device',
    nullable: false,
  })
  status: $Enums.DeviceStatus;

  @Field(() => String, {
    description: 'Token of the device for authentication REST API',
    nullable: false,
  })
  token: string;

  @Field(() => Date, {
    description: 'Last time the device was seen online',
    nullable: false,
  })
  last_seen: Date;

  @Field(() => Date, {
    description: 'Last time the device was disconnected',
    nullable: false,
  })
  disconnected_at: Date;

  @Field(() => DeviceConfigurationEntity, {
    description: 'Configuration of the device',
    nullable: true,
  })
  deviceConfigurations: DeviceConfigurationEntity;

  @Field(() => Date, {
    description: 'Time the device was created',
    nullable: false,
  })
  created_at: Date;

  @Field(() => Date, {
    description: 'Time the device was last updated',
    nullable: false,
  })
  updated_at: Date;
}
