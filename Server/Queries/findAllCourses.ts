/**
 * Created by John on 12/13/2016.
 */

import {CourseModel} from "../Model/model";
import {CourseSummary, createCourseSummaries} from "../../shared/model/course-summary";
import * as Bluebird from "bluebird";

export function findAllCourses() : Bluebird<CourseSummary[]> {
    return CourseModel.findAll({
        order: ['seqNo']
    })
        .then(createCourseSummaries)
}
