import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutDeviceInput } from './user-update-without-device.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutDeviceInput } from './user-create-without-device.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutDeviceInput {

    @Field(() => UserUpdateWithoutDeviceInput, {nullable:false})
    @Type(() => UserUpdateWithoutDeviceInput)
    update!: UserUpdateWithoutDeviceInput;

    @Field(() => UserCreateWithoutDeviceInput, {nullable:false})
    @Type(() => UserCreateWithoutDeviceInput)
    create!: UserCreateWithoutDeviceInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
