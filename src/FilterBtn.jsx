import Button from "@mui/material/Button"

export default function FilterBtn({ name, setFilter, isSelected }) {
	return (
		<Button
			onClick={() => setFilter(name)}
			sx={{
				color: "#638889",
				// fontSize: "1rem",
				fontWeight: isSelected ? "600" : "400",
			}}>
			{name}
		</Button>
	)
}
