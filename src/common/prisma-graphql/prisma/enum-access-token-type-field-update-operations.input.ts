import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccessTokenType } from './access-token-type.enum';

@InputType()
export class EnumAccessTokenTypeFieldUpdateOperationsInput {

    @Field(() => AccessTokenType, {nullable:true})
    set?: keyof typeof AccessTokenType;
}
