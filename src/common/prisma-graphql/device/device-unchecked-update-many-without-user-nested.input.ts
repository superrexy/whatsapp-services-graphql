import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceCreateWithoutUserInput } from './device-create-without-user.input';
import { Type } from 'class-transformer';
import { DeviceCreateOrConnectWithoutUserInput } from './device-create-or-connect-without-user.input';
import { DeviceUpsertWithWhereUniqueWithoutUserInput } from './device-upsert-with-where-unique-without-user.input';
import { DeviceCreateManyUserInputEnvelope } from './device-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DeviceWhereUniqueInput } from './device-where-unique.input';
import { DeviceUpdateWithWhereUniqueWithoutUserInput } from './device-update-with-where-unique-without-user.input';
import { DeviceUpdateManyWithWhereWithoutUserInput } from './device-update-many-with-where-without-user.input';
import { DeviceScalarWhereInput } from './device-scalar-where.input';

@InputType()
export class DeviceUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [DeviceCreateWithoutUserInput], {nullable:true})
    @Type(() => DeviceCreateWithoutUserInput)
    create?: Array<DeviceCreateWithoutUserInput>;

    @Field(() => [DeviceCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => DeviceCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<DeviceCreateOrConnectWithoutUserInput>;

    @Field(() => [DeviceUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => DeviceUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<DeviceUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => DeviceCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => DeviceCreateManyUserInputEnvelope)
    createMany?: DeviceCreateManyUserInputEnvelope;

    @Field(() => [DeviceWhereUniqueInput], {nullable:true})
    @Type(() => DeviceWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DeviceWhereUniqueInput, 'id'>>;

    @Field(() => [DeviceWhereUniqueInput], {nullable:true})
    @Type(() => DeviceWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DeviceWhereUniqueInput, 'id'>>;

    @Field(() => [DeviceWhereUniqueInput], {nullable:true})
    @Type(() => DeviceWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DeviceWhereUniqueInput, 'id'>>;

    @Field(() => [DeviceWhereUniqueInput], {nullable:true})
    @Type(() => DeviceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DeviceWhereUniqueInput, 'id'>>;

    @Field(() => [DeviceUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => DeviceUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<DeviceUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [DeviceUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => DeviceUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<DeviceUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [DeviceScalarWhereInput], {nullable:true})
    @Type(() => DeviceScalarWhereInput)
    deleteMany?: Array<DeviceScalarWhereInput>;
}
