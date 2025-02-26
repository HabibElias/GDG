import { useEffect, useState } from "react";
import Card from "./components/Card";
import Note from "./model/Note";
import AddPopUp from "./components/AddPopUp";
import EditPopUp from "./components/EditPopUp/EditPopUp";

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const [openEdit, setOpenEdit] = useState<boolean>(false);
  const [editId, setEditId] = useState<number>(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

  const [notes, setNotes] = useState<Note[]>([
    {
      id: 0,
      note: "Meeting with the team to discuss project updates.",
      date: new Date("2024-02-12"),
    },
    {
      id: 1,
      note: "Buy groceries: milk, bread, eggs, and cheese.",
      date: new Date("2024-02-14"),
    },
    {
      id: 2,
      note: "Doctor's appointment at 3 PM.",
      date: new Date("2024-02-13"),
    },
    {
      id: 3,
      note: "Finish the quarterly financial report.",
      date: new Date("2024-02-13"),
    },
    {
      id: 4,
      note: "Call the electrician to fix the kitchen light.",
      date: new Date("2024-02-1"),
    },
    {
      id: 5,
      note: "Plan the weekend trip itinerary.",
      date: new Date("2024-02-1"),
    },
    {
      id: 6,
      note: "Read the new book on software architecture.",
      date: new Date("2024-02-1"),
    },
    {
      id: 7,
      note: "Prepare presentation slides for Monday's meeting.",
      date: new Date("2024-02-1"),
    },
  ]);

  let editedNote = notes.find((n) => n.id == editId)?.note;

  useEffect(() => {
    editedNote = notes.find((n) => n.id == editId)?.note;
  }, [editId]);

  const handleDelete = (id: number) => {
    setNotes(notes.filter((note) => note.id !== id));
  };
  const handleEdit = (id: number) => {
    setEditId(id);
    console.log(editId);
    handleOpenEdit();
  };

  return (
    <>
      <div className="py-4 px-4">
        <h1 className="font-bold text-4xl font-[poppins]">📒 Notify</h1>

        <div className="mt-8">
          <button 
            onClick={handleOpen}
            className="flex items-center p-3 shadow-2xs shadow-[#00000042] hover:shadow-xl font-[poppins] bg-gray-100 hover:bg-gray-600 active:bg-gray-700 hover:text-gray-50 w-[max-content] cursor-pointer rounded-2xl duration-100 ease-in"
          >
            <p className="px-3 py-1.5 mr-2 rounded-full bg-gray-50 text-gray-500">
              +
            </p>
            Create a Note
          </button>
        </div>

        <AddPopUp
          open={open}
          notes={notes}
          setNotes={setNotes}
          handleClose={handleClose}
        />
        <EditPopUp
          editedNote={editedNote || ""}
          open={openEdit}
          notes={notes}
          id={editId}
          handleClose={handleCloseEdit}
          setNotes={setNotes}
        />

        <h1 className="font-[poppins] text-2xl my-12">All Notes</h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-30 gap-y-7">
          {notes.map((note, index) => {
            return (
              <Card
                handleEdit={handleEdit}
                key={index}
                handleDelete={handleDelete}
                note={note}
              />
            );
          })}
          {notes.length == 0 && (
            <div className="size-90 bg-gray-100 flex text-2xl rounded-3xl font-[poppins] text-gray-600 items-center justify-center">
              📝 No Note Added Yet
            </div>
          )}
        </div>
      </div>
      <footer className="text-center font-bold font-[poppins] tracking-tight text-gray-400 py-20">
        All rights reserved Habib Elias @2025
      </footer>
    </>
  );
}

export default App;
