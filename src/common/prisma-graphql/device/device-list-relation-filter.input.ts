import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceWhereInput } from './device-where.input';

@InputType()
export class DeviceListRelationFilter {

    @Field(() => DeviceWhereInput, {nullable:true})
    every?: DeviceWhereInput;

    @Field(() => DeviceWhereInput, {nullable:true})
    some?: DeviceWhereInput;

    @Field(() => DeviceWhereInput, {nullable:true})
    none?: DeviceWhereInput;
}
