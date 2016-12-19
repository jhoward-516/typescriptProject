
import {Request, Response} from 'express';
import {onSuccess} from "./onSuccess";
import {onError} from "./onError";
import * as _ from 'lodash';
import {findCourseDetail} from "../Queries/findCourseDetail";


export function apiGetCourseDetails(req:Request, res:Response) {

    const courseId = parseInt(req.params.id);

    findCourseDetail(courseId)
        .then(_.partial(onSuccess, res))
        .catch(_.partial(onError, res, "Could not find course detail for :id"));
}