import ButtonGroup from "@mui/material/ButtonGroup"
import FilterBtn from "./FilterBtn"

export default function FilterGrp({ options, filter, setFilter }) {
	return (
		<ButtonGroup variant='text' aria-label='text button group' color="success">
			{options.map((option) => (
				<FilterBtn
					key={option}
					name={option}
					setFilter={setFilter}
				/>
			))}
		</ButtonGroup>
	)
}
