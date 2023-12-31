import { ArticleEntity } from '../../entities/article.entity';
import { TypeEntity } from '../../entities/type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TypeController } from './type.controller';
import { TypeService } from './type.service';

@Module({
	imports: [TypeOrmModule.forFeature([TypeEntity, ArticleEntity])],
	controllers: [TypeController],
	providers: [TypeService],
})
export class TypeModule {}
