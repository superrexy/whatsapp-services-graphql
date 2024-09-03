import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceCreateManyInput } from './device-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDeviceArgs {

    @Field(() => [DeviceCreateManyInput], {nullable:false})
    @Type(() => DeviceCreateManyInput)
    data!: Array<DeviceCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
