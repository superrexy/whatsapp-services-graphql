import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MessageHistoryCreateManyInput } from './message-history-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMessageHistoryArgs {

    @Field(() => [MessageHistoryCreateManyInput], {nullable:false})
    @Type(() => MessageHistoryCreateManyInput)
    data!: Array<MessageHistoryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
