import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceUpdateManyMutationInput } from './device-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DeviceWhereInput } from './device-where.input';

@ArgsType()
export class UpdateManyDeviceArgs {

    @Field(() => DeviceUpdateManyMutationInput, {nullable:false})
    @Type(() => DeviceUpdateManyMutationInput)
    data!: DeviceUpdateManyMutationInput;

    @Field(() => DeviceWhereInput, {nullable:true})
    @Type(() => DeviceWhereInput)
    where?: DeviceWhereInput;
}
