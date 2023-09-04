import { ToolsTypeEntity } from '../../entities/tools-type.entity';
import { ToolsEntity } from '../../entities/tools.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ToolsController } from './tools.controller';
import { ToolsService } from './tools.service';

@Module({
	imports: [TypeOrmModule.forFeature([ToolsEntity, ToolsTypeEntity])],
	controllers: [ToolsController],
	providers: [ToolsService],
})
export class ToolsModule {}
