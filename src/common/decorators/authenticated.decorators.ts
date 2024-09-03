import { UseGuards, applyDecorators } from '@nestjs/common';
import { AccessTokenGuard } from '../../auth/guards/access-token.guard';

export function Authenticated() {
  return applyDecorators(
    UseGuards(AccessTokenGuard),
    // ApiBearerAuth(),
    // ApiUnauthorizedResponse({ description: 'Unauthorized' }),
  );
}
