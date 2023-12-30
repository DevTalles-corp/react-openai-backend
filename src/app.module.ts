import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { GptModule } from './gpt/gpt.module';
import { SamAssistantModule } from './sam-assistant/sam-assistant.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    GptModule,
    SamAssistantModule,
  ]
})
export class AppModule {}
