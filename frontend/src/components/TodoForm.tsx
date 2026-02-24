function TodoForm() {
    return (
        <form className="flex gap-2 mb-8">
            <input
                type="text"
                placeholder="Add a new todo..."
                className="flex-1 px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
            />
            <button
                type="submit"
                className="px-6 py-3 bg-violet-500 hover:bg-violet-600 text-white font-semibold rounded-xl transition-colors cursor-pointer"
            >
                Add
            </button>
        </form>
    )
}

export default TodoForm
