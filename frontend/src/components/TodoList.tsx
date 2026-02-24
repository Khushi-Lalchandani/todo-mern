import TodoItem from './TodoItem'

function TodoList() {
    return (
        <div className="flex flex-col gap-2">
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    )
}

export default TodoList
