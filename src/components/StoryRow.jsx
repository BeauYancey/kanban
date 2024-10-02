import Lane from "./Lane"

export default function StoryRow({story, setBoard, demo}) {
	return (
		<div className="story">
			<div className='lane story-lane'>
				<div className='card story-title'>
					<h4>{story.title}</h4>
					<div className="btn">new task +</div>
				</div>
			</div>
			<Lane story={story} status='to-do' setBoard={setBoard} demo={demo}/>
			<Lane story={story} status='doing' setBoard={setBoard} demo={demo}/>
			<Lane story={story} status='blocked' setBoard={setBoard} demo={demo}/>
			<Lane story={story} status='done' setBoard={setBoard} demo={demo}/>
		</div>
	)
}