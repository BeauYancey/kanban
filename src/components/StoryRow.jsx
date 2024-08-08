import Lane from "./Lane"

export default function StoryRow({story, setBoard}) {
	return (
		<div className="story">
			<div className='lane story-lane'>
				<div className='card story-title'>
					<h4>{story.story}</h4>
				</div>
			</div>
			<Lane story={story} status='to-do' setBoard={setBoard} />
			<Lane story={story} status='doing' setBoard={setBoard} />
			<Lane story={story} status='blocked' setBoard={setBoard} />
			<Lane story={story} status='done' setBoard={setBoard} />
		</div>
	)
}