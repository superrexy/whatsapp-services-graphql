export interface IMeta {
  isFirstPage: boolean;
  isLastPage: boolean;
  currentPage: number;
  previousPage: number | null;
  nextPage: number | null;
  pageCount: number;
  totalCount: number;
}

export interface IGenericResponse<T> {
  data: T[];
  meta: IMeta;
}

import { Type } from '@nestjs/common';
import { Field, Int, ObjectType } from '@nestjs/graphql';

export function Paginated<T>(classRef: Type<T>): Type<IGenericResponse<T>> {
  @ObjectType({ isAbstract: true })
  abstract class MetaType implements IMeta {
    @Field(() => Boolean)
    isFirstPage: boolean;

    @Field(() => Boolean)
    isLastPage: boolean;

    @Field(() => Int)
    currentPage: number;

    @Field(() => Int, { nullable: true })
    previousPage: number | null;

    @Field(() => Int, { nullable: true })
    nextPage: number | null;

    @Field(() => Int)
    pageCount: number;

    @Field(() => Int)
    totalCount: number;
  }

  @ObjectType({ isAbstract: true })
  abstract class PaginatedResponseType implements IGenericResponse<T> {
    @Field(() => [classRef], { nullable: true })
    data!: T[];

    @Field(() => MetaType)
    meta: MetaType;
  }

  return PaginatedResponseType as Type<IGenericResponse<T>>;
}
