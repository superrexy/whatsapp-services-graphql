import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MessageStatus } from './message-status.enum';

@InputType()
export class NestedEnumMessageStatusFilter {

    @Field(() => MessageStatus, {nullable:true})
    equals?: keyof typeof MessageStatus;

    @Field(() => [MessageStatus], {nullable:true})
    in?: Array<keyof typeof MessageStatus>;

    @Field(() => [MessageStatus], {nullable:true})
    notIn?: Array<keyof typeof MessageStatus>;

    @Field(() => NestedEnumMessageStatusFilter, {nullable:true})
    not?: NestedEnumMessageStatusFilter;
}
