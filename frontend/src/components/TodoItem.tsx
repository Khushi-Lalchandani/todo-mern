function TodoItem() {
    return (
        <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl group hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            {/* Checkbox */}
            <input
                type="checkbox"
                className="w-5 h-5 rounded accent-violet-500 cursor-pointer shrink-0"
            />

            {/* Title */}
            <span className="flex-1 text-black dark:text-white/90 text-sm">
                Buy groceries
            </span>

            {/* Delete button */}
            <button className="opacity-0 group-hover:opacity-100 text-red-400 hover:text-red-300 transition-all text-xs px-2 py-1 rounded-lg hover:bg-red-500/10 cursor-pointer">
                Delete
            </button>
        </div>
    )
}

export default TodoItem
