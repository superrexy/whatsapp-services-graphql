import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceConfigurationsWhereInput } from './device-configurations-where.input';

@InputType()
export class DeviceConfigurationsNullableRelationFilter {

    @Field(() => DeviceConfigurationsWhereInput, {nullable:true})
    is?: DeviceConfigurationsWhereInput;

    @Field(() => DeviceConfigurationsWhereInput, {nullable:true})
    isNot?: DeviceConfigurationsWhereInput;
}
