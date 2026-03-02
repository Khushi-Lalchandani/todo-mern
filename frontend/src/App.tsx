import './index.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import { useState, useEffect } from 'react'
import API from './api.js'
export interface Todo {
  _id: string
  title: string
  completed: boolean
  createdAt: string
  updatedAt: string
}
function App() {


  const [todos, setTodos] = useState<Todo[]>([])
  const fetchTodos = async () => {
    try {
      const response = await API.get("/api/todos")
      console.log(response.data)
      setTodos(response.data)
    } catch (error) {
      console.error("Failed to fetch todos:", error)
    }
  }
  useEffect(() => {
    fetchTodos()
  }, [])
  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">

        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-black dark:text-white mb-1">My Todos</h1>
          <p className="text-black/40 dark:text-white/40 text-sm">Stay organized, get things done.</p>
        </div>

        {/* Card */}
        <div className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-2xl">

          {/* Stats */}
          <div className="flex gap-4 mb-6">
            <div className="flex-1 bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-xl p-3 text-center">
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-300">3</p>
              <p className="text-blue-500/70 dark:text-blue-400/70 text-xs">Total</p>
            </div>
            <div className="flex-1 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl p-3 text-center">
              <p className="text-2xl font-bold text-green-600 dark:text-green-300">1</p>
              <p className="text-green-500/70 dark:text-green-400/70 text-xs">Completed</p>
            </div>
            <div className="flex-1 bg-orange-100 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800 rounded-xl p-3 text-center">
              <p className="text-2xl font-bold text-orange-600 dark:text-orange-300">2</p>
              <p className="text-orange-500/70 dark:text-orange-400/70 text-xs">Remaining</p>
            </div>
          </div>


          <TodoForm />
          <TodoList />
        </div>
      </div>
    </div>
  )
}

export default App
