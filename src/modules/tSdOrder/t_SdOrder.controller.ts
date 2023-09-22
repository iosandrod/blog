import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { t_SdOrderService } from './t_SdOrder.service';
import { TasksService } from 'src/tasks/tasks.service';
@ApiTags('t_SdOrder')
@Controller('/t_SdOrder')
export class t_SdOrderController {
	constructor(private readonly t_sdorderservice: t_SdOrderService, private readonly taskservice: TasksService) {}
	@Post('/set')
	set(@Body() params) {
		return 123;
	}
	@Get('/query')
	async query(@Query() params) {
		console.log(this.taskservice, 'testService');
		return await this.t_sdorderservice.query(params);
	}
	@Post('/del')
	del(@Body() params) {}
}
