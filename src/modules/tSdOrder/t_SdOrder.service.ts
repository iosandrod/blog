import { t_SdOrderEntity } from '../../entities/t_SdOrder.entity';
import { Repository, In } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class t_SdOrderService {
	constructor(
		@InjectRepository(t_SdOrderEntity)
		private readonly t_sdordermodel: Repository<t_SdOrderEntity>,
	) {}
	async set(params) {}

	async query(params) {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve('service;');
			}, 2000);
		});
	}
	async del(params) {}
}
