import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { EnumAccessTokenTypeFilter } from '../prisma/enum-access-token-type-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class AccessTokenWhereInput {

    @Field(() => [AccessTokenWhereInput], {nullable:true})
    AND?: Array<AccessTokenWhereInput>;

    @Field(() => [AccessTokenWhereInput], {nullable:true})
    OR?: Array<AccessTokenWhereInput>;

    @Field(() => [AccessTokenWhereInput], {nullable:true})
    NOT?: Array<AccessTokenWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => UuidFilter, {nullable:true})
    session_id?: UuidFilter;

    @Field(() => IntFilter, {nullable:true})
    user_id?: IntFilter;

    @Field(() => EnumAccessTokenTypeFilter, {nullable:true})
    type?: EnumAccessTokenTypeFilter;

    @Field(() => BoolFilter, {nullable:true})
    status_token?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    status_login?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    user_agent?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    created_at?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updated_at?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;
}
