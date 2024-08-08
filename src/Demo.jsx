import { useEffect, useState } from "react"
import StoryRow from "./components/StoryRow"

export default function Demo() {

	const [board, setBoard] = useState(
		[
			{
				story: 'CS 340',
				id: 1,
				tasks: [
					{id: 1, title: 'HW1', status: 'done', assignee: 'test'},
					{id: 2, title: 'HW2', status: 'doing', assignee: 'BeauYancey'},
					{id: 3, title: 'HW3', status: 'to-do', assignee: null},
				]
			},
			{
				story: 'CS 356',
				id: 2,
				tasks: [
					{id: 4, title: 'Quiz 1', status: 'doing', assignee: 'BeauYancey'},
					{id: 5, title: 'Quiz 2', status: 'to-do', assignee: 'test'},
					{id: 6, title: 'Quiz 3', status: 'to-do', assignee: null},
				]
			},
			{
				story: 'WRTG 316',
				id: 3,
				tasks: [
					{id: 7, title: 'Reading 1', status: 'done', assignee: 'BeauYancey'},
					{id: 8, title: 'Reading 2', status: 'done', assignee: 'BeauYancey'},
					{id: 9, title: 'Project 1', status: 'blocked', assignee: null},
				]
			}
		]
	)
  
	return (
		<main>
			<h1 style={{textAlign: 'center'}}>Demo Board</h1>
			<div className='section-titles'>
				<div><h4>stories</h4></div>
				<div><h4>to-do</h4></div>
				<div><h4>doing</h4></div>
				<div><h4>blocked</h4></div>
				<div><h4>done</h4></div>
			</div>
			<div className='board'>
				{
					board.map(story => (
						<StoryRow story={story} key={story.id} setBoard={setBoard}/>
					))
				}
			</div>
		</main>
	)
}