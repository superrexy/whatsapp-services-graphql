import { Module } from '@nestjs/common';
import UploadModule from '../common/modules/upload-module.modules';
import { UsersModule } from '../users/users.module';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';

@Module({
  imports: [
    UsersModule,
    UploadModule({
      path: 'avatars',
      validation: {
        allowedMimeTypes: ['image/jpeg', 'image/png'],
        maxSize: 1024 * 1024 * 2,
      },
    }),
  ],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
