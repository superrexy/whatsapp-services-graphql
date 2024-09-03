import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DeviceWhereUniqueInput } from './device-where-unique.input';
import { Type } from 'class-transformer';
import { DeviceCreateWithoutUserInput } from './device-create-without-user.input';

@InputType()
export class DeviceCreateOrConnectWithoutUserInput {

    @Field(() => DeviceWhereUniqueInput, {nullable:false})
    @Type(() => DeviceWhereUniqueInput)
    where!: Prisma.AtLeast<DeviceWhereUniqueInput, 'id'>;

    @Field(() => DeviceCreateWithoutUserInput, {nullable:false})
    @Type(() => DeviceCreateWithoutUserInput)
    create!: DeviceCreateWithoutUserInput;
}
