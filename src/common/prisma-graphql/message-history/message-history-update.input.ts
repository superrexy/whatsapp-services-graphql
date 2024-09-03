import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumMessageStatusFieldUpdateOperationsInput } from '../prisma/enum-message-status-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { DeviceUpdateOneRequiredWithoutMessageHistoryNestedInput } from '../device/device-update-one-required-without-message-history-nested.input';

@InputType()
export class MessageHistoryUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    target_number?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    message?: StringFieldUpdateOperationsInput;

    @Field(() => EnumMessageStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumMessageStatusFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    delivered_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DeviceUpdateOneRequiredWithoutMessageHistoryNestedInput, {nullable:true})
    device?: DeviceUpdateOneRequiredWithoutMessageHistoryNestedInput;
}
