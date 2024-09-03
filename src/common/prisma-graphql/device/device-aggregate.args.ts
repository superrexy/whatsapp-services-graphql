import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceWhereInput } from './device-where.input';
import { Type } from 'class-transformer';
import { DeviceOrderByWithRelationInput } from './device-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DeviceWhereUniqueInput } from './device-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DeviceCountAggregateInput } from './device-count-aggregate.input';
import { DeviceAvgAggregateInput } from './device-avg-aggregate.input';
import { DeviceSumAggregateInput } from './device-sum-aggregate.input';
import { DeviceMinAggregateInput } from './device-min-aggregate.input';
import { DeviceMaxAggregateInput } from './device-max-aggregate.input';

@ArgsType()
export class DeviceAggregateArgs {

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

    @Field(() => DeviceCountAggregateInput, {nullable:true})
    _count?: DeviceCountAggregateInput;

    @Field(() => DeviceAvgAggregateInput, {nullable:true})
    _avg?: DeviceAvgAggregateInput;

    @Field(() => DeviceSumAggregateInput, {nullable:true})
    _sum?: DeviceSumAggregateInput;

    @Field(() => DeviceMinAggregateInput, {nullable:true})
    _min?: DeviceMinAggregateInput;

    @Field(() => DeviceMaxAggregateInput, {nullable:true})
    _max?: DeviceMaxAggregateInput;
}
