import { Field, ObjectType } from '@nestjs/graphql';
import { UserEntity } from '../../users/entities/user.entity';

@ObjectType()
export class Token {
  constructor(partial: Partial<Token>) {
    Object.assign(this, partial);
  }

  @Field({ nullable: true })
  accessToken: string;

  @Field({ nullable: true })
  refreshToken: string;
}

@ObjectType()
export class LoginEntity {
  constructor(partial: Partial<LoginEntity>) {
    Object.assign(this, partial);

    this.user = new UserEntity(partial.user);
    this.token = new Token(partial.token);
  }

  @Field({ nullable: true })
  token: Token;

  @Field({ nullable: true })
  user?: UserEntity;
}
