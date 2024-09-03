import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType({ description: 'Login Payload' })
export class LoginDto {
  @Field({ nullable: false })
  @IsNotEmpty()
  @IsString()
  email: string;

  @Field({ nullable: false })
  @IsNotEmpty()
  @IsString()
  password: string;
}
