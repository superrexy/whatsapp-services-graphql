import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

@InputType({ description: 'Create User Input' })
export class CreateUserDto {
  @Field({ nullable: true })
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field({ nullable: true })
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Field({ nullable: true })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
