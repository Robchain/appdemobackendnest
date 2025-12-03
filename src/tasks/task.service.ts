import { Injectable } from "@nestjs/common";

@Injectable()
export class TaskServices{

    getTask(){
        return ['das', 'dasd','dad']
    }

}