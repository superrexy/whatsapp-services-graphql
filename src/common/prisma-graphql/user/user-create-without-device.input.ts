import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccessTokenCreateNestedManyWithoutUserInput } from '../access-token/access-token-create-nested-many-without-user.input';

@InputType()
export class UserCreateWithoutDeviceInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:true})
    avatar?: string;

    @Field(() => Date, {nullable:true})
    created_at?: Date | string;

    @Field(() => Date, {nullable:true})
    updated_at?: Date | string;

    @Field(() => AccessTokenCreateNestedManyWithoutUserInput, {nullable:true})
    sessions?: AccessTokenCreateNestedManyWithoutUserInput;
}
