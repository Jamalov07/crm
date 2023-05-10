import { Module } from '@nestjs/common';
import { ReasonsService } from './reasons.service';
import { ReasonsController } from './reasons.controller';

@Module({
  controllers: [ReasonsController],
  providers: [ReasonsService]
})
export class ReasonsModule {}
