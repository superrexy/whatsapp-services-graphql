import { SetMetadata } from '@nestjs/common';

export const API_MESSAGE_METADATA = 'api-message';

export const ApiMessage = (message: string) =>
  SetMetadata(API_MESSAGE_METADATA, message);
