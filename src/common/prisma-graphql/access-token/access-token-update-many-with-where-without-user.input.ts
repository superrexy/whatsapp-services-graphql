import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccessTokenScalarWhereInput } from './access-token-scalar-where.input';
import { Type } from 'class-transformer';
import { AccessTokenUpdateManyMutationInput } from './access-token-update-many-mutation.input';

@InputType()
export class AccessTokenUpdateManyWithWhereWithoutUserInput {

    @Field(() => AccessTokenScalarWhereInput, {nullable:false})
    @Type(() => AccessTokenScalarWhereInput)
    where!: AccessTokenScalarWhereInput;

    @Field(() => AccessTokenUpdateManyMutationInput, {nullable:false})
    @Type(() => AccessTokenUpdateManyMutationInput)
    data!: AccessTokenUpdateManyMutationInput;
}
