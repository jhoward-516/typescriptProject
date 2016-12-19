/**
 * Created by John on 12/17/2016.
 */

import {Request, Response} from 'express';
import * as _ from 'lodash';
import {onSuccess} from "./onSuccess";
import {onError} from "./onError";
import {createLesson} from "../Queries/createLesson";
import {databaseErrorHandler} from "./databaseErrorHandler";

export function apiCreateLesson(req:Request, res:Response) {

    createLesson(req.body)
        .then(_.partial(onSuccess, res))
        .catch(_.partial(databaseErrorHandler, res))
        .catch(_.partial(onError, res, 'Could not create Lesson'));

}
