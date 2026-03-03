import type { Todo } from '../App'
import { useState } from 'react'
import DeleteModal from './DeleteModal'
interface TodoItemProps {
    todo: Todo
    deleteTodo: (id: string) => void
    toggleTodo: (id: string) => void
}

const TodoItem = ({ todo, deleteTodo, toggleTodo }: TodoItemProps) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    return (
        <li className="flex items-center gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 group transition">
            {/* Checkbox */}
            <input
                type="checkbox"
                checked={todo.completed}
                className="w-4 h-4 accent-blue-600 cursor-pointer shrink-0"
                onChange={() => toggleTodo(todo._id)}
            />

            {/* Title */}
            <span className={`flex-1 text-sm ${todo.completed ? 'line-through text-gray-400 dark:text-gray-500' : 'text-gray-800 dark:text-gray-100'}`}>
                {todo.title}
            </span>

            {/* Delete button */}
            <button
                className="text-gray-300 dark:text-gray-600 hover:text-red-500 dark:hover:text-red-400 transition opacity-0 group-hover:opacity-100"
                aria-label="Delete todo"
                onClick={() => setShowDeleteModal(true)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6" />
                    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                    <path d="M10 11v6M14 11v6" />
                    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
                </svg>
            </button>
            {showDeleteModal && (
                <DeleteModal
                    onConfirm={() => { deleteTodo(todo._id); setShowDeleteModal(false) }}
                    onCancel={() => setShowDeleteModal(false)}
                />
            )}
        </li>
    )
}

export default TodoItem