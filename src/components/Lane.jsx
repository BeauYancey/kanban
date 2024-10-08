import TaskCard from "./TaskCard"

export default function Lane({story, status, setBoard, demo}) {

	function updateTaskStatus(storyId, taskId, newStatus) {
		console.log(newStatus)
		setBoard((prevBoard) => {
			return {
				title: prevBoard.title,
				stories: prevBoard.stories.map((story) => {
					if (story.id === storyId) {
						return {
							...story,
							tasks: story.tasks.map((task) => taskId === task.id ? { ...task, status: newStatus } : task)
						};
					}
					return story;
				})
			}
		});
		if (!demo) {
			fetch(`/api/task/${taskId}?change=status`, {
				method: 'PATCH',
				body: JSON.stringify({status: newStatus}),
				headers: {
					'Content-type': 'application/json; charset=UTF-8'
				}
			})
			.then(res => res.json())
			.then(data => console.log(data))
		}
	}

	function handleDragOver(e) {
		e.preventDefault()
	}

	function handleDrop(e) {
		const task = JSON.parse(e.dataTransfer.getData('task'))
		console.log(task.status)
		updateTaskStatus(story.id, task.id, status)
	}

	return (
  	<div className='lane' onDragOver={handleDragOver} onDrop={handleDrop}>
			{story.tasks.map(task => {
				if (task.status === status) {
					return (
						<TaskCard task={task} key={task.id}/>
					)
				}
			})}
		</div>
	)
}