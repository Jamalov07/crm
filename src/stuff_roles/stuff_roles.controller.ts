import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StuffRolesService } from './stuff_roles.service';
import { CreateStuffRoleDto } from './dto/create-stuff_role.dto';
import { UpdateStuffRoleDto } from './dto/update-stuff_role.dto';

@Controller('stuff-roles')
export class StuffRolesController {
  constructor(private readonly stuffRolesService: StuffRolesService) {}

  @Post()
  create(@Body() createStuffRoleDto: CreateStuffRoleDto) {
    return this.stuffRolesService.create(createStuffRoleDto);
  }

  @Get()
  findAll() {
    return this.stuffRolesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stuffRolesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStuffRoleDto: UpdateStuffRoleDto) {
    return this.stuffRolesService.update(+id, updateStuffRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stuffRolesService.remove(+id);
  }
}
