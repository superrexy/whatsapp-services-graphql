import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceUpdateWithoutMessageHistoryInput } from './device-update-without-message-history.input';
import { Type } from 'class-transformer';
import { DeviceCreateWithoutMessageHistoryInput } from './device-create-without-message-history.input';
import { DeviceWhereInput } from './device-where.input';

@InputType()
export class DeviceUpsertWithoutMessageHistoryInput {

    @Field(() => DeviceUpdateWithoutMessageHistoryInput, {nullable:false})
    @Type(() => DeviceUpdateWithoutMessageHistoryInput)
    update!: DeviceUpdateWithoutMessageHistoryInput;

    @Field(() => DeviceCreateWithoutMessageHistoryInput, {nullable:false})
    @Type(() => DeviceCreateWithoutMessageHistoryInput)
    create!: DeviceCreateWithoutMessageHistoryInput;

    @Field(() => DeviceWhereInput, {nullable:true})
    @Type(() => DeviceWhereInput)
    where?: DeviceWhereInput;
}
