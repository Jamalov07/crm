import { Module } from '@nestjs/common';
import { ReasonsModule } from './reasons/reasons.module';
import { FoundViaModule } from './found_via/found_via.module';
import { LeadsModule } from './leads/leads.module';
import { StudentsModule } from './students/students.module';
import { PaymentsModule } from './payments/payments.module';
import { StagesModule } from './stages/stages.module';
import { StatusModule } from './status/status.module';
import { GroupsModule } from './groups/groups.module';
import { LessonsModule } from './lessons/lessons.module';
import { StudentLessonsModule } from './student_lessons/student_lessons.module';
import { StuffsModule } from './stuffs/stuffs.module';
import { StuffRolesModule } from './stuff_roles/stuff_roles.module';
import { RolesModule } from './roles/roles.module';
import { BranchesModule } from './branches/branches.module';
import { SubjectsModule } from './subjects/subjects.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { Branch } from './branches/entities/branch.entity';
import { FoundVia } from './found_via/entities/found_via.entity';
import { Group } from './groups/entities/group.entity';
import { Lead } from './leads/entities/lead.entity';
import { Lesson } from './lessons/entities/lesson.entity';
import { Payment } from './payments/entities/payment.entity';
import { Reason } from './reasons/entities/reason.entity';
import { Role } from './roles/entities/role.entity';
import { Stage } from './stages/entities/stage.entity';
import { Status } from './status/entities/status.entity';
import { StudentLesson } from './student_lessons/entities/student_lesson.entity';
import { Student } from './students/entities/student.entity';
import { StuffRole } from './stuff_roles/entities/stuff_role.entity';
import { Stuff } from './stuffs/entities/stuff.entity';
import { Subject } from './subjects/entities/subject.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `.env`, isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [
        Branch,
        FoundVia,
        Group,
        Lead,
        Lesson,
        Payment,
        Reason,
        Role,
        Stage,
        Status,
        StudentLesson,
        Student,
        StuffRole,
        Stuff,
        Subject,
      ],
      autoLoadModels: true,
      logging: false,
    }),
    ReasonsModule,
    FoundViaModule,
    LeadsModule,
    StudentsModule,
    PaymentsModule,
    StagesModule,
    StatusModule,
    GroupsModule,
    LessonsModule,
    StudentLessonsModule,
    StuffsModule,
    StuffRolesModule,
    RolesModule,
    BranchesModule,
    SubjectsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
