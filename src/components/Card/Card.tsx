import Note from "../../model/Note";

interface Props {
  note: Note;
  handleDelete: (id: number) => void;
  handleEdit: (id: number) => void;
}

const Card = ({ note, handleDelete, handleEdit }: Props) => {
  return (
    <div className="flex flex-col gap-3 bg-gray-50 border-2 shadow-xl size-90 rounded p-3 text-xl hover:scale-105 duration-75 ease-in-out">
      <div className="flex-none text-sm font-[poppins] text-gray-400 self-end">
        {note.date.toDateString()}
      </div>
      <div className="flex-2 font-[roboto] text-[16px] hover:underline cursor-pointer text-gray-700">
        {note.note}
      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={() => handleEdit(note.id)}
          className="p-2 bg-gray-200 text-gray-100 rounded active:bg-gray-900 hover:bg-gray-600 duration-200 ease-in cursor-pointer"
        >
          ✏️
        </button>
        <button
          onClick={() => handleDelete(note.id)}
          className="p-2 bg-red-200 text-gray-100 rounded hover:bg-red-600 duration-200 ease-in cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
