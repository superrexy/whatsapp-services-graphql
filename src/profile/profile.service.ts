import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileService {
  constructor(private readonly usersService: UsersService) {}

  async profile({ user_id }: { user_id: number }) {
    const user = await this.usersService.findOneByID(user_id);

    return user;
  }

  async updateProfile({
    user_id,
    payload,
    file,
  }: {
    user_id: number;
    payload: UpdateProfileDto;
    file?: Express.Multer.File;
  }) {
    const user = await this.usersService.update(user_id, {
      name: payload.name,
    });

    await this.usersService.updateAvatar(user_id, file.path);

    return user;
  }
}
