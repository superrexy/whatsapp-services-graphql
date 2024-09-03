import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { AccessToken } from '../access-token/access-token.model';
import { Device } from '../device/device.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @HideField()
    password!: string;

    @Field(() => String, {nullable:true})
    avatar!: string | null;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => [AccessToken], {nullable:true})
    sessions?: Array<AccessToken>;

    @Field(() => [Device], {nullable:true})
    Device?: Array<Device>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
