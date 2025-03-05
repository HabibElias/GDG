import useTasks from "../hooks/useTasks";
import Task from "../model/Task";
import Card from "./Card";

interface Props {
  isCompleted: boolean;
  handleEdit: (task: Task) => void;
}

const Cards = ({ isCompleted, handleEdit }: Props) => {
  const { tasks } = useTasks();

  return (
    <div className="mt-4 flex flex-2 flex-wrap items-start gap-12 space-y-6">
      {
        // Card display
      }
      {!isCompleted
        ? tasks.map((task, index) => (
            <Card handleEdit={handleEdit} key={index} task={task} />
          ))
        : tasks
            .filter((t) => t.status)
            .map((task, index) => (
              <Card handleEdit={handleEdit} key={index} task={task} />
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
  );
};

export default Cards;
