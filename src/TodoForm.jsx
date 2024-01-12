import { ListItem } from "@mui/material"
import TextField from "@mui/material/TextField"
import { InputAdornment } from "@mui/material"
import { IconButton } from "@mui/material"
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft"

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
			<form onSubmit={handleSubmit} style={{ width: "100%" }}>
				<TextField
					id='outlined-basic'
					label='What needs to be done?'
					variant='outlined'
					color='success'
					fullWidth
					value={task}
					onChange={handleChange}
					InputProps={{
						endAdornment: (
							<InputAdornment position='end'>
								<IconButton aria-label='create todo' edge='end' type='submit'>
									<KeyboardDoubleArrowLeftIcon />
								</IconButton>
							</InputAdornment>
						),
					}}
				/>
			</form>
		</ListItem>
	)
}
