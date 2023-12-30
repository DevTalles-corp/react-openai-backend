import { Module } from '@nestjs/common';
import { SamAssistantService } from './sam-assistant.service';
import { SamAssistantController } from './sam-assistant.controller';

@Module({
  controllers: [SamAssistantController],
  providers: [SamAssistantService],
})
export class SamAssistantModule {}
