import { Link } from "react-router-dom";

export default function Navbar({authState, setAuthState}) {

	async function logout() {
		await fetch('/api/session', {
			method: 'DELETE'
		})
		setAuthState(false)
	}

	return (
		<nav>
			<Link to='/'><h2>kanban</h2></Link>
			{!authState && <Link to='/login'><h3>login</h3></Link>}
			{authState && 
			<div className='nav-drop'>
				<h3>boards</h3>
				<div className='nav-drop-content'>
					<Link to='/board/1'><h4>Homework</h4></Link>
					<Link to='/board/2'><h4>Bathroom Renovation</h4></Link>
					<button className='btn' style={{cursor: 'pointer'}}><h3>Create +</h3></button>
				</div>
			</div>
			}
			{authState && <h3 style={{cursor: 'pointer'}} onClick={logout}>logout</h3>}
		</nav>
	)
}