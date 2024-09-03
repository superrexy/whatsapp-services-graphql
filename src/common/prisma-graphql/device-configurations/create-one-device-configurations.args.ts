import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceConfigurationsCreateInput } from './device-configurations-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDeviceConfigurationsArgs {

    @Field(() => DeviceConfigurationsCreateInput, {nullable:false})
    @Type(() => DeviceConfigurationsCreateInput)
    data!: DeviceConfigurationsCreateInput;
}
