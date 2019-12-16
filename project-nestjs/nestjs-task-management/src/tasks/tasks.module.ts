import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TaskRepository } from './task.repository';

@Module({
  imports:[
    //TypeOrmModule.forfeature([TaskRepository]),
  ],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
