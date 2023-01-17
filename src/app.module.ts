import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
    }),
  ],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule {}
