import Lane from "./Lane"

export default function StoryRow({story}) {
	return (
		<div className="story">
		<div className='card'>
			{story.story}
		</div>
		<Lane story={story} status='to-do' />
		<Lane story={story} status='doing' />
		<Lane story={story} status='blocked' />
		<Lane story={story} status='done' />

	</div>
	)
}