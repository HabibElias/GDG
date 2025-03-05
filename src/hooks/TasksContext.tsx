import {
  createContext,
  Dispatch,
  ReactNode,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import Task from "../model/Task";
import TaskReducer, { TaskActionType } from "./TaskReducer";

interface TasksContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskActionType>;
  editedTask: Task;
  setEditedTask: Dispatch<React.SetStateAction<Task>>;
}

export const TasksContext = createContext<TasksContextType>(
  {} as TasksContextType,
);

interface Props {
  children: ReactNode;
}

const TasksProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(TaskReducer, []);
  const [editedTask, setEditedTask] = useState<Task>({} as Task);

  const saveToLocal = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const loadFromLocal = () => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      dispatch({ type: "PUT", tasks: JSON.parse(savedTasks) });
    }
  };

  const isInitialMount = useRef(true);

  // Load tasks from local storage when the component mounts
  useEffect(() => {
    loadFromLocal();
  }, []);

  // Save tasks to local storage whenever tasks change
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      saveToLocal();
    }
  }, [tasks]);

  return (
    <TasksContext.Provider
      value={{ tasks, dispatch, editedTask, setEditedTask }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksProvider;
