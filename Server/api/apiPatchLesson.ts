/**
 * Created by John on 12/18/2016.
 */

import {Request, Response} from 'express';
import * as _ from 'lodash';
import {onSuccess} from "./onSuccess";
import {onError} from "./onError";
import {updateLesson} from "../Queries/updateLesson";

export function apiPatchLesson(req:Request, res:Response) {

    const lessonID = req.params.id;

    updateLesson(lessonID, req.body)
        .then(_.partial(onSuccess, res))
        .catch(_.partial(onError, res, "Could not update lesson"));
}