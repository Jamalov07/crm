import { Module } from '@nestjs/common';
import { FoundViaService } from './found_via.service';
import { FoundViaController } from './found_via.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { FoundVia } from './entities/found_via.entity';

@Module({
  imports:[SequelizeModule.forFeature([FoundVia])],
  controllers: [FoundViaController],
  providers: [FoundViaService]
})
export class FoundViaModule {}
