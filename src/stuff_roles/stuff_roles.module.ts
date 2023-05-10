import { Module } from '@nestjs/common';
import { StuffRolesService } from './stuff_roles.service';
import { StuffRolesController } from './stuff_roles.controller';

@Module({
  controllers: [StuffRolesController],
  providers: [StuffRolesService]
})
export class StuffRolesModule {}
