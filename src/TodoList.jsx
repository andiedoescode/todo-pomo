import { Box, Typography } from "@mui/material"
import List from "@mui/material/List"
import TodoItem from "./TodoItem"
import TodoForm from "./TodoForm"
import FilterGrp from "./FilterGrp"

import { useState } from "react"
import { useEffect } from "react"

//Retrieve list from local storage under key "todos"
const getList = () => {
	const data = JSON.parse(localStorage.getItem("todos"))
	//If list doesn't exist in local storage, return empty array
	if (!data) return []
	return data
}

const filterAction = {
	All: () => true,
	Active: (task) => !task.completed,
	Completed: (task) => task.completed,
}
const filterNames = Object.keys(filterAction)

export default function TodoList() {
	const [todos, setTodos] = useState(getList)
	const [filter, setFilter] = useState("All")

	//Save to local storage any time todos list changes
	useEffect(() => {
		//key of 'todos' and stringify the array of todos
		localStorage.setItem("todos", JSON.stringify(todos))
	}, [todos])

	//Toggle task as complete/incomplete
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

	//Delete task from list
	const removeItem = (id) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((task) => task.id !== id)
		})
	}

	//Add task to list
	const addItem = (task) => {
		setTodos((prevTodos) => {
			return [
				...prevTodos,
				{ id: crypto.randomUUID(), text: task, completed: false },
			]
		})
	}

	//Filter task list
	const taskList = todos
		.filter(filterAction[filter])
		.map((task) => (
			<TodoItem
				task={task}
				key={task.id}
				toggleItem={() => toggleItem(task.id)}
				removeItem={() => removeItem(task.id)}
			/>
		))

	return (
		<>
			<Box sx={{ width: "100%", maxWidth: 500 }}>
				<Typography variant='h3' component='h1' gutterBottom>
					Pomo Focus
				</Typography>

				<TodoForm addTask={addItem} />

				<List
					sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
					{/* {todos.map((task) => {
						return (
							<TodoItem
								task={task}
								key={task.id}
								toggleItem={() => toggleItem(task.id)}
								removeItem={() => removeItem(task.id)}
							/>
						)
					})} */}
					{taskList}
					<FilterGrp
						options={filterNames}
						filter={filter}
						setFilter={setFilter}
					/>
				</List>
			</Box>
		</>
	)
}
