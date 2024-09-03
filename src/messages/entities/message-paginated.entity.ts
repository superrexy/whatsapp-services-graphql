import { ObjectType } from '@nestjs/graphql';
import { Paginated } from '../../common/interfaces/pagination.interface';
import { MessageHistory } from '../../common/prisma-graphql/message-history';

@ObjectType()
export class MessagePaginated extends Paginated(MessageHistory) {}
