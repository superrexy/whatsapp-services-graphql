import {
  Body,
  Controller,
  Get,
  Patch,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiConsumes, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Authenticated } from '../common/decorators/authenticated.decorators';
import { CurrentUser } from '../common/decorators/current-user.decorators';
import { UserEntity } from '../users/entities/user.entity';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfileService } from './profile.service';

@ApiTags('Profile')
@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Authenticated()
  @ApiOperation({ summary: 'Profile' })
  @Get()
  async profile(@CurrentUser('id') user_id: number) {
    const data = await this.profileService.profile({ user_id });

    return Promise.resolve(new UserEntity(data));
  }

  @Authenticated()
  @ApiOperation({ summary: 'Update Profile' })
  @UseInterceptors(FileInterceptor('avatar'))
  @ApiConsumes('multipart/form-data')
  @Patch('update')
  async updateProfile(
    @Body() payload: UpdateProfileDto,
    @CurrentUser('id') user_id: number,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const data = await this.profileService.updateProfile({
      user_id,
      payload,
      file,
    });

    return Promise.resolve(new UserEntity(data));
  }
}
