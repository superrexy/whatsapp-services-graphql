import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DeviceWhereUniqueInput } from './device-where-unique.input';
import { Type } from 'class-transformer';
import { DeviceUpdateWithoutUserInput } from './device-update-without-user.input';

@InputType()
export class DeviceUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => DeviceWhereUniqueInput, {nullable:false})
    @Type(() => DeviceWhereUniqueInput)
    where!: Prisma.AtLeast<DeviceWhereUniqueInput, 'id'>;

    @Field(() => DeviceUpdateWithoutUserInput, {nullable:false})
    @Type(() => DeviceUpdateWithoutUserInput)
    data!: DeviceUpdateWithoutUserInput;
}
