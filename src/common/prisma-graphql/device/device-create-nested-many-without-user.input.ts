import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceCreateWithoutUserInput } from './device-create-without-user.input';
import { Type } from 'class-transformer';
import { DeviceCreateOrConnectWithoutUserInput } from './device-create-or-connect-without-user.input';
import { DeviceCreateManyUserInputEnvelope } from './device-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DeviceWhereUniqueInput } from './device-where-unique.input';

@InputType()
export class DeviceCreateNestedManyWithoutUserInput {

    @Field(() => [DeviceCreateWithoutUserInput], {nullable:true})
    @Type(() => DeviceCreateWithoutUserInput)
    create?: Array<DeviceCreateWithoutUserInput>;

    @Field(() => [DeviceCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => DeviceCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<DeviceCreateOrConnectWithoutUserInput>;

    @Field(() => DeviceCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => DeviceCreateManyUserInputEnvelope)
    createMany?: DeviceCreateManyUserInputEnvelope;

    @Field(() => [DeviceWhereUniqueInput], {nullable:true})
    @Type(() => DeviceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DeviceWhereUniqueInput, 'id'>>;
}
