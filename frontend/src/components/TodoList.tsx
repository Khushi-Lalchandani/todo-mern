import TodoItem from './TodoItem'
import type { Todo } from '../App'

interface TodoListProps {
    todos: Todo[]
    deleteTodo: (id: string) => void
    toggleTodo: (id: string) => void
}

const TodoList = ({ todos, deleteTodo, toggleTodo }: TodoListProps) => {
    return (
        <ul className="flex flex-col gap-2">
            {todos.map((todo) => (
                <TodoItem key={todo._id} todo={todo} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
            ))}
        </ul>
    )
}

export default TodoList