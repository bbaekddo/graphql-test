import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') movieId: string): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto): void {
    console.log(movieData);
    return this.moviesService.createOne(movieData);
  }

  @Patch(':id')
  update(@Param('id') movieId: string, @Body() updateData): void {
    return this.moviesService.updateOne(movieId, updateData);
  }

  @Delete(':id')
  remove(@Param('id') movieId: string): boolean {
    return this.moviesService.deleteOne(movieId);
  }
}
