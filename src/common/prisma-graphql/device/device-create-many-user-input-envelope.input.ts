import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceCreateManyUserInput } from './device-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class DeviceCreateManyUserInputEnvelope {

    @Field(() => [DeviceCreateManyUserInput], {nullable:false})
    @Type(() => DeviceCreateManyUserInput)
    data!: Array<DeviceCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
