import { ArgsType, Field, Int } from '@nestjs/graphql';
import { IsNumber, IsPositive } from 'class-validator';

export interface IPaginationArgs {
  limit: number;
  page: number;
}

@ArgsType()
export class PaginationArgs implements IPaginationArgs {
  constructor() {
    if (this.page < 1) {
      this.page = 1;
    }

    if (this.limit >= 100) {
      this.limit = 100;
    } else if (this.limit < 1) {
      this.limit = 1;
    } else {
      this.limit = this.limit;
    }
  }

  @Field(() => Int, { nullable: true, defaultValue: 10 })
  @IsNumber()
  @IsPositive()
  limit: number = 10;

  @Field(() => Int, { nullable: true, defaultValue: 1 })
  @IsNumber()
  @IsPositive()
  page: number = 1;
}
