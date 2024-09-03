import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceWhereInput } from './device-where.input';
import { Type } from 'class-transformer';
import { DeviceOrderByWithRelationInput } from './device-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DeviceWhereUniqueInput } from './device-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DeviceScalarFieldEnum } from './device-scalar-field.enum';

@ArgsType()
export class FindFirstDeviceOrThrowArgs {

    @Field(() => DeviceWhereInput, {nullable:true})
    @Type(() => DeviceWhereInput)
    where?: DeviceWhereInput;

    @Field(() => [DeviceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DeviceOrderByWithRelationInput>;

    @Field(() => DeviceWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DeviceWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DeviceScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DeviceScalarFieldEnum>;
}
