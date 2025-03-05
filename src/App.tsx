import { CheckSquare, Plus } from "lucide-react";
import { useState } from "react";
import AddPopUp from "./components/AddPopUp";
import Cards from "./components/Cards";
import EditPopUp from "./components/EditPopUp";
import Header from "./components/Header";
import useTasks from "./hooks/useTasks";
import Task from "./model/Task";

function App() {
  const [openAdd, setOpenAdd] = useState<boolean>(false);

  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);

  const [openEdit, setOpenEdit] = useState<boolean>(false);

  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const { setEditedTask } = useTasks();

  const handleEdit = (task: Task) => {
    setEditedTask(task);
    handleOpenEdit();
  };

  return (
    <div className="flex h-[100vh] flex-col overflow-auto bg-[#130020] px-[var(--pad)] py-10 font-[poppins] text-purple-50 [--pad:50px] md:[--pad:100px] lg:[--pad:120px]">
      <AddPopUp open={openAdd} handleClose={handleCloseAdd} />
      <EditPopUp open={openEdit} handleClose={handleCloseEdit} />

      <Header />

      {
        //Add button for adding tasks
      }
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

      {
        // toggling between the completed and not completed tasks
      }
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

      {
        // all the displayed cards are in here
      }
      <Cards handleEdit={handleEdit} isCompleted={isCompleted} />

      <footer className="justify-self-end text-center">
        All right reserved &copy; 2025 Habib Elias
      </footer>
    </div>
  );
}

export default App;
