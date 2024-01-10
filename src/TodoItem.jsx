import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Checkbox from "@mui/material/Checkbox"
import IconButton from "@mui/material/IconButton"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function TodoItem({ task, toggleItem, removeItem }) {
	const labelId = `checkbox-list-label-${task.id}`

	return (
		<ListItem
			key={task.id}
			secondaryAction={
				<IconButton edge='end' aria-label='comments' onClick={removeItem}>
					<DeleteOutlineIcon />
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
						onChange={toggleItem}
					/>
				</ListItemIcon>
				<ListItemText id={labelId} primary={task.text} />
			</ListItemButton>
		</ListItem>
	)
}
