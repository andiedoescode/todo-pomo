import { Box, Typography } from "@mui/material"
import List from "@mui/material/List"
import TodoItem from "./TodoItem"
import TodoForm from "./TodoForm"

import { useState } from "react"

const tempTodos = [
	{ id: 1, text: "feed the cat", completed: false },
	{ id: 2, text: "feed the zach", completed: false },
	{ id: 3, text: "organize the threads", completed: true },
]

export default function TodoList() {
	const [todos, setTodos] = useState(tempTodos)

	const toggleItem = (id) => {
		setTodos((prevTodos) => {
			return prevTodos.map((task) => {
				if (task.id === id) {
					return { ...task, completed: !task.completed }
				} else {
					return task
				}
			})
		})
	}

	const removeItem = (id) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((task) => task.id !== id)
		})
	}

	const addItem = (task) => {
		setTodos((prevTodos) => {
			return [
				...prevTodos,
				{id: crypto.randomUUID(), text: task, completed: false}
			] 
		})
	}

	return (
		<>
			<Box sx={{ width: "100%", maxWidth: 500 }}>
				<Typography variant='h3' component='h1' gutterBottom>
					Pomo Focus
				</Typography>

				<TodoForm addTask={addItem}/>

				<List
					sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
					{todos.map((task) => {
						return (
							<TodoItem
								task={task}
								key={task.id}
								toggleItem={() => toggleItem(task.id)}
								removeItem={() => removeItem(task.id)}
							/>
						)
					})}
				</List>
			</Box>
		</>
	)
}
