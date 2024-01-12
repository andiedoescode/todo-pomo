import {
	Box,
	Divider,
	ListItem,
	Typography,
	createTheme,
	ThemeProvider,
} from "@mui/material"
import List from "@mui/material/List"
import TodoItem from "./TodoItem"
import TodoForm from "./TodoForm"
import FilterGrp from "./FilterGrp"

import { useState } from "react"
import { useEffect } from "react"

const theme = createTheme({
	typography: {
		fontFamily: ["Albert Sans", "sans-serif"].join(","),
		// fontSize: "1.5rem"
	},
})

const boxStyles = {
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	m: 6,
	p: 4,
	maxWidth: "600px",
	marginLeft: "auto",
	marginRight: "auto",
	backgroundColor: "#F9EFDB",
	boxShadow: "0px 10px 0px -5px #638889",
	border: "2px solid #638889",
	borderRadius: "15px",
}

const listStyles = {
	width: "100%",
	maxWidth: "500px",
}

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

	//Calculate number of todo tasks remaining
	const remaining = todos.filter((task) => !task.completed).length

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
		<ThemeProvider theme={theme}>
			<Box sx={boxStyles}>
				<Typography
					variant='h3'
					component='h1'
					gutterBottom
					sx={{ fontFamily: "Silkscreen", color: "#638889" }}>
					pomo focus
				</Typography>

				<List sx={listStyles}>
					<TodoForm addTask={addItem} />
					{taskList}
					<Divider />
					<ListItem sx={{ justifyContent: "space-between" }}>
						<Typography variant='body2'>
							{remaining} task{remaining !== 1 && "s"} left
						</Typography>
						<FilterGrp
							options={filterNames}
							filter={filter}
							setFilter={setFilter}
						/>
					</ListItem>
				</List>
			</Box>
		</ThemeProvider>
	)
}
