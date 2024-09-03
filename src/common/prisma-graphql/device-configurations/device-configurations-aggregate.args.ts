import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceConfigurationsWhereInput } from './device-configurations-where.input';
import { Type } from 'class-transformer';
import { DeviceConfigurationsOrderByWithRelationInput } from './device-configurations-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DeviceConfigurationsWhereUniqueInput } from './device-configurations-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DeviceConfigurationsCountAggregateInput } from './device-configurations-count-aggregate.input';
import { DeviceConfigurationsAvgAggregateInput } from './device-configurations-avg-aggregate.input';
import { DeviceConfigurationsSumAggregateInput } from './device-configurations-sum-aggregate.input';
import { DeviceConfigurationsMinAggregateInput } from './device-configurations-min-aggregate.input';
import { DeviceConfigurationsMaxAggregateInput } from './device-configurations-max-aggregate.input';

@ArgsType()
export class DeviceConfigurationsAggregateArgs {

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
