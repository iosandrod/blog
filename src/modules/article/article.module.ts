import { CollectEntity } from './../collect/collect.entity';
import { TagEntity } from '../../entities/tag.entity';
import { TypeEntity } from '../../entities/type.entity';
import { UserEntity } from '../../entities/user.entity';
import { CommonService } from './../common/common.service';
import { ArticleEntity } from '../../entities/article.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleController } from './article.controller';

@Module({
	imports: [TypeOrmModule.forFeature([ArticleEntity, UserEntity, TypeEntity, TagEntity, CollectEntity])],
	providers: [ArticleService, CommonService],
	controllers: [ArticleController],
})
export class ArticleModule {}
