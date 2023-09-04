import { NestExpressApplication } from '@nestjs/platform-express';
import { AuthGuard } from './guard/auth.guard';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { TransformInterceptor } from './interceptor/transform.interceptor';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createSwagger } from './swagger/index';

import * as Dotenv from 'dotenv';
import { Logger, ValidationPipe } from '@nestjs/common';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { join } from 'path';

Dotenv.config({ path: '.env' });
const PORT = process.env.PORT;
const PREFIX = process.env.PREFIX;

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);
	app.setGlobalPrefix('/api'); //设置全局前缀 /api
	app.useGlobalPipes(new ValidationPipe()); //校验
	app.useGlobalInterceptors(new TransformInterceptor()); //全局的错误处理
	app.useGlobalFilters(new HttpExceptionFilter()); //全局
	app.useGlobalGuards(new AuthGuard()); //全局守卫
	app.useWebSocketAdapter(new IoAdapter(app)); //使用socket
	app.setBaseViewsDir(join(__dirname, '..', 'views'));
	app.setViewEngine('ejs');
	createSwagger(app);
	app.enableCors();
	await app.listen(PORT, () => {
		Logger.log(`服务已经启动,接口请访问:::http://localhost:${PORT}`);
		Logger.log(`swagger已经启动,文档请访问:http://localhost:${PORT}${PREFIX}`);
	});
}
bootstrap();
