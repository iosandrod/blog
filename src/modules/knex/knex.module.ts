import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Module({
	//导入其他模块
	imports: [
		JwtModule.registerAsync({
			imports: [],
			inject: [],
			useFactory(configService) {
				return {
					secret: configService.get('app.token_secret'),
					expiresIn: '100d',
				};
			},
		}),
	],
	//模块提供者
	providers: [],
	//控制器
	controllers: [],
	//向外提供接口
	exports: [],
})
export class KnexModule {}
