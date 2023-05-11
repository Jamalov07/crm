import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Lesson } from './entities/lesson.entity';

@Injectable()
export class LessonsService {
  constructor(@InjectModel(Lesson) private lessonRepo: typeof Lesson) {}

  async create(createLessonDto: CreateLessonDto) {
    const candidate = await this.lessonRepo.findOne({
      where: {
        group_id: createLessonDto.group_id,
        sequence_number: createLessonDto.sequence_number,
      },
    });
    if (candidate) {
      throw new BadRequestException('This lesson already exists');
    }
    const newLesson = await this.lessonRepo.create(createLessonDto);
    return newLesson;
  }

  async findAll() {
    const lessons = await this.lessonRepo.findAll();
    return lessons;
  }

  async findOne(id: number) {
    const lesson = await this.lessonRepo.findOne({ where: { id } });
    if (!lesson) {
      throw new BadRequestException('Lesson not found');
    }
    return lesson;
  }

  async update(id: number, updateLessonDto: UpdateLessonDto) {
    const lesson = await this.findOne(id);
    if (updateLessonDto.sequence_number || updateLessonDto.group_id) {
      const candidate = await this.lessonRepo.findOne({
        where: {
          group_id: updateLessonDto.group_id || lesson.group_id,
          sequence_number:
            updateLessonDto.sequence_number || lesson.sequence_number,
        },
      });
      if (candidate && candidate.id !== id) {
        throw new BadRequestException('This lesson already exists');
      }
    }

    await lesson.update(updateLessonDto);
    return lesson;
  }

  async remove(id: number) {
    const lesson = await this.findOne(id);
    await lesson.destroy();
    return { message: 'lesson deleted' };
  }
}
