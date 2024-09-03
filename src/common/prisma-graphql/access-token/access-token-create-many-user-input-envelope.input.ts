import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccessTokenCreateManyUserInput } from './access-token-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class AccessTokenCreateManyUserInputEnvelope {

    @Field(() => [AccessTokenCreateManyUserInput], {nullable:false})
    @Type(() => AccessTokenCreateManyUserInput)
    data!: Array<AccessTokenCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
