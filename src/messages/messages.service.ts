import { Inject, Injectable } from '@nestjs/common';
import { CustomPrismaService } from 'nestjs-prisma';
import { IPaginationArgs } from '../common/args/pagination.args';
import { ExtendedPrismaClient } from '../common/prisma-extensions/prisma.extension';
import { SendMessageDto } from './dto/send-message.dto';

@Injectable()
export class MessagesService {
  constructor(
    @Inject('PrismaServiceExtended')
    private readonly prisma: CustomPrismaService<ExtendedPrismaClient>,
  ) {}

  async sendMessage({
    user_id,
    payload,
  }: {
    user_id: number;
    payload: SendMessageDto;
  }) {
    return await this.prisma.client.messageHistory.create({
      data: {
        message: payload.message,
        target_number: payload.target_number,
        device: {
          connect: {
            id: payload.device_id,
            user_id,
          },
        },
        status: 'sent',
      },
    });
  }

  async findAll({
    userId,
    pagination,
  }: {
    userId: number;
    pagination: IPaginationArgs;
  }) {
    const [data, meta] = await this.prisma.client.messageHistory
      .paginate({
        where: {
          device: {
            user_id: userId,
          },
        },
      })
      .withPages({
        limit: pagination.limit,
        includePageCount: true,
        page: pagination.page,
      });

    return {
      data,
      meta,
    };
  }

  async findOne({ id, userId }: { id: number; userId: number }) {
    return await this.prisma.client.messageHistory.findFirst({
      where: {
        id,
        device: {
          user_id: userId,
        },
      },
      include: {
        device: true,
      },
    });
  }

  async remove({ id, userId }: { id: number; userId: number }) {
    return await this.prisma.client.messageHistory.delete({
      where: {
        id,
        device: {
          user_id: userId,
        },
      },
    });
  }
}
