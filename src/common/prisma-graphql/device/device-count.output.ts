import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DeviceCount {

    @Field(() => Int, {nullable:false})
    MessageHistory?: number;
}
