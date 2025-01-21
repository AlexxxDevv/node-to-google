import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataModule } from './api/data-api/data-api.module';
import { MongooseConfigService } from './config/database-config.service';
import configuration from './config/configuration';
import { ClientsRepositoryModule } from './datalake/clients/clients.module';
import { ClientsStatusRepositoryModule } from './datalake/clients-status/clients-status.module';
import { UsersRepositoryModule } from './datalake/users/users.module';
import { UsersModule } from './core/users/users.module';
import { AuthApiModule } from './api/auth-api/auth-api.module';
import { AuthModule } from './core/aut/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useClass: MongooseConfigService,
    }),
    DataModule,
    ClientsRepositoryModule,
    ClientsStatusRepositoryModule,
    UsersRepositoryModule,
    UsersModule,
    AuthApiModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
