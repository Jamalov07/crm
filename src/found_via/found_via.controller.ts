import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FoundViaService } from './found_via.service';
import { CreateFoundViaDto } from './dto/create-found_via.dto';
import { UpdateFoundViaDto } from './dto/update-found_via.dto';

@Controller('found-via')
export class FoundViaController {
  constructor(private readonly foundViaService: FoundViaService) {}

  @Post()
  create(@Body() createFoundViaDto: CreateFoundViaDto) {
    return this.foundViaService.create(createFoundViaDto);
  }

  @Get()
  findAll() {
    return this.foundViaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foundViaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFoundViaDto: UpdateFoundViaDto) {
    return this.foundViaService.update(+id, updateFoundViaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.foundViaService.remove(+id);
  }
}
