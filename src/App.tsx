import { LuPlusCircle } from "react-icons/lu";
import { ChangeEvent, FormEvent, useState } from "react";
import ToDo from "./components/ToDo";

function App() {

  const [todoList, setTodoList] = useState<{ content: string, isCompleted: boolean }[]>([])
  const [newTodo, setNewTodo] = useState('')

  function handleNewToDo(event: FormEvent) {
    setTodoList([...todoList, { content: newTodo, isCompleted: false }]);
    setNewTodo('');
    event.preventDefault();
  }

  function handleChangeToDo(event: ChangeEvent<HTMLInputElement>) {
    setNewTodo(event?.target.value)
  }

  function deleteToDo(toDoToDelete: string) {
    const toDoWithoutDeletedOne = todoList.filter(todo => {
      return todo.content !== toDoToDelete;
    })
    setTodoList(toDoWithoutDeletedOne)
  }

  function toggleToDoStatus(todoToToggle: string) {
    const updatedToDoList = todoList.map(todo => {
      if (todo.content === todoToToggle) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });
    setTodoList(updatedToDoList);
  }

  return (
    <div className=''>

      <nav className="bg-[#0D0D0D] flex justify-center h-[20rem]">
        <div className="grid items-center">
          <img src="src/assets/logo.svg" />
        </div>
      </nav>

      <div className=" mt-[-2.7rem] max-w-[50%] mx-auto">

        <div className="flex justify-center mt-[-2.7rem] w-full">

          <form onSubmit={handleNewToDo} className="flex gap-x-5 w-full">
            <input required value={newTodo} onChange={handleChangeToDo} type="text" className="bg-[#262626] h-[5.4rem] w-full rounded-xl text-2xl px-8 text-white" placeholder="Adicione uma nova tarefa" />
            <button className="bg-[#1E6F9F] h-[5.4rem] px-8 rounded-xl text-2xl text-white flex items-center justify-center gap-x-2 font-bold" type="submit">Criar<LuPlusCircle className="text-2xl" /></button>
          </form>

        </div>

        <header className="pt-20 flex justify-between border-b border-[#333333] pb-5">

          <div className="flex text-4xl text-[#4EA8DE] gap-x-2 items-center font-semibold">
            <p>Tarefas criadas</p> <p className="bg-[#262626] rounded-full px-4 text-white">{todoList.length}</p>
          </div>

          <div className="flex text-4xl text-[#5E60CE] gap-x-2 items-center font-semibold">
            <p>Concluídas</p> <p className="bg-[#262626] rounded-full px-4 text-white">{todoList.filter(todo => todo.isCompleted).length} de {todoList.length}</p>
          </div>

        </header>

      </div>

      <div className="mt-5 max-w-[50%] mx-auto">
        {todoList.map((todo) => (
          <div className="mt-5 first:mt-0 last:mb-0 " key={todo.content}>
            <ToDo
              content={todo.content}
              isCompleted={todo.isCompleted}
              onDeleteToDo={deleteToDo}
              onToggleStatus={() => toggleToDoStatus(todo.content)}
            />
          </div>
        ))}

      </div>

    </div>
  )
}

export default App
