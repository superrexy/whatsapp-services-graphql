import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutDeviceInput } from './user-create-without-device.input';

@InputType()
export class UserCreateOrConnectWithoutDeviceInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutDeviceInput, {nullable:false})
    @Type(() => UserCreateWithoutDeviceInput)
    create!: UserCreateWithoutDeviceInput;
}
