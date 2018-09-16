import { AppController } from './app.controller';
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { BusinessModule } from './business/business.module';
import { BrandsModule } from './brands/brands.module';
import { ProductsModule } from './products/products.module';
import { FeedsModule } from './feeds/feeds.module';
import { CategoriesModule } from './categories/categories.module';
import { CommonsModule } from './commons/commons.module';
// import { ConfigModule } from './config/config.module';
// import { ConfigService } from 'config/config.service';
import { AuthModule } from './auth/auth.module';
import * as GraphQLJSON from 'graphql-type-json';
import { generateTypeScriptTypes } from 'graphql-schema-typescript';
import * as path from 'path';
// import { ArangodbModule } from 'arangodb/arangodb.module';
import { join } from 'path';

@Module({
  imports: [
    CommonsModule,
    GraphQLModule.forRoot({
      typePaths: ['src/**/*.graphql'],
      installSubscriptionHandlers: true,
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      resolvers: { JSON: GraphQLJSON },
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  private isAuthEnabled: boolean;
  constructor(){}
}
