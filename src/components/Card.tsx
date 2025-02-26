import { Edit, Trash2 } from "lucide-react";
import Task from "../model/Task";

interface Props {
  task: Task;
  handleStatus: (taskId: number) => void;
  handleDelete: (taskId: number) => void;
  handleEdit: (taskId: number) => void;
}

const Card = ({ task, handleStatus, handleDelete, handleEdit }: Props) => {
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
          onClick={() => handleStatus(task.id)}
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
          onChange={() => handleStatus(task.id)}
          checked={task.status}
          className="size-7 cursor-pointer transition-transform duration-200 ease-in hover:scale-110"
        />
        <div className="flex gap-4">
          <Edit
            onClick={() => handleEdit(task.id)}
            className="mb-5 cursor-pointer transition-transform duration-200 ease-in hover:scale-110 hover:text-blue-300"
          />
          <Trash2
            onClick={() => handleDelete(task.id)}
            className="mb-5 cursor-pointer transition-transform duration-200 ease-in hover:scale-110 hover:text-red-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
