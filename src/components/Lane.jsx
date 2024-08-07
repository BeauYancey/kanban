import TaskCard from "./TaskCard"

export default function Lane({story, status}) {
	return (
  <div className={`lane ${status}`}>
			{story.tasks.map(task => {
				if (task.status === status) {
					return (
						<TaskCard task={task} />
					)
				}
			})}
		</div>
	)
}