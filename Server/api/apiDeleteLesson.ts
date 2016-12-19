/**
 * Created by John on 12/18/2016.
 */

import {Request, Response} from 'express';
import * as _ from 'lodash';
import {onSuccess} from "./onSuccess";
import {onError} from "./onError";
import {deleteLesson} from "../Queries/deleteLesson";


export function apiDeleteLesson(req:Request, res:Response) {

    const lessonID = req.params.id;

    deleteLesson(lessonID)
        .then(_.partial(onSuccess, res))
        .catch(_.partial(onError, res, `Could not update lesson ${lessonID}`));

}