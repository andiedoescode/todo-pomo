import Button from "@mui/material/Button"

export default function FilterBtn({ name, setFilter }) {
	return <Button onClick={() => setFilter(name)} sx={{color: "#638889"}}>{name}</Button>
}
