import {
	Box,
	Button,
	Divider,
	IconButton,
	ListItem,
	Typography,
	createTheme,
	ThemeProvider,
} from "@mui/material"
import List from "@mui/material/List"
import TodoItem from "./TodoItem"
import TodoForm from "./TodoForm"
import FilterGrp from "./FilterGrp"
import GitHubIcon from "@mui/icons-material/GitHub"

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
	minWidth: "280px",
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

	//Remove all completed tasks
	const clearComplete = () => {
		setTodos((prevTodos) => {
			return todos.filter((task) => !task.completed)
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
					sx={{ fontFamily: "Silkscreen", color: "#638889" }}>
					pomo focus
				</Typography>

				<List sx={listStyles}>
					<ListItem sx={{ justifyContent: "space-around", mt: 1, mb: 1 }}>
						<FilterGrp
							options={filterNames}
							filter={filter}
							setFilter={setFilter}
						/>
					</ListItem>

					<TodoForm addTask={addItem} />
					{taskList}
					<Divider />
					<ListItem sx={{ justifyContent: "space-between" }}>
						<Typography variant='body2'>
							{remaining} task{remaining !== 1 && "s"} left
						</Typography>
						<Button
							variant='outlined'
							size='small'
							color='error'
							onClick={clearComplete}>
							Clear Completed
						</Button>
					</ListItem>
				</List>
			</Box>

			<Typography
				variant='body2'
				component='span'
				sx={{ color: "#638889", display: "flex", justifyContent: "center" }}>
				built by
				<a
					href='https://github.com/andiedoescode/todo-pomo'
					target='_blank'
					rel='noreferrer'
					style={{ textDecoration: "underline dotted", color: "#638889", paddingLeft: "0.18rem"}}>
					andrea
				</a>
			</Typography>
		</ThemeProvider>
	)
}
