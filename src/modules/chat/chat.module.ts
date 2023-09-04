import { RoomEntity } from '../../entities/room.entity';
import { CollectEntity } from './../collect/collect.entity';
import { UserEntity } from '../../entities/user.entity';
import { SpiderService } from './../spider/spider.service';
import { MusicService } from './../music/music.service';
import { MusicEntity } from './../music/music.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WsChatGateway } from './chat.getaway';
import { Module } from '@nestjs/common';
import { MessageEntity } from '../../entities/message.entity';
import { ChatController } from './chat.controller';
import { ChatService } from './chat.service';

@Module({
	imports: [TypeOrmModule.forFeature([MusicEntity, MessageEntity, UserEntity, CollectEntity, RoomEntity])],
	providers: [WsChatGateway, MusicService, SpiderService, ChatService],
	controllers: [ChatController],
})
export class ChatModule {
	constructor() {}
}
