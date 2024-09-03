import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceStatus } from './device-status.enum';

@InputType()
export class EnumDeviceStatusFieldUpdateOperationsInput {

    @Field(() => DeviceStatus, {nullable:true})
    set?: keyof typeof DeviceStatus;
}
