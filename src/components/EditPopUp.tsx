import { useState, FormEvent, useEffect } from "react";
import Task from "../model/Task";
import { Save, X } from "lucide-react";

const AddPopUp = ({
  open,
  handleClose,
  editedTask,
  tasks,
  setTasks,
}: {
  open: boolean;
  handleClose: () => void;
  editedTask: Task;
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
}) => {
  const [taskTitle, setTaskTitle] = useState<string>(editedTask.title || "");
  const [taskDesc, setTaskDesc] = useState<string>(editedTask.desc || "");
  const [taskDate, setTaskDate] = useState<string>(
    editedTask.dueDate && !isNaN(new Date(editedTask.dueDate).getTime())
      ? new Date(editedTask.dueDate).toISOString().split("T")[0]
      : ""
  );

  useEffect(() => {
    setTaskTitle(editedTask.title || "");
    setTaskDesc(editedTask.desc || "");
    setTaskDate(
      editedTask.dueDate && !isNaN(new Date(editedTask.dueDate).getTime())
        ? new Date(editedTask.dueDate).toISOString().split("T")[0]
        : ""
    );
  }, [editedTask]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!taskTitle) {
      alert("Please Enter a Task Title");
      return;
    }

    setTasks(
      tasks.map((t) =>
        t.id == editedTask.id
          ? {
              id: editedTask.id,
              title: taskTitle,
              desc: taskDesc,
              dueDate: new Date(taskDate),
              status: false,
            }
          : t,
      ),
    );

    setTaskTitle("");
    setTaskDesc("");
    setTaskDate("");
    handleClose();
  };

  return (
    <>
      {
        // background cls btns
      }
      <button
        onClick={handleClose}
        className={`${
          open ? "fixed" : "hidden"
        } top-0 left-0 z-10 flex h-[100vh] w-[100vw] items-center justify-center bg-[#000000b9]`}
      ></button>

      {
        // the contents of the popup
      }
      <div
        className={`${
          open ? "fixed" : "hidden"
        } top-1/4 left-1/6 z-10 size-90 overflow-auto bg-[#e3c1ff27] backdrop-blur-xl lg:left-1/4 lg:size-6/12`}
      >
        <form onSubmit={handleSubmit} className="flex h-[100%] flex-col p-5">
          <label className="mb-4 font-[poppins] text-xl font-bold text-gray-50">
            Edit Task
          </label>
          {
            // inputs bellow
          }
          <label
            htmlFor="taskTitle"
            className="mb-4 font-[poppins] text-xl text-gray-400"
          >
            Title
          </label>
          <input
            value={taskTitle}
            name="taskTitle"
            type="text"
            onChange={(e: any) => setTaskTitle(e.target.value)}
            placeholder="Write your task title here...."
            id="taskTitle"
            className="rounded bg-[#0000002a] p-4 font-[poppins] ring-2 ring-purple-800 transition-colors duration-200 ease-in focus:bg-transparent"
          />
          <label
            htmlFor="due"
            className="my-4 font-[poppins] text-xl text-gray-400"
          >
            Due
          </label>
          <input
            value={taskDate}
            name="due"
            onChange={(e: any) => setTaskDate(e.target.value)}
            type="date"
            id="due"
            className="rounded bg-[#0000002a] p-4 font-[poppins] ring-2 ring-purple-800 transition-colors duration-200 ease-in focus:bg-transparent"
          />
          <label
            htmlFor="taskDesc"
            className="my-4 font-[poppins] text-xl text-gray-400"
          >
            Description
          </label>
          <textarea
            value={taskDesc}
            name="taskDesc"
            onChange={(e: any) => setTaskDesc(e.target.value)}
            placeholder="Your Description of the task here...."
            id="taskDesc"
            className="flex-2 rounded bg-[#0000002a] p-4 font-[poppins] ring-2 ring-purple-800 transition-colors duration-200 ease-in focus:bg-transparent"
          />
          {
            // btns
          }
          <div className="flex items-center justify-end gap-4">
            <button
              type="button"
              onClick={() => {
                setTaskTitle("");
                setTaskDesc("");
                handleClose();
              }}
              className="mt-4 w-max cursor-pointer self-start rounded bg-red-200 p-4 font-[poppins] text-red-600 duration-200 ease-in hover:bg-red-600 hover:text-red-200"
            >
              <X />
            </button>
            <button
              type="submit"
              className="mt-4 w-max cursor-pointer self-end rounded bg-purple-200 p-4 font-[poppins] text-purple-600 duration-200 ease-in hover:bg-purple-600 hover:text-purple-200"
            >
              <Save />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddPopUp;
