import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceWhereInput } from './device-where.input';

@InputType()
export class DeviceRelationFilter {

    @Field(() => DeviceWhereInput, {nullable:true})
    is?: DeviceWhereInput;

    @Field(() => DeviceWhereInput, {nullable:true})
    isNot?: DeviceWhereInput;
}
