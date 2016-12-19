/**
 * Created by John on 12/13/2016.
 */

import {CourseModel} from "../Model/model";

export function findAllCourses() {
    return CourseModel.findAll({
        order: ['seqNo']
    })
}