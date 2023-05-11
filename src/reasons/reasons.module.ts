import { Module } from '@nestjs/common';
import { ReasonsService } from './reasons.service';
import { ReasonsController } from './reasons.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Reason } from './entities/reason.entity';

@Module({
  imports:[SequelizeModule.forFeature([Reason])],
  controllers: [ReasonsController],
  providers: [ReasonsService]
})
export class ReasonsModule {}
