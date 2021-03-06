import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository,
    ) {}
    // private tasks: Task[] = [];

    async getTasks(filterDto: GetTasksFilterDto): Promise<Task[]>{
        return this.taskRepository.getTasks(filterDto);
    }
    async getTaskById(id: number): Promise<Task> {
        const found = await this.taskRepository.findOne(id);
        if (!found) {
            throw new NotFoundException('Task with ID ' + id +  ' not found.');
        }
        return found;
    }

    async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        // const { title, description } = createTaskDto;
        // const task = new Task();
        // task.title = title;
        // task.description = description;
        // task.status = TaskStatus.OPEN;
        // await task.save();
        // return task;
        return this.taskRepository.createTask(createTaskDto);
    }

    async deleteById(id: number): Promise<void>{
        const result = await this.taskRepository.delete(id);
        if (result.affected === 0){
            throw new NotFoundException('Task with ID '+ id + ' not found.');
        }
    }

    async updateStatus(
        id: number,
        status: TaskStatus,
      ): Promise<Task> {
        const task = await this.getTaskById(id);
        task.status = status;
        await task.save();
        return task;
      }
/*    getAllTasks(): Task[]{
        return this.tasks;
    }
    getTasksWithFilters(filterDto: GetTasksFilterDto): Task[]{
        const { status, search } = filterDto;
        let tasks = this.getAllTasks();
        if(status){
            tasks = tasks.filter(task => task.status === status);
        }

        if(search){
            tasks = tasks.filter(task => 
                task.title.includes(search) || 
                task.description.includes(search),
            );
        } 
        return tasks;
    }

    getTaskById(id: string): Task{
        const found = this.tasks.find(task => task.id === id)
        if(!found){
            throw new NotFoundException('Task with ID "' + id +  '"  not found.');
        }
        return found;
    }
    createTask(createTaskDto: CreateTaskDto): Task{
        const {title, description} = createTaskDto
        const task: Task = {
            id: uuid(),
            title,
            description,
            status: TaskStatus.OPEN,
        }

        this.tasks.push(task);
        return task;
    }
    deleteTask(id: string): void{
        const found = this.getTaskById(id)
        this.tasks = this.tasks.filter(task => task.id !== found.id);
    }

    updateTaskStatus(id: string, status: TaskStatus): Task{
        const task = this.getTaskById(id);
        task.status = status;
        return task;
    }*/
}
