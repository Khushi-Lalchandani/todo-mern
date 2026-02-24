const express = require('express')
const router = express.Router()
const Todo = require('../models/Todo')
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find()
        res.status(200).json(todos)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

})
router.post('/', async (req, res) => {
    try {
        const { title } = req.body
        const todo = new Todo({ title, completed: false })
        await todo.save()
        res.status(201).json(todo)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})
router.put('/:id', async (req, res) => {

    try {
        const id = req.params.id
        const { title, completed } = req.body
        const todo = await Todo.findByIdAndUpdate(id, { title, completed }, { new: true })
        res.status(200).json(todo)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

})
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const todo = await Todo.findByIdAndDelete(id)
        res.status(200).json(todo)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

})
module.exports = router
