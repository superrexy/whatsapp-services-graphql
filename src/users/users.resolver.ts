import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Authenticated } from '../common/decorators/authenticated.decorators';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver(() => UserEntity)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => UserEntity, {
    name: 'userCreate',
    description: 'Create a new user',
    nullable: true,
  })
  async create(@Args('payload') createUserDto: CreateUserDto) {
    return await this.usersService
      .create(createUserDto)
      .then((user) => new UserEntity(user));
  }

  @Authenticated()
  @Query(() => [UserEntity], {
    name: 'usersFindAll',
    description: 'Find all users',
  })
  async findAll() {
    return (await this.usersService.findAll()).map(
      (user) => new UserEntity(user),
    );
  }

  @Query(() => UserEntity, {
    name: 'userFindOneByID',
    description: 'Find one user by ID',
  })
  async findOneByID(@Args('id') id: number) {
    return await this.usersService
      .findOneByID(id)
      .then((user) => new UserEntity(user));
  }

  @Query(() => UserEntity, {
    name: 'userFindOneByEmail',
    description: 'Find one user by email',
  })
  async findOneByEmail(@Args('email') email: string) {
    return await this.usersService
      .findOneByEmail(email)
      .then((user) => new UserEntity(user));
  }

  @Mutation(() => UserEntity, {
    name: 'userUpdate',
    description: 'Update a user',
    nullable: true,
  })
  async update(
    @Args('id') id: number,
    @Args('payload') updateUserDto: UpdateUserDto,
  ) {
    return await this.usersService
      .update(id, updateUserDto)
      .then((user) => new UserEntity(user));
  }
}
