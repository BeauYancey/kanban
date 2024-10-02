import { useEffect, useState } from "react"
import StoryRow from "./components/StoryRow"
import { useParams } from "react-router-dom"

export default function Board() {

	const {id} = useParams()

	const [board, setBoard] = useState({
		id: 0,
		title: '',
		stories: []
	})
	const [newStory, setNewStory] = useState(false)
	const [title, setTitle] = useState('')

	async function addStory() {
		const res = await fetch('/api/story', {
			method: 'POST',
			body: JSON.stringify({boardId: board.id, title: title}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8'
			}
		})
		if (res?.ok) {
			const data = await res.json()
			console.log(data)
			console.log({id: board.id, title: board.title, stories: [...board.stories, {id: data.id, title: title, tasks: []}]})
			setBoard(prev => ({id: prev.id, title: prev.title, stories: [...prev.stories, {id: data.id, title: title, tasks: []}]}))
			console.log(board)
		}
		setNewStory(false)
	}

	useEffect(() => {
		console.log(id)
		fetch(`/api/boards/${id}`)
		.then(res => res.json())
		.then(data => setBoard(data))
		.catch()
	}, [id])
  
	return (
		<main>
			<h1 style={{textAlign: 'center'}}>{board.title}</h1>
			<div className='section-titles'>
				<div><h4>stories</h4></div>
				<div><h4>to-do</h4></div>
				<div><h4>doing</h4></div>
				<div><h4>blocked</h4></div>
				<div><h4>done</h4></div>
			</div>
			<div className='board'>
				{
					board.stories.map(story => (
						<StoryRow story={story} key={story.id} setBoard={setBoard}/>
					))
				}
				{newStory ? 
					<div className="card card-light">
					<div style={{display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-evenly'}}>
						<input placeholder="title" style={{width: 'calc(100% - 8em)'}} onChange={(e) => setTitle(e.target.value)}/>
						<button className='btn btn-olive' onClick={addStory}><h3>+</h3></button>
						<button className='btn btn-light' onClick={() => setNewStory(false)}><h3>x</h3></button>
					</div>
				</div>
					:
					<div className="btn card card-light" onClick={() => setNewStory(true)}>
						New Story +
					</div>
				}
			</div>
		</main>
	)
}