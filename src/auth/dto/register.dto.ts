import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateUserDto } from '../../users/dto/create-user.dto';

@InputType()
export class RegisterDto extends CreateUserDto {
  @Field({ nullable: false })
  @IsNotEmpty()
  @IsString()
  password_confirmation: string;
}
