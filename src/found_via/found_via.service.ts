import { Injectable } from '@nestjs/common';
import { CreateFoundViaDto } from './dto/create-found_via.dto';
import { UpdateFoundViaDto } from './dto/update-found_via.dto';

@Injectable()
export class FoundViaService {
  create(createFoundViaDto: CreateFoundViaDto) {
    return 'This action adds a new foundVia';
  }

  findAll() {
    return `This action returns all foundVia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} foundVia`;
  }

  update(id: number, updateFoundViaDto: UpdateFoundViaDto) {
    return `This action updates a #${id} foundVia`;
  }

  remove(id: number) {
    return `This action removes a #${id} foundVia`;
  }
}
