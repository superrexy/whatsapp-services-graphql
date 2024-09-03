import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class DeviceConfigurationsSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    device_id?: true;

    @Field(() => Boolean, {nullable:true})
    delay_on_send?: true;
}
