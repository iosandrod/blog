import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { t_SdOrderService } from './t_SdOrder.service';
@ApiTags('t_SdOrder')
@Controller('/t_SdOrder')
export class t_SdOrderController {
	constructor(private readonly t_sdorderservice: t_SdOrderService) {}
	@Post('/set')
	set(@Body() params) {
		return 123;
	}
	@Get('/query')
	async query(@Query() params) {
		return await this.t_sdorderservice.query(params);
	}
	@Post('/del')
	del(@Body() params) {}
}
