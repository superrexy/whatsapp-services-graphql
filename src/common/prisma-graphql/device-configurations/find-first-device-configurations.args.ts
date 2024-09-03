import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceConfigurationsWhereInput } from './device-configurations-where.input';
import { Type } from 'class-transformer';
import { DeviceConfigurationsOrderByWithRelationInput } from './device-configurations-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DeviceConfigurationsWhereUniqueInput } from './device-configurations-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DeviceConfigurationsScalarFieldEnum } from './device-configurations-scalar-field.enum';

@ArgsType()
export class FindFirstDeviceConfigurationsArgs {

    @Field(() => DeviceConfigurationsWhereInput, {nullable:true})
    @Type(() => DeviceConfigurationsWhereInput)
    where?: DeviceConfigurationsWhereInput;

    @Field(() => [DeviceConfigurationsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DeviceConfigurationsOrderByWithRelationInput>;

    @Field(() => DeviceConfigurationsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DeviceConfigurationsWhereUniqueInput, 'id' | 'device_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DeviceConfigurationsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DeviceConfigurationsScalarFieldEnum>;
}
