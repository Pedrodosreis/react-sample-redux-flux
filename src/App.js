import React, {Component} from 'react';
import Header from './header/Header';
import TaskBar from './Taskbar';
import TaskList from './tasklist/TaskList'


class App extends Component {
	render() {
		return (
				<div>
					<Header />
					<TaskBar />
					<TaskList />
				</div>


			);
	}
}

export default App;