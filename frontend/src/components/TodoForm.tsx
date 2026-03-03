import { useState } from "react"
const TodoForm = ({ onAdd }: { onAdd: (title: string) => void }) => {
    const [todoValue, setTodoValue] = useState("")

    const addTodo = (e: React.FormEvent) => {
        e.preventDefault()
        onAdd(todoValue)
        setTodoValue("")
    }
    return (
        <form className="flex gap-2 mb-6" onSubmit={addTodo}>
            <input
                type="text"
                placeholder="Add a new todo..."
                value={todoValue}
                onChange={(e) => setTodoValue(e.target.value)}
                className="flex-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-2.5 text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition"
            >
                Add
            </button>
        </form>
    )
}

export default TodoForm