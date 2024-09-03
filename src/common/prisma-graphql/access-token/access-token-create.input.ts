import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccessTokenType } from '../prisma/access-token-type.enum';
import { UserCreateNestedOneWithoutSessionsInput } from '../user/user-create-nested-one-without-sessions.input';

@InputType()
export class AccessTokenCreateInput {

    @Field(() => String, {nullable:true})
    session_id?: string;

    @Field(() => AccessTokenType, {nullable:true})
    type?: keyof typeof AccessTokenType;

    @Field(() => Boolean, {nullable:false})
    status_token!: boolean;

    @Field(() => Boolean, {nullable:false})
    status_login!: boolean;

    @Field(() => String, {nullable:false})
    user_agent!: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => UserCreateNestedOneWithoutSessionsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutSessionsInput;
}
