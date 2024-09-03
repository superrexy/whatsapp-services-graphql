import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AccessTokenUncheckedCreateNestedManyWithoutUserInput } from '../access-token/access-token-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutDeviceInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => AccessTokenUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    sessions?: AccessTokenUncheckedCreateNestedManyWithoutUserInput;
}
