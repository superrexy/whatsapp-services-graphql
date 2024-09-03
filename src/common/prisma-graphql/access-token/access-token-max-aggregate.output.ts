import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AccessTokenType } from '../prisma/access-token-type.enum';

@ObjectType()
export class AccessTokenMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    session_id?: string;

    @Field(() => Int, {nullable:true})
    user_id?: number;

    @Field(() => AccessTokenType, {nullable:true})
    type?: keyof typeof AccessTokenType;

    @Field(() => Boolean, {nullable:true})
    status_token?: boolean;

    @Field(() => Boolean, {nullable:true})
    status_login?: boolean;

    @Field(() => String, {nullable:true})
    user_agent?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;
}
