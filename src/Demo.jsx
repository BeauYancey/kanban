import { useState } from "react"
import StoryRow from "./components/StoryRow"

export default function Demo() {
	const [board, setBoard] = useState(
		[
			{
				story: 'CS 340',
				tasks: [
					{id: 1, title: 'HW1', status: 'done', asignee: 'test'},
					{id: 2, title: 'HW2', status: 'doing', asignee: 'BeauYancey'},
					{id: 3, title: 'HW3', status: 'to-do', asignee: null},
				]
			},
			{
				story: 'CS 356',
				tasks: [
					{id: 4, title: 'Quiz 1', status: 'doing', asignee: 'BeauYancey'},
					{id: 5, title: 'Quiz 2', status: 'to-do', asignee: 'test'},
					{id: 6, title: 'Quiz 3', status: 'to-do', asignee: null},
				]
			},
			{
				story: 'WRTG 316',
				tasks: [
					{id: 7, title: 'Reading 1', status: 'done', asignee: 'BeauYancey'},
					{id: 8, title: 'Reading 2', status: 'done', asignee: 'BeauYancey'},
					{id: 9, title: 'Project 1', status: 'blocked', asignee: null},
				]
			}
		]
	)
  return (
		<main>
			<h1>Demo Board</h1>
			<div className='section-titles'>
				<div>stories</div>
				<div>to-do</div>
				<div>doing</div>
				<div>blocked</div>
				<div>done</div>
			</div>
			<div className='board'>
				{
					board.map(story => (
						<StoryRow story={story} />
					))
				}
			</div>
		</main>
	)
}