import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceWhereInput } from './device-where.input';
import { Type } from 'class-transformer';
import { DeviceOrderByWithAggregationInput } from './device-order-by-with-aggregation.input';
import { DeviceScalarFieldEnum } from './device-scalar-field.enum';
import { DeviceScalarWhereWithAggregatesInput } from './device-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DeviceCountAggregateInput } from './device-count-aggregate.input';
import { DeviceAvgAggregateInput } from './device-avg-aggregate.input';
import { DeviceSumAggregateInput } from './device-sum-aggregate.input';
import { DeviceMinAggregateInput } from './device-min-aggregate.input';
import { DeviceMaxAggregateInput } from './device-max-aggregate.input';

@ArgsType()
export class DeviceGroupByArgs {

    @Field(() => DeviceWhereInput, {nullable:true})
    @Type(() => DeviceWhereInput)
    where?: DeviceWhereInput;

    @Field(() => [DeviceOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DeviceOrderByWithAggregationInput>;

    @Field(() => [DeviceScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DeviceScalarFieldEnum>;

    @Field(() => DeviceScalarWhereWithAggregatesInput, {nullable:true})
    having?: DeviceScalarWhereWithAggregatesInput;

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
