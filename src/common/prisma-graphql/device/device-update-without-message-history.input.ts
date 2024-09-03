import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumDeviceStatusFieldUpdateOperationsInput } from '../prisma/enum-device-status-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutDeviceNestedInput } from '../user/user-update-one-required-without-device-nested.input';
import { DeviceConfigurationsUpdateOneWithoutDeviceNestedInput } from '../device-configurations/device-configurations-update-one-without-device-nested.input';

@InputType()
export class DeviceUpdateWithoutMessageHistoryInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phone_number?: StringFieldUpdateOperationsInput;

    @Field(() => EnumDeviceStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumDeviceStatusFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    token?: StringFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    last_seen?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => NullableDateTimeFieldUpdateOperationsInput, {nullable:true})
    disconnected_at?: NullableDateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    created_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updated_at?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutDeviceNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutDeviceNestedInput;

    @Field(() => DeviceConfigurationsUpdateOneWithoutDeviceNestedInput, {nullable:true})
    DeviceConfigurations?: DeviceConfigurationsUpdateOneWithoutDeviceNestedInput;
}
