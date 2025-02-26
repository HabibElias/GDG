import { useState, FormEvent, useEffect } from "react";
import { CgClose } from "react-icons/cg";
import Note from "../../model/Note";
import { BiSave } from "react-icons/bi";

const EditPopUp = ({
  open,
  id,
  editedNote,
  handleClose,
  notes,
  setNotes,
}: {
  open: boolean;
  id: number;
  editedNote: string;
  notes: Note[];
  handleClose: () => void;
  setNotes: (notes: Note[]) => void;
}) => {
  const [note, setNote] = useState<string>(editedNote);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setNotes(
      notes.map((n) =>
        n.id == id
          ? {
              id: id,
              note: note,
              date: new Date(),
            }
          : n
      )
    );
    handleClose();
  };

  useEffect(() => {
    setNote(editedNote);
  }, [editedNote]);


  return (
    <>
      <button
        onClick={handleClose}
        className={`${
          open ? "fixed" : "hidden"
        } w-[100vw] h-[100vh] z-10 bg-[#000000b9] top-0 left-0 flex items-center justify-center`}
      ></button>
      <div
        className={`${
          open ? "fixed" : "hidden"
        } size-100 lg:size-6/12 z-10 bg-[#ffffff41] overflow-auto backdrop-blur-xl top-1/4 sm:left-1/4 lg:left-1/4`}
      >
        <form onSubmit={handleSubmit} className="flex flex-col h-[100%] p-5">
          <label
            htmlFor="note"
            className="text-xl font-[poppins] font-bold mb-4 text-blue-300"
          >
            Edit Note
          </label>
          <textarea
            value={note}
            name="note"
            onChange={(e: any) => setNote(e.target.value)}
            placeholder="Write your note here...."
            id="note"
            className="bg-blue-100 flex-2 rounded-2xl focus:bg-blue-50 font-[poppins] transition-colors duration-200 ease-in p-4 border-3 "
          />
          <div className="flex items-center justify-end gap-4">
            <button
              onClick={handleClose}
              type="button"
              className="p-4 mt-4 self-start w-max bg-amber-200 text-amber-600 rounded font-[poppins] hover:bg-amber-600 hover:text-amber-200  duration-200 ease-in cursor-pointer"
            >
              <CgClose size={20} />
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="p-4 mt-4 self-end w-max bg-blue-200 text-blue-600 rounded font-[poppins] hover:bg-blue-600 hover:text-blue-200  duration-200 ease-in cursor-pointer"
            >
              <BiSave size={20} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditPopUp;
