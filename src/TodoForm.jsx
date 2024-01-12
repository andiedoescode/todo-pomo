import { ListItem } from "@mui/material"
import TextField from "@mui/material/TextField"

import { useState } from "react"

export default function TodoForm({ addTask }) {
	const [task, setTask] = useState("")

	const handleChange = (e) => {
		setTask(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		addTask(task)
		setTask("")
	}

	return (
		<ListItem>
			<form onSubmit={handleSubmit}>
				<TextField
					sx={{ width: "475px", fontFamily: "Albert Sans" }}
					id='outlined-basic'
					label='What needs to be done?'
					variant='outlined'
					value={task}
					onChange={handleChange}
				/>
			</form>
		</ListItem>
	)
}
