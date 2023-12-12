import * as core from "express-serve-static-core";
import { createTask, getTasks, updateTask } from "../controller/task_controller"

export function routes(app: core.Express) {
    app.post("/task", createTask)
    app.get("/tasks", getTasks)
    app.put("/task/:id", updateTask)
}