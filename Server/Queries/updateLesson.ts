

import {LessonModel} from "../Model/model";

export function updateLesson(id:string, props:any) {

    return LessonModel.update(
        props,
        {
            where: {id}
        }
    );

}