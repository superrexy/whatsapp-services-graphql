import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { EnumAccessTokenTypeWithAggregatesFilter } from '../prisma/enum-access-token-type-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class AccessTokenScalarWhereWithAggregatesInput {

    @Field(() => [AccessTokenScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AccessTokenScalarWhereWithAggregatesInput>;

    @Field(() => [AccessTokenScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AccessTokenScalarWhereWithAggregatesInput>;

    @Field(() => [AccessTokenScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AccessTokenScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    session_id?: UuidWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    user_id?: IntWithAggregatesFilter;

    @Field(() => EnumAccessTokenTypeWithAggregatesFilter, {nullable:true})
    type?: EnumAccessTokenTypeWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    status_token?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    status_login?: BoolWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    user_agent?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    created_at?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updated_at?: DateTimeWithAggregatesFilter;
}
