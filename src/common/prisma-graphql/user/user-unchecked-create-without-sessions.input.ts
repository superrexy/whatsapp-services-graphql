import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DeviceUncheckedCreateNestedManyWithoutUserInput } from '../device/device-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateWithoutSessionsInput {

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

    @Field(() => DeviceUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    Device?: DeviceUncheckedCreateNestedManyWithoutUserInput;
}
