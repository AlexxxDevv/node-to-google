import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  private _getMongoUrlString(): string {
    const { url } = this.configService.get('database');
    return url;
  }

  public createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: this._getMongoUrlString(),
    };
  }
}
