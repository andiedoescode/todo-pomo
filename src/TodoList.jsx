import { Box, Typography } from "@mui/material"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Checkbox from "@mui/material/Checkbox"
import IconButton from "@mui/material/IconButton"
import CommentIcon from "@mui/icons-material/Comment"
import { useState } from "react"

const tempTodos = [
	{ id: 1, text: "feed the cat", completed: false },
	{ id: 2, text: "feed the zach", completed: false },
	{ id: 3, text: "organize the threads", completed: true },
]

export default function TodoList() {
	const [todos, setTodos] = useState(tempTodos)

	return (
		<>
			{/* <Box sx={{ width: "100%", maxWidth: 500 }}> */}
			<Typography variant='h3' component='h1' gutterBottom>
				Pomo Focus
			</Typography>

			<List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
				{todos.map((task) => {
					const labelId = `checkbox-list-label-${task.id}`

					return (
						<ListItem
							key={task.id}
							secondaryAction={
								<IconButton edge='end' aria-label='comments'>
									<CommentIcon />
								</IconButton>
							}
							disablePadding>
							<ListItemButton
								role={undefined}
								// onClick={handleToggle(value)}
								dense>
								<ListItemIcon>
									<Checkbox
										edge='start'
										checked={task.completed}
										tabIndex={-1}
										disableRipple
										inputProps={{ "aria-labelledby": labelId }}
									/>
								</ListItemIcon>
								<ListItemText id={labelId} primary={task.text} />
							</ListItemButton>
						</ListItem>
					)
				})}
			</List>
			{/* </Box> */}
		</>
	)
}
