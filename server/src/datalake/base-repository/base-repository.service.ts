/* eslint-disable @typescript-eslint/ban-types */
import { Model, Document, RootFilterQuery } from 'mongoose';

export abstract class BaseRepositoryService<T extends Document> {
  protected constructor(protected readonly entityModel: Model<T, {}>) {}

  async create(createEntityDto: T): Promise<T> {
    const entity = await this.entityModel.create(createEntityDto as T);
    return (await entity.save()).toObject();
  }

  async find(query: RootFilterQuery<T>): Promise<Array<T>> {
    return this.entityModel.find(query);
  }
}
