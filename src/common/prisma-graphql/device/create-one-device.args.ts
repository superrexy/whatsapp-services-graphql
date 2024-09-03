import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceCreateInput } from './device-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDeviceArgs {

    @Field(() => DeviceCreateInput, {nullable:false})
    @Type(() => DeviceCreateInput)
    data!: DeviceCreateInput;
}
