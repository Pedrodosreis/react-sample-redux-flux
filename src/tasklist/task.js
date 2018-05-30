import React from 'react';
import { bindActionCreators } from 'redux';
import { deleteTask } from '../actions'
import { connect } from 'react-redux';

class Task extends React.Component {

	render() {
		return (
				<tr>
					<td>
						{this.props.task}
					</td>
					<td>
						<button onClick={() => {this.props.deleteTask(this.props.id)}}>
							Delete
						</button>
					</td>
				</tr>

			)
	}
}


function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		deleteTask
	}, dispatch);
}

function mapStateToProps(state, props) {
	return {
		key: 2
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);