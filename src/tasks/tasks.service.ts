import { Injectable } from '@nestjs/common';
import { Task } from "./interfaces/Task";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { createTaskDto } from './dto/create-task-dto';

@Injectable()
export class TasksService {

    constructor(@InjectModel('Task') private taskModel: Model<Task>){}

    async getTasks(){
        return await this.taskModel.find();
    }

    async getTask(id: string){
        return await this.taskModel.findById(id);
    }

    createTask(tasks: createTaskDto){
        const nreTask = new this.taskModel(tasks);
        console.log(nreTask);
        return 'Saved';
    }
}
