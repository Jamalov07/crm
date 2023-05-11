import { Module } from '@nestjs/common';
import { StagesService } from './stages.service';
import { StagesController } from './stages.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Stage } from './entities/stage.entity';

@Module({
  imports:[SequelizeModule.forFeature([Stage])],
  controllers: [StagesController],
  providers: [StagesService]
})
export class StagesModule {}
