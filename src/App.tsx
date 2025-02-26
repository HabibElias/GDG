import { CheckSquare, Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import AddPopUp from "./components/AddPopUp";
import Card from "./components/Card";
import EditPopUp from "./components/EditPopUp";
import Task from "./model/Task";

function App() {
  const [openAdd, setOpenAdd] = useState<boolean>(false);

  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  const [openEdit, setOpenEdit] = useState<boolean>(false);

  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  {
    // the tasks state
  }
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const [editedTask, setEditedTask] = useState<Task>({} as Task);

  const handleEdit = (taskId: number) => {
    const task = tasks.find((t) => t.id == taskId);
    if (!task) return;

    setEditedTask(task);
    handleOpenEdit();
  };

  const handleStatus = (id: number) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, status: !t.status } : t)));

  const handleDelete = (id: number) =>
    setTasks(tasks.filter((t) => t.id !== id));

  const saveToLocal = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const loadFromLocal = () => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
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
    <div className="flex h-[100vh] flex-col overflow-auto bg-[#130020] px-[var(--pad)] py-10 font-[poppins] text-purple-50 [--pad:50px] md:[--pad:100px] lg:[--pad:120px]">
      <AddPopUp
        open={openAdd}
        handleClose={handleCloseAdd}
        setTasks={setTasks}
        tasks={tasks}
      />
      <EditPopUp
        open={openEdit}
        tasks={tasks}
        setTasks={setTasks}
        editedTask={editedTask}
        handleClose={handleCloseEdit}
      />
      <header>
        <h1 className="logo text-3xl font-bold">Task Management</h1>
        <p className="text-gray-400">
          Let's get productive! Add your tasks below
        </p>
      </header>

      <div className="mt-8">
        <button
          onClick={handleOpenAdd}
          className="flex w-max cursor-pointer items-center rounded-2xl bg-gray-100 p-3 font-[poppins] text-purple-950 shadow-2xs shadow-purple-900 duration-100 ease-in hover:bg-purple-600 hover:text-gray-50 hover:shadow-xl active:bg-purple-900"
        >
          <p className="mr-2 rounded-full bg-gray-50 p-2 text-gray-500">
            <Plus />
          </p>
          Add a Task
        </button>
      </div>

      <p className="mt-12 flex items-center justify-between text-gray-400">
        Tasks
        <button
          onClick={() => setIsCompleted(!isCompleted)}
          className={`flex animate-bounce cursor-pointer items-center ${isCompleted ? "animate-pulse text-purple-400" : "text-gray-600"} duration-200 hover:text-purple-100`}
        >
          <CheckSquare size={40} />
          Completed
        </button>
      </p>

      <div className="mt-4 flex flex-2 flex-wrap items-start gap-12 space-y-6">
        {
          // Card display
        }
        {!isCompleted
          ? tasks.map((task, index) => (
              <Card
                handleEdit={handleEdit}
                key={index}
                task={task}
                handleStatus={handleStatus}
                handleDelete={handleDelete}
              />
            ))
          : tasks
              .filter((t) => t.status)
              .map((task, index) => (
                <Card
                  handleEdit={handleEdit}
                  key={index}
                  task={task}
                  handleStatus={handleStatus}
                  handleDelete={handleDelete}
                />
              ))}

        {
          //If there is no task
        }
        {tasks.length == 0 && (
          <div
            className={`flex size-90 items-center justify-center gap-5 rounded-2xl bg-purple-950 p-4 transition-colors duration-100 ease-in`}
          >
            <p className="text-center text-2xl">No Task Yet🥳</p>
          </div>
        )}

        {
          // if there is no completed task
        }
        {isCompleted && tasks.filter((t) => t.status).length == 0 && (
          <div
            className={`flex size-90 items-center justify-center gap-5 rounded-2xl bg-purple-950 p-4 transition-colors duration-100 ease-in`}
          >
            <p className="text-center text-2xl">No Completed Task Yet😔</p>
          </div>
        )}
      </div>
      <footer className="justify-self-end text-center">
        All right reserved &copy; 2025 Habib Elias
      </footer>
    </div>
  );
}

export default App;
