import { Injectable, NotFoundException } from "@nestjs/common";
import type { CreateTaskDTO } from "./dto/create-task.dto";
import { UpdateTaskDTO } from "./dto/update-task.dto";

@Injectable()
export class TaskServices{

    tasks:any[] = []

    getTask(){
        return this.tasks;
    }

     getTaskId(id:number){
        const taskFound =  this.tasks.find(task => task.id === id);

        if(!taskFound){

            return new NotFoundException(`task with id ${id} not found`); //bota el error pero no tira abajo el programa
        }

        return taskFound;

    }

    postTask(task:CreateTaskDTO){

        this.tasks.push({
            ...task,
            id:this.tasks.length + 1
        })
        return task
    }

    deleteTask(){
        return 'delete de task'
    }

    patchTask(){
        return 'patch de task'
    }

    putTask(task:UpdateTaskDTO){
        console.log(task)
        return 'put de task'
    }
}