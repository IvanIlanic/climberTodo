import { todo } from "../types/todo"

interface TodoItemProps {
    todo: todo;
}

export default function TodoItem({todo}: TodoItemProps) {
    return(
        <div>
            {todo.content}
        </div>
    )
}