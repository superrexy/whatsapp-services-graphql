import { InputType, PartialType } from '@nestjs/graphql';
import { CreateUserDto } from './create-user.dto';

@InputType({ description: 'Update User Input' })
export class UpdateUserDto extends PartialType(CreateUserDto) {}
