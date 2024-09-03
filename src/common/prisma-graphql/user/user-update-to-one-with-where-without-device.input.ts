import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutDeviceInput } from './user-update-without-device.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutDeviceInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutDeviceInput, {nullable:false})
    @Type(() => UserUpdateWithoutDeviceInput)
    data!: UserUpdateWithoutDeviceInput;
}
