import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { TaskServices } from "./task.service";


@Controller('/tasks')
export class TaskController{
    taskService:TaskServices

    constructor(taskService: TaskServices){

        this.taskService = taskService

    } //esta es la manera completa por inyecion de dependencia

    @Get()
    getAllTask(@Query() query:any){// querys que viene por url
        console.log(query)
        return this.taskService.getTask();
    }

    @Get('/:id')
    getIdTask(@Param('id') id:string){// params que viene por url
        return this.taskService.getTaskId(parseInt(id));
    }

    @Post()
    postAllTask( @Body() task:any){ //body del cuerpo de la llamada
        
        return this.taskService.postTask(task);
    }

    @Delete()
    deleteAllTask(){
        return this.taskService.deleteTask();
    }

    @Patch()
    patchAllTask(){
        return this.taskService.patchTask();
    }

    @Put()
    putAllTask(){
        return this.taskService.putTask();
    }

}