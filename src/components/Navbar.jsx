import { Link } from "react-router-dom";

export default function Navbar() {

	return (
		<nav>
			<Link to='/'><h2>kanban</h2></Link>
			<Link to='/boards'><h3>boards</h3></Link>
		</nav>
	)
}