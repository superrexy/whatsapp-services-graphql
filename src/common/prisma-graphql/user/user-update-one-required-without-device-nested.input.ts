import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDeviceInput } from './user-create-without-device.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutDeviceInput } from './user-create-or-connect-without-device.input';
import { UserUpsertWithoutDeviceInput } from './user-upsert-without-device.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutDeviceInput } from './user-update-to-one-with-where-without-device.input';

@InputType()
export class UserUpdateOneRequiredWithoutDeviceNestedInput {

    @Field(() => UserCreateWithoutDeviceInput, {nullable:true})
    @Type(() => UserCreateWithoutDeviceInput)
    create?: UserCreateWithoutDeviceInput;

    @Field(() => UserCreateOrConnectWithoutDeviceInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDeviceInput)
    connectOrCreate?: UserCreateOrConnectWithoutDeviceInput;

    @Field(() => UserUpsertWithoutDeviceInput, {nullable:true})
    @Type(() => UserUpsertWithoutDeviceInput)
    upsert?: UserUpsertWithoutDeviceInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutDeviceInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutDeviceInput)
    update?: UserUpdateToOneWithWhereWithoutDeviceInput;
}
