import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AccessTokenCreateWithoutUserInput } from './access-token-create-without-user.input';
import { Type } from 'class-transformer';
import { AccessTokenCreateOrConnectWithoutUserInput } from './access-token-create-or-connect-without-user.input';
import { AccessTokenUpsertWithWhereUniqueWithoutUserInput } from './access-token-upsert-with-where-unique-without-user.input';
import { AccessTokenCreateManyUserInputEnvelope } from './access-token-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AccessTokenWhereUniqueInput } from './access-token-where-unique.input';
import { AccessTokenUpdateWithWhereUniqueWithoutUserInput } from './access-token-update-with-where-unique-without-user.input';
import { AccessTokenUpdateManyWithWhereWithoutUserInput } from './access-token-update-many-with-where-without-user.input';
import { AccessTokenScalarWhereInput } from './access-token-scalar-where.input';

@InputType()
export class AccessTokenUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [AccessTokenCreateWithoutUserInput], {nullable:true})
    @Type(() => AccessTokenCreateWithoutUserInput)
    create?: Array<AccessTokenCreateWithoutUserInput>;

    @Field(() => [AccessTokenCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => AccessTokenCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<AccessTokenCreateOrConnectWithoutUserInput>;

    @Field(() => [AccessTokenUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AccessTokenUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<AccessTokenUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => AccessTokenCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => AccessTokenCreateManyUserInputEnvelope)
    createMany?: AccessTokenCreateManyUserInputEnvelope;

    @Field(() => [AccessTokenWhereUniqueInput], {nullable:true})
    @Type(() => AccessTokenWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AccessTokenWhereUniqueInput, 'id'>>;

    @Field(() => [AccessTokenWhereUniqueInput], {nullable:true})
    @Type(() => AccessTokenWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AccessTokenWhereUniqueInput, 'id'>>;

    @Field(() => [AccessTokenWhereUniqueInput], {nullable:true})
    @Type(() => AccessTokenWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AccessTokenWhereUniqueInput, 'id'>>;

    @Field(() => [AccessTokenWhereUniqueInput], {nullable:true})
    @Type(() => AccessTokenWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AccessTokenWhereUniqueInput, 'id'>>;

    @Field(() => [AccessTokenUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => AccessTokenUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<AccessTokenUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [AccessTokenUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => AccessTokenUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<AccessTokenUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [AccessTokenScalarWhereInput], {nullable:true})
    @Type(() => AccessTokenScalarWhereInput)
    deleteMany?: Array<AccessTokenScalarWhereInput>;
}
