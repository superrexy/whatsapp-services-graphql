import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeviceScalarWhereInput } from './device-scalar-where.input';
import { Type } from 'class-transformer';
import { DeviceUpdateManyMutationInput } from './device-update-many-mutation.input';

@InputType()
export class DeviceUpdateManyWithWhereWithoutUserInput {

    @Field(() => DeviceScalarWhereInput, {nullable:false})
    @Type(() => DeviceScalarWhereInput)
    where!: DeviceScalarWhereInput;

    @Field(() => DeviceUpdateManyMutationInput, {nullable:false})
    @Type(() => DeviceUpdateManyMutationInput)
    data!: DeviceUpdateManyMutationInput;
}
