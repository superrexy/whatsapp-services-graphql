import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { CreateDeviceInput, UpdateDeviceConfig } from './create-device.input';

@InputType()
export class UpdateDeviceInput extends PartialType(CreateDeviceInput) {
  @Field(() => String, { nullable: true })
  @ValidateNested()
  @Type(() => UpdateDeviceConfig)
  config?: UpdateDeviceConfig;
}
