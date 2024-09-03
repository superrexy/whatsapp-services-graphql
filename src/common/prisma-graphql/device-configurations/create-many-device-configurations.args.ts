import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeviceConfigurationsCreateManyInput } from './device-configurations-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDeviceConfigurationsArgs {

    @Field(() => [DeviceConfigurationsCreateManyInput], {nullable:false})
    @Type(() => DeviceConfigurationsCreateManyInput)
    data!: Array<DeviceConfigurationsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
