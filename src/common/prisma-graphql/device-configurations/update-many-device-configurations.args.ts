import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceConfigurationsUpdateManyMutationInput } from './device-configurations-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DeviceConfigurationsWhereInput } from './device-configurations-where.input';

@ArgsType()
export class UpdateManyDeviceConfigurationsArgs {

    @Field(() => DeviceConfigurationsUpdateManyMutationInput, {nullable:false})
    @Type(() => DeviceConfigurationsUpdateManyMutationInput)
    data!: DeviceConfigurationsUpdateManyMutationInput;

    @Field(() => DeviceConfigurationsWhereInput, {nullable:true})
    @Type(() => DeviceConfigurationsWhereInput)
    where?: DeviceConfigurationsWhereInput;
}
