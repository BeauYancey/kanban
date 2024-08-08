import { Link } from "react-router-dom";

export default function Navbar({authState}) {

	return (
		<nav>
			<Link to='/'><h2>kanban</h2></Link>
			{authState ? 
				<div className='nav-drop'>
					<h3>boards</h3>
					<div className='nav-drop-content'>
						<Link to='/board/1'><h4>Homework</h4></Link>
						<Link to='/board/2'><h4>Bathroom Renovation</h4></Link>
						<button className='btn' style={{cursor: 'pointer'}} onClick={() => console.log('clicked')}><h3>Create +</h3></button>
					</div>
				</div> :
				<Link to='/login'><h3>log in</h3></Link>
			}
		</nav>
	)
}