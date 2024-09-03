import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceWhereInput } from './device-where.input';
import { Type } from 'class-transformer';
import { DeviceUpdateWithoutMessageHistoryInput } from './device-update-without-message-history.input';

@InputType()
export class DeviceUpdateToOneWithWhereWithoutMessageHistoryInput {

    @Field(() => DeviceWhereInput, {nullable:true})
    @Type(() => DeviceWhereInput)
    where?: DeviceWhereInput;

    @Field(() => DeviceUpdateWithoutMessageHistoryInput, {nullable:false})
    @Type(() => DeviceUpdateWithoutMessageHistoryInput)
    data!: DeviceUpdateWithoutMessageHistoryInput;
}
