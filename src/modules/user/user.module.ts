import { VerifyEntity } from './../verify/verify.entity';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { UserEntity } from '../../entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DynamicModule, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PassportModule } from '@nestjs/passport';
import { expiresIn, secret } from 'src/config/jwt';

@Module({
	imports: [
		PassportModule,
		JwtModule.register({
			secret,
			signOptions: { expiresIn },
		}),
		TypeOrmModule.forFeature([UserEntity, VerifyEntity]),
	],
	controllers: [UserController],
	providers: [UserService, LocalStrategy, JwtStrategy],
})
export class UserModule {
	static register(): DynamicModule {
		return {
			module: UserModule,
			providers: [], //提供者
			exports: [],
		};
	}
}
