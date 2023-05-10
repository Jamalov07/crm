import { Module } from '@nestjs/common';
import { FoundViaService } from './found_via.service';
import { FoundViaController } from './found_via.controller';

@Module({
  controllers: [FoundViaController],
  providers: [FoundViaService]
})
export class FoundViaModule {}
