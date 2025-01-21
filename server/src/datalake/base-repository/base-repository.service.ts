/* eslint-disable @typescript-eslint/ban-types */
import {
  Model,
  Document,
  RootFilterQuery,
  MongooseBulkSaveOptions,
} from 'mongoose';

export abstract class BaseRepositoryService<
  T extends Document,
  V = {},
  M = {},
> {
  protected constructor(protected readonly entityModel: Model<T, {}, M, V>) {}

  async create(createEntityDto: Record<string, any>): Promise<any> {
    const entity = await this.entityModel.create(createEntityDto as T);
    return (await entity.save()).toObject();
  }

  async createMany(createEntityDto: any) {
    return await this.entityModel.collection.insertMany(createEntityDto);
  }

  async find(query: RootFilterQuery<T>): Promise<Array<T>> {
    return this.entityModel.find(query);
  }

  async findOne(query: {}): Promise<any> {
    const doc = await this.entityModel.findOne(query).exec();
    return doc.toObject();
  }

  async bulkSave(docs: any, options: MongooseBulkSaveOptions): Promise<any> {
    return this.entityModel.bulkSave(docs, options as MongooseBulkSaveOptions);
  }

  async deleteMany() {
    return this.entityModel.deleteMany();
  }
}
