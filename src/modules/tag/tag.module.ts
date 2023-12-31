import { ArticleEntity } from '../../entities/article.entity';
import { TagEntity } from '../../entities/tag.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';

@Module({
	imports: [TypeOrmModule.forFeature([TagEntity, ArticleEntity])],
	controllers: [TagController],
	providers: [TagService],
})
export class TagModule {}
