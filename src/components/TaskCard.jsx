export default function TaskCard({task}) {

	function handleDrag(e) {
		e.dataTransfer.setData('task', JSON.stringify(task))
	}

	return (
		<div className='card' draggable onDragStart={handleDrag}>
			<h4>{task.title}</h4>
		</div>
	)
}