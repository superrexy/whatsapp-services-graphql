import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class DeviceConfigurationsSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    device_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    delay_on_send?: keyof typeof SortOrder;
}
