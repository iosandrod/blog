import { ResourceEntity } from '../../entities/resource.entity';
import { ResourceTypeEntity } from '../../entities/resource-type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ResourceTypeController } from './resource-type.controller';
import { ResourceTypeService } from './resource-type.service';

@Module({
	imports: [TypeOrmModule.forFeature([ResourceTypeEntity, ResourceEntity])],
	controllers: [ResourceTypeController],
	providers: [ResourceTypeService],
})
export class ResourceTypeModule {}
