import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';

@InputType()
export class CreateDeviceConfig {
  @Field({ nullable: true })
  @IsOptional()
  @IsBoolean()
  is_delayed_on_send?: boolean;

  @Field({ nullable: true })
  @IsOptional()
  @IsNumber()
  delay_on_send?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsBoolean()
  notify_when_disconnect?: boolean;

  @Field({ nullable: true })
  @IsOptional()
  @IsBoolean()
  notify_when_connect?: boolean;

  @Field({ nullable: true })
  @IsOptional()
  @IsBoolean()
  notify_when_error?: boolean;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  telegram_chat_id?: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  telegram_bot_token?: string;
}

export class UpdateDeviceConfig extends PartialType(CreateDeviceConfig) {}

@InputType()
export class CreateDeviceInput {
  @Field(() => String, { nullable: false })
  @IsNotEmpty()
  @IsString()
  name: string;

  @Field(() => String, { nullable: false })
  @IsNotEmpty()
  @IsString()
  phone_number: string;

  @Field(() => CreateDeviceConfig, { nullable: true })
  @ValidateNested()
  @Type(() => CreateDeviceConfig)
  config?: CreateDeviceConfig;
}
