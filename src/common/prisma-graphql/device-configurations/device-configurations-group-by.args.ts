import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceConfigurationsWhereInput } from './device-configurations-where.input';
import { Type } from 'class-transformer';
import { DeviceConfigurationsOrderByWithAggregationInput } from './device-configurations-order-by-with-aggregation.input';
import { DeviceConfigurationsScalarFieldEnum } from './device-configurations-scalar-field.enum';
import { DeviceConfigurationsScalarWhereWithAggregatesInput } from './device-configurations-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DeviceConfigurationsCountAggregateInput } from './device-configurations-count-aggregate.input';
import { DeviceConfigurationsAvgAggregateInput } from './device-configurations-avg-aggregate.input';
import { DeviceConfigurationsSumAggregateInput } from './device-configurations-sum-aggregate.input';
import { DeviceConfigurationsMinAggregateInput } from './device-configurations-min-aggregate.input';
import { DeviceConfigurationsMaxAggregateInput } from './device-configurations-max-aggregate.input';

@ArgsType()
export class DeviceConfigurationsGroupByArgs {

    @Field(() => DeviceConfigurationsWhereInput, {nullable:true})
    @Type(() => DeviceConfigurationsWhereInput)
    where?: DeviceConfigurationsWhereInput;

    @Field(() => [DeviceConfigurationsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DeviceConfigurationsOrderByWithAggregationInput>;

    @Field(() => [DeviceConfigurationsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DeviceConfigurationsScalarFieldEnum>;

    @Field(() => DeviceConfigurationsScalarWhereWithAggregatesInput, {nullable:true})
    having?: DeviceConfigurationsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DeviceConfigurationsCountAggregateInput, {nullable:true})
    _count?: DeviceConfigurationsCountAggregateInput;

    @Field(() => DeviceConfigurationsAvgAggregateInput, {nullable:true})
    _avg?: DeviceConfigurationsAvgAggregateInput;

    @Field(() => DeviceConfigurationsSumAggregateInput, {nullable:true})
    _sum?: DeviceConfigurationsSumAggregateInput;

    @Field(() => DeviceConfigurationsMinAggregateInput, {nullable:true})
    _min?: DeviceConfigurationsMinAggregateInput;

    @Field(() => DeviceConfigurationsMaxAggregateInput, {nullable:true})
    _max?: DeviceConfigurationsMaxAggregateInput;
}
