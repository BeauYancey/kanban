import { useState, useEffect, useRef } from "react"
import { Link, useSearchParams } from "react-router-dom"

export default function BoardList() {

	const [showForm, setShowForm] = useState(false)
	const inputRef = useRef()
	const [title, setTitle] = useState('')
	const [boards, setBoards] = useState([])
	const [query, setQuery] = useSearchParams()

	useEffect(() => {
		fetch('/api/boards')
		.then(res => res.json())
		.then(data => setBoards(data))
	}, [])

	useEffect(() => {
		if (query.get('create')) {
			setShowForm(true)
		}
	}, [])

	useEffect(() => {
		inputRef.current && inputRef.current.focus()
	})

	async function addBoard() {
		const res = await fetch('/api/boards', {
			method: 'POST',
			body: JSON.stringify({title: title}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8'
			}
		})
		if (res?.ok) {
			const data = await res.json()
			setBoards(prev => [...prev, {id: data.id, scope: 0, title: title}])
		}
		setShowForm(false)
	}

	return (
		<main style={{display:'grid', gridTemplateColumns: '1fr 1fr', textAlign: 'center', gap: '2em'}}>
			<div>
				<h2>my boards</h2>
				<div style={{display: 'flex', flexDirection: 'column', gap: '1em'}}>
					{boards.filter(board => board.scope === 0).map(board => (
						<Link to={`/board/${board.id}`} key={board.id}>
							<div className='card'>
								<h3>{board.title}</h3>
							</div>
						</Link>
					))}
					{showForm ? 
						<div className="card card-light">
							<div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-evenly'}}>
								<input ref={inputRef} placeholder="title" style={{width: '75%'}} onChange={(e) => setTitle(e.target.value)}/>
								<button className='btn btn-olive' onClick={addBoard}><h3>+</h3></button>
								<button className='btn btn-light' onClick={() => setShowForm(false)}><h3>x</h3></button>
							</div>
						</div>
						:
						<div className='card card-light' onClick={() => setShowForm(true)}>
							<h3>create +</h3>
						</div>
					}
				</div>
			</div>
			<div>
				<h2>shared with me</h2>
				<div style={{display: 'flex', flexDirection: 'column', gap: '1em'}}>
					{boards.filter(board => board.scope !== 0).map(board => (
						<Link to={`/board/${board.id}`} key={board.id}>
							<div className='card'>
								<h3>{board.title}</h3>
							</div>
						</Link>
					))}
				</div>
			</div>
		</main>
	)
}