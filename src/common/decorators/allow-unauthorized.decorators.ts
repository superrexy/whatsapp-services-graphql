import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiForbiddenResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AccessTokenGuard } from '../../auth/guards/access-token.guard';

export const ALLOW_UNAUTHORIZED_KEY = 'allow_unauthorized';

export const AllowUnauthorized = () => {
  return applyDecorators(
    SetMetadata(ALLOW_UNAUTHORIZED_KEY, true),
    UseGuards(AccessTokenGuard),
    ApiBearerAuth(),
    ApiUnauthorizedResponse({ description: 'Unauthorized' }),
    ApiForbiddenResponse({ description: 'Forbidden' }),
  );
};
