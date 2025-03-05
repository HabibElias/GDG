import { Edit, Trash2 } from "lucide-react";
import Task from "../model/Task";
import useTasks from "../hooks/useTasks";

interface Props {
  task: Task;
  handleEdit: (task: Task) => void;
}

const Card = ({ task, handleEdit }: Props) => {
  const { dispatch } = useTasks();

  const handleStatus = () =>
    dispatch({
      type: "EDIT",
      taskId: task.id,
      task: { ...task, status: !task.status },
    });

  const handleDelete = () => dispatch({ type: "DELETE", taskId: task.id });

  return (
    <div
      className={`group flex size-90 gap-5 rounded-2xl transition-all hover:scale-102 ${task.status ? "bg-teal-500" : "bg-purple-950"} p-4 duration-100 ease-in`}
    >
      <div className="flex flex-2 flex-col">
        {
          // keeping the long words in size using break-words and contain-inline-size
        }
        <h2 className="text-xl font-bold break-words contain-inline-size">
          {task.title}
        </h2>
        {
          // Due date
        }
        <div className="text-2xs mt-1 mb-5 flex items-center justify-between gap-1 text-gray-300">
          Due{" "}
          <p
            className={`text-[0.8rem] ${task.dueDate && task.dueDate > new Date() ? "" : "text-red-200"}`}
          >
            {
              // if the date is overdue
            }
            {task.dueDate && task.dueDate > new Date()
              ? task.dueDate.toDateString()
              : "Overdue"}
          </p>
        </div>
        {
          // Description
        }
        <p className="text-[0.8rem] text-gray-300">Description</p>
        <p
          className={`mb-5 flex-2 overflow-auto text-[1rem] text-gray-200 ${!task.status ? "scrollbar" : "scrollbar-none"}`}
        >
          {task.desc}
        </p>

        {
          // Status
        }
        <p className="text-[0.8rem] text-gray-300">Status</p>
        <div
          className={`${task.status ? "bg-teal-400 text-teal-900" : "bg-red-300 text-red-900"} my-2 w-max transform cursor-pointer rounded-2xl p-2 shadow-2xs transition-transform duration-200 ease-in hover:scale-105`}
          onClick={handleStatus}
        >
          {task.status ? "Done" : "Not Done"}
        </div>
      </div>
      {
        // btns
      }
      <div className="flex flex-col items-end justify-between">
        <input
          type="checkbox"
          name="status"
          id={`status-${task.id}`}
          onChange={handleStatus}
          checked={task.status}
          className="size-7 cursor-pointer transition-transform duration-200 ease-in hover:scale-110"
        />
        <div className="flex gap-4">
          <Edit
            onClick={() => handleEdit(task)}
            className="mb-5 cursor-pointer transition-transform duration-200 ease-in hover:scale-110 hover:text-blue-300"
          />
          <Trash2
            onClick={handleDelete}
            className="mb-5 cursor-pointer transition-transform duration-200 ease-in hover:scale-110 hover:text-red-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
