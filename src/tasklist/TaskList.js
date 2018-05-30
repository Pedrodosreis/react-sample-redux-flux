import React from 'react';
import {connect} from 'react-redux';
import Task from './task'
import { deleteTask } from '../index'

class TaskList extends React.Component {

	render() {

		return (
				<table>
					<thead>
						<tr>
							<th> Task </th>
							<th> Action </th>
						</tr>

					</thead>
					<tbody>
						{
							this.props.task.map(
								(task, index) => 
									<Task key={index} task={task} />
							)
						}

					</tbody>

				</table>

			)
	}
}

function mapStateToProps(state) {
	return {
		task: state.tasks
	}
}

export default connect(mapStateToProps)(TaskList);