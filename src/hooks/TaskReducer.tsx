import Task from "../model/Task";

interface AddTask {
  type: "ADD";
  task: Task;
}

interface DeleteTask {
  type: "DELETE";
  taskId: number;
}

interface EditTask {
  type: "EDIT";
  taskId: number;
  task: Task;
}
interface PutTask {
  type: "PUT";
  tasks: Task[];
}

export type TaskActionType = AddTask | DeleteTask | EditTask | PutTask;

const TaskReducer = (tasks: Task[], action: TaskActionType) => {
  switch (action.type) {
    case "ADD":
      return [action.task, ...tasks];
    case "DELETE":
      return tasks.filter((task) => task.id != action.taskId);
    case "EDIT":
      return tasks.map((t) => (t.id == action.taskId ? action.task : t));
    case "PUT":
      return action.tasks;
  }
};

export default TaskReducer;