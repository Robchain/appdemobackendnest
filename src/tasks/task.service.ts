import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class TaskServices{

    tasks:any[] = []

    getTask(){
        return this.tasks;
    }

     getTaskId(id:number){
        const taskFound =  this.tasks.find(task => task.id === id);

        if(!taskFound){
            return NotFoundException();
        }

        return taskFound;


    }

    postTask(task:any){

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

    putTask(){
        return 'put de task'
    }
}