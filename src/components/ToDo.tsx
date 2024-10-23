import { FaRegTrashAlt, FaRegCircle } from "react-icons/fa";
import { FaRegCircleCheck } from "react-icons/fa6";

export interface ToDoItem {
  content: string;
  onDeleteToDo: (content: string) => void;
  onToggleStatus: () => void;
  isCompleted: boolean;
}

export default function ToDo({ content, onDeleteToDo, onToggleStatus, isCompleted }: ToDoItem) {
  function handleDeleteToDo() {
    onDeleteToDo(content);
  }

  return (
    <div className="flex justify-between items-center bg-[#262626] p-5 rounded-xl">
      <div className="items-center flex gap-x-5">
        {
          isCompleted
            ? <FaRegCircleCheck onClick={onToggleStatus} className="text-[#4EA8DE] text-2xl cursor-pointer" />
            : <FaRegCircle onClick={onToggleStatus} className="text-[#4EA8DE] text-2xl cursor-pointer" />
        }
        <p className={`text-2xl ${isCompleted ? 'line-through text-gray-500' : 'text-white'}`}>{content}</p>
      </div>
      <FaRegTrashAlt onClick={handleDeleteToDo} className="text-[#808080] text-xl hover:text-[#E25858] cursor-pointer duration-100" />
    </div>
  );
}
