import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

@InputType()
export class SendMessageDto {
  @Field(() => String, { nullable: false })
  @IsNotEmpty()
  @IsString()
  target_number: string;

  @Field(() => String, { nullable: false })
  @IsNotEmpty()
  @IsString()
  message: string;

  @Field(() => Int, { nullable: false })
  @IsNotEmpty()
  @IsNumber()
  device_id: number;
}
