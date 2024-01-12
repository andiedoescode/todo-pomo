import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import Checkbox from "@mui/material/Checkbox"
import IconButton from "@mui/material/IconButton"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

export default function TodoItem({ task, toggleItem, removeItem }) {
	const labelId = `checkbox-list-label-${task.id}`

	return (
		<ListItem
			key={task.id}
			secondaryAction={
				<IconButton edge='end' aria-label='comments' onClick={removeItem}>
					<DeleteOutlineIcon sx={{color: "#638889"}}/>
				</IconButton>
			}
			disablePadding>
			<ListItemButton role={undefined}>
				<ListItemIcon>
					<Checkbox
						edge='start'
						checked={task.completed}
						tabIndex={-1}
						disableRipple
						inputProps={{ "aria-labelledby": labelId }}
						onChange={toggleItem}
						icon={<RadioButtonUncheckedIcon/>}
						checkedIcon={<CheckCircleOutlineIcon/>}
						color= "warning"
					/>
				</ListItemIcon>
				<ListItemText
					id={labelId}
					primary={task.text}
				/>
			</ListItemButton>
		</ListItem>
	)
}
