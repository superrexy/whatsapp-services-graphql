import { ApiProperty } from '@nestjs/swagger';
import type { User } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class UserEntity implements User {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);

    if (!partial.avatar) {
      this.avatar = `https://ui-avatars.com/api/?name=${this.name}&size=256&background=random&color=fff&rounded=true`;
    }
  }

  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @Exclude()
  password: string;

  @ApiProperty()
  avatar: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;
}
