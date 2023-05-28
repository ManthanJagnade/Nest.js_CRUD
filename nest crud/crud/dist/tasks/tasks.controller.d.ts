import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './task.model';
export declare class TasksController {
    private taskService;
    constructor(taskService: TasksService);
    getAllTasks(): Task[];
    getTaskById(id: string): Task;
    createTask(title: string, description: string): Task;
    deleteTask(id: string): string;
    updateTaskStatus(id: string, status: TaskStatus): Task;
}
