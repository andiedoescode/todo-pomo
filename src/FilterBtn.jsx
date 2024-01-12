import Button from "@mui/material/Button"

export default function FilterBtn({ name, setFilter }) {
	return <Button onClick={() => setFilter(name)}>{name}</Button>
}
