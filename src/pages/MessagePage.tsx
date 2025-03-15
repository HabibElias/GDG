import { ClipboardCheck, ClipboardList, Send } from "lucide-react";
import { useState } from "react";
import useCharacterCount from "../hooks/useCharacterCount";

const MessagePage = () => {
  const { chars, handleChange } = useCharacterCount();
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(chars.toString());
    setIsCopied(true);
  };

  const progressBar = (chars: string) => {
    if (chars.length < 12) return "before:w-[5%] before-bg before:bg-red-400";
    if (chars.length < 24) return "before:w-[25%] before:bg-red-200";
    if (chars.length < 36) return "before:w-[50%] before:bg-green-200";
    if (chars.length < 50) return "before:w-[75%] before:bg-green-300";
    if (chars.length >= 50) return "before:w-[100%] before:bg-green-400";
  };

  return (
    <div className="flex min-h-[80vh] w-max flex-col items-start justify-center break-words">
      <p className="mb-2 font-[poppins] text-xl">Send us a Message</p>
      <p className="mb-5 text-xs opacity-65">
        Send us a message of at least 50 characters. We thank you for your
        message in advance.
      </p>
      <textarea
        name="chars"
        id="chars"
        value={chars}
        onChange={handleChange}
        className="h-80 max-h-150 min-h-40 w-[100%] max-w-200 min-w-100 resize p-2 font-[poppins] text-[0.9rem] ring-1 duration-200 outline-none focus:ring-(--border-color)"
      ></textarea>
      <div className="mt-5 flex items-center gap-3 self-end">
        <div
          className={`relative h-5 w-40 shadow-xl ring-1 ring-(--border-color) duration-150 before:absolute before:h-5 before:duration-300 ${progressBar(chars)}`}
        ></div>
        <div className={`font-[poppins] text-xs`}>{chars.length}/50</div>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <div
          onClick={handleCopy}
          className="flex cursor-pointer items-center gap-2 p-2 font-[poppins] text-xs ring-1 duration-150 hover:ring-(--border-color) active:text-(--border-color)"
        >
          {!isCopied ? (
            <>
              <ClipboardList className="size-5" /> copy
            </>
          ) : (
            <>
              <ClipboardCheck className="size-5" /> copied
            </>
          )}
        </div>
        <div className="flex cursor-pointer items-center gap-2 p-2 font-[poppins] text-xs ring-1 duration-150 hover:ring-(--border-color) active:text-(--border-color)">
          <Send className="size-5" />
          send
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
