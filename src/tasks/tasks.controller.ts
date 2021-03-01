import { Controller, Get, Post, Put, Delete, Body, Param} from '@nestjs/common';
import { createTaskDto } from "./dto/create-task-dto";
// import { Request, Response } from "express";
import { TasksService } from "./tasks.service";
import { Task } from "./interfaces/Task";

@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService) {}

    @Get()
    getTasks(): Promise<Task[]> {
        return this.taskService.getTasks()
        
    }
    // getTasks(@Req() req, @Res() res){
    //     console.log(req.body)
    //     return res.send("Hola");
    // }

    @Get(':id')
    getTask(@Param('id') id: string): Promise<Task> {
        return this.taskService.getTask(id)
    }

    @Post()
    createTask(@Body() task: createTaskDto): Promise<Task> {
        console.log(task)
        return this.createTask(task)
    }

    @Put(':id')
    updateTask(@Body() task: createTaskDto, @Param('id') id): string {
        console.log(task)
        return `Updating a task ${id}`
    }

    @Delete(':id')
    deleteTask(@Param('id') id): string {
        return `Deleting a task ${id}`
    }
}
