import { useState, FormEvent } from "react";
import { CgClose, CgAdd } from "react-icons/cg";
import Note from "../../model/Note";

const AddPopUp = ({
  open,
  handleClose,
  notes,
  setNotes,
}: {
  open: boolean;
  handleClose: () => void;
  notes: Note[];
  setNotes: (notes: Note[]) => void;
}) => {
  const [note, setNote] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!note) alert("your note can't be empty");
    setNotes([
      ...notes,
      {
        note: note,
        date: new Date(),
        id: notes.length ? notes[notes.length - 1].id + 1 : 0,
      },
    ]);
    setNote("");
    handleClose();
  };

  return (
    <>
      <button
        onClick={handleClose}
        className={`${
          open ? "fixed" : "hidden"
        } top-0 left-0 z-10 flex h-[100vh] w-[100vw] items-center justify-center bg-[#000000b9]`}
      ></button>

      <div
        className={`${
          open ? "fixed" : "hidden"
        } top-1/4 left-1/6 z-10 size-90 overflow-auto bg-[#ffffff41] backdrop-blur-xl lg:left-1/4 lg:size-6/12`}
      >
        <form onSubmit={handleSubmit} className="flex h-[100%] flex-col p-5">
          <label
            htmlFor="note"
            className="mb-4 font-[poppins] text-xl font-bold text-lime-300"
          >
            Your Note
          </label>

          <textarea
            value={note}
            name="note"
            onChange={(e: any) => setNote(e.target.value)}
            placeholder="Write your note here...."
            id="note"
            className="flex-2 rounded-2xl border-3 bg-lime-100 p-4 font-[poppins] transition-colors duration-200 ease-in focus:bg-lime-50"
          />
          <div className="flex items-center justify-end gap-4">
            <button
              type="button"
              onClick={handleClose}
              className="mt-4 w-max cursor-pointer self-start rounded bg-amber-200 p-4 font-[poppins] text-amber-600 duration-200 ease-in hover:bg-amber-600 hover:text-amber-200"
            >
              <CgClose size={20} />
            </button>
            <button
              type="submit"
              className="mt-4 w-max cursor-pointer self-end rounded bg-lime-200 p-4 font-[poppins] text-lime-600 duration-200 ease-in hover:bg-lime-600 hover:text-lime-200"
            >
              <CgAdd size={20} />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddPopUp;
