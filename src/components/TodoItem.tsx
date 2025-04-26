import { todo } from "../types/todo"

interface TodoItemProps {
    todo: todo;
}

export default function TodoItem({todo}: TodoItemProps) {
    return(
        <div>
            <label className="flex items-center gap-2 border rounded-md border-amber-400 p-2 m-5 hover:bg-amber-200">
                <input type="checkbox" className=" m-1 p-1" />
                <p className={todo.state ? "line-through text-shadow-amber-50" : " "}>
                    {todo.content}
                </p>
            </label>
            
        </div>
    )
}