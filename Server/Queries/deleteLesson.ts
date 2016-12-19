/**
 * Created by John on 12/18/2016.
 */

import {LessonModel} from "../Model/model";

export function deleteLesson(id:string) {

    return LessonModel.destroy({
        where: {id}
    });

}