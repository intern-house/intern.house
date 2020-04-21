import React, { Component } from 'react';
import { Container } from './styles';

class LandingContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			serverStatus: 'Awaiting server response',
		};
	}

	componentDidMount() {
		// Call our fetch function below once the component mounts
		fetch('http://localhost:8000/example', {
			'Content-Type': 'application/json',
		})
			.then(res => res.json())
			.then(data => {
				this.setState({ serverStatus: data.data });
			})
			.catch(this.setState({ serverStatus: 'Server is offline' }));
	}

	render() {
		const { serverStatus } = this.state;

		return (
			<Container>
				<p>Landing Page</p>
				<br />
				{serverStatus}
			</Container>
		);
	}
}
export default LandingContainer;
