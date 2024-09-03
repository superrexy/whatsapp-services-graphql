import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AccessTokenType } from '../prisma/access-token-type.enum';
import { User } from '../user/user.model';

@ObjectType()
export class AccessToken {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    session_id!: string;

    @Field(() => Int, {nullable:false})
    user_id!: number;

    @Field(() => AccessTokenType, {nullable:false,defaultValue:'login'})
    type!: keyof typeof AccessTokenType;

    @Field(() => Boolean, {nullable:false})
    status_token!: boolean;

    @Field(() => Boolean, {nullable:false})
    status_login!: boolean;

    @Field(() => String, {nullable:false})
    user_agent!: string;

    @Field(() => Date, {nullable:false})
    created_at!: Date;

    @Field(() => Date, {nullable:false})
    updated_at!: Date;

    @Field(() => User, {nullable:false})
    user?: User;
}
