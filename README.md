# Task Manager

- Task Manager is a task management application, which tasks having properties of title, description. duedate and completion status. Users can create, read, update and delete every task. Additionally users can fillter out the completted tasks only. more filltering and searching capabilities will be implemented in the future.
- The tasks are then stored onto the local storage.

## Events

- Events are used for interaction with button and form inputs. i.e. onClick on Add Task Button
  ```js
          <button
            onClick={handleOpenAdd}
            className="flex w-max cursor-pointer items-center rounded-2xl bg-gray-100 p-3 font-[poppins] text-purple-950 shadow-2xs shadow-purple-900 duration-100 ease-in hover:bg-purple-600 hover:text-gray-50 hover:shadow-xl active:bg-purple-900"
          >
            <p className="mr-2 rounded-full bg-gray-50 p-2 text-gray-500">
              	       <Plus />
                      </p>
            Add a Task
          </button>
  ```

## Form Handling

- there are two forms in these application both using controlled inputs
- the state of the controlled inputs looks like
- ```js
  const [taskTitle, setTaskTitle] = useState<string>("");
    const [taskDesc, setTaskDesc] = useState<string>("");
    const [taskDate, setTaskDate] = useState<string>("");
    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();

      if (!taskTitle) {
        alert("Please Enter a Task Title");
        return;
      }

      setTasks([
        ...tasks,
        {
          id: tasks.length ? tasks[tasks.length - 1].id + 1 : 0,
          title: taskTitle,
          desc: taskDesc,
          dueDate: new Date(taskDate),
          status: false,
        },
      ]);

      setTaskTitle("");
      setTaskDate("");
      setTaskDesc("");
      handleClose();
    };
  ```
- the form of adding a task looks like.
  ```js
  <form onSubmit={handleSubmit} className="flex h-[100%] flex-col p-5">
    <label className="mb-4 font-[poppins] text-xl font-bold text-gray-50">
       Add Task
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
          <Plus />
       </button>
     </div>
  </form>
  ```
<<<<<<< HEAD
=======

  # Tech Used
  - React, Tailwind, and lucid icons
 
  #deployement
  https://taskmanager-nine-snowy.vercel.app
>>>>>>> b4eead3d41ca064dbafd2c051f87192b897743bc
