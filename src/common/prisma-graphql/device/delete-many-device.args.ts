import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceWhereInput } from './device-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDeviceArgs {

    @Field(() => DeviceWhereInput, {nullable:true})
    @Type(() => DeviceWhereInput)
    where?: DeviceWhereInput;
}
