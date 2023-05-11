import { Module } from '@nestjs/common';
import { StuffRolesService } from './stuff_roles.service';
import { StuffRolesController } from './stuff_roles.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { StuffRole } from './entities/stuff_role.entity';

@Module({
  imports:[SequelizeModule.forFeature([StuffRole])],
  controllers: [StuffRolesController],
  providers: [StuffRolesService]
})
export class StuffRolesModule {}
