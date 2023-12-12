import { Response, Request } from "express";
import { config } from "../db/config"



export function createTask(req: Request, res: Response) {
    new Promise((resolve, reject) => {
        var task = {
            id: req.body.id,
            date: req.body.date,
            description: req.body.description,
            is_finished: req.body.is_finished ? 1 : 0
        }
        config.query("INSERT INTO task SET ?", task, function (err, results, field) {
            if (err) {
                reject({
                    status: "FAILED",
                    message: err.sqlMessage
                })
            } else {
                resolve({
                    status: results.affectedRows > 0 ? "SUCCESS" : "FAILED"
                })
            }
        })
    })
    .then(successPayload => {
        res.send(successPayload)
    })
    .catch((reason) => {
        res.send(reason)
    })
}

export function getTasks(req: Request, res: Response) {
    new Promise((resolve, reject) => {
        config.query("SELECT * from task", function (err, rows, field) {
            if (err) {
                reject({
                    status: "FAILED",
                    message: err.sqlMessage
                })
            } else {
                resolve(
                    {
                        status: "SUCCESS",
                        data: rows.map( row => {
                            return {
                                id: row.id,
                                date: row.date.toISOString().replace(/T/, ' ').replace(/\..+/, '').substring(0, 10),
                                description: row.description,
                                is_finished: row.is_finished == 1 ? true : false
                            }
                        })
                    }
                )
            }
        })
    })
    .then(rows => {
        res.send(rows)
    })
    .catch((reason) => {
        res.send(reason)
    })
}

export function updateTask(req: Request, res: Response) {
    new Promise((resolve, reject) => {
        var task = {
            date: req.body.date,
            description: req.body.description,
            is_finished: req.body.is_finished ? 1 : 0
        }
        var taskId = req.params.id
        config.query("UPDATE task SET ? WHERE id = ?", [ task, taskId ], function (err, results, field) {
            if (err) {
                reject({
                    status: "FAILED",
                    message: err.sqlMessage
                })
            } else {
                resolve({
                    status: results.affectedRows > 0 ? "SUCCESS" : "FAILED"
                })
            }
        })
    })
    .then(successPayload => {
        res.send(successPayload)
    })
    .catch((reason) => {
        res.send(reason)
    })
}
