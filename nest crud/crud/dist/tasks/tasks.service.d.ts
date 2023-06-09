import { Task, TaskStatus } from './task.model';
export declare class TasksService {
    private tasks;
    getAllTask(): Task[];
    getTaskById(id: string): Task;
    createTask(title: string, description: string): Task;
    deleteTask(id: string): void;
    updateTaskStatus(id: string, taskStatus: TaskStatus): Task;
}
