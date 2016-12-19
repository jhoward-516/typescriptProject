/**
 * Created by John on 12/17/2016.
 */

import {LessonModel} from "../Model/model";

export function createLesson(props: any) {

    return LessonModel.create(props);
}