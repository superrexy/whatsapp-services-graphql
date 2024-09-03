import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PaginationArgs } from '../common/args/pagination.args';
import { Authenticated } from '../common/decorators/authenticated.decorators';
import { CurrentUser } from '../common/decorators/current-user.decorators';
import { MessageHistory } from '../common/prisma-graphql/message-history';
import { SendMessageDto } from './dto/send-message.dto';
import { MessagePaginated } from './entities/message-paginated.entity';
import { MessagesService } from './messages.service';

@Resolver(() => MessageHistory)
export class MessagesResolver {
  constructor(private readonly messagesService: MessagesService) {}

  @Authenticated()
  @Mutation(() => MessageHistory)
  async sendMessage(
    @Args('payload') payload: SendMessageDto,
    @CurrentUser('id') userId: number,
  ) {
    return await this.messagesService.sendMessage({ payload, user_id: userId });
  }

  @Authenticated()
  @Query(() => MessagePaginated, { name: 'messages' })
  async findAll(
    @Args() pagination: PaginationArgs,
    @CurrentUser('id') userId: number,
  ) {
    const data = await this.messagesService.findAll({ userId, pagination });
    return data;
  }

  @Authenticated()
  @Query(() => MessageHistory, { name: 'message' })
  async findOne(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser('id') userId: number,
  ) {
    return await this.messagesService.findOne({
      id,
      userId,
    });
  }

  // @Mutation(() => Message)
  // updateMessage(@Args('updateMessageInput') updateMessageInput: UpdateMessageInput) {
  //   return this.messagesService.update(updateMessageInput.id, updateMessageInput);
  // }

  @Authenticated()
  @Mutation(() => MessageHistory)
  async removeMessage(
    @Args('id', { type: () => Int }) id: number,
    @CurrentUser('id') userId: number,
  ) {
    return await this.messagesService.remove({
      id,
      userId,
    });
  }
}
