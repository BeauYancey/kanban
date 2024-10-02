import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navbar({authState, setAuthState}) {

	const [boards, setBoards] = useState([])

	useEffect(() => {
		if (authState) {
			fetch('/api/boards')
			.then(res => res.json())
			.then(data => setBoards(data))
		}
	}, [authState])

	async function logout() {
		await fetch('/api/session', {
			method: 'DELETE'
		})
		setAuthState(false)
		window.location.assign('/')
	}

	return (
		<nav>
			<Link to='/'><h2>kanban</h2></Link>
			{!authState && <Link to='/login'><h3>login</h3></Link>}
			{authState && 
			<div className='nav-drop'>
				<Link to='/boards'><h3>boards</h3></Link>
				<div className='nav-drop-content'>
					{boards.map((board) => (
						<Link to={`/board/${board.id}`} key={board.id}><h4>{board.title}</h4></Link>
					))}
					<Link to='/boards?create=true'><button className='btn'><h3>Create +</h3></button></Link>
				</div>
			</div>
			}
			{authState && <h3 style={{cursor: 'pointer'}} onClick={logout}>logout</h3>}
		</nav>
	)
}