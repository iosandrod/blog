import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { t_SdOrderController } from './t_SdOrder.controller';
import { t_SdOrderService } from './t_SdOrder.service';
import { t_SdOrderEntity } from 'src/entities/t_SdOrder.entity';
import { TasksService } from 'src/tasks/tasks.service';
@Module({
	imports: [TypeOrmModule.forFeature([t_SdOrderEntity])],
	controllers: [t_SdOrderController],
	providers: [t_SdOrderService, TasksService],
})
export class t_SdOrderModule {}
