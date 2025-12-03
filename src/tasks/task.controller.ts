import { Controller, Get } from "@nestjs/common";
import { TaskServices } from "./task.service";


@Controller('/tasks')
export class TaskController{
    taskService:TaskServices

    constructor(taskService: TaskServices){

        this.taskService = taskService

    } //esta es la manera completa por inyecion de dependencia

    @Get()
    getAllTask(){

        return this.taskService.getTask();
    }

}