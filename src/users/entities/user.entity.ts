import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'User Entity' })
export class UserEntity {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);

    if (!partial?.avatar) {
      this.avatar = `https://ui-avatars.com/api/?name=${this.name}&size=256&background=random&color=fff&rounded=true`;
    }
  }

  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  email: string;

  @Field({ nullable: true })
  avatar: string;

  @Field({ nullable: true })
  created_at: Date;

  @Field({ nullable: true })
  updated_at: Date;
}
