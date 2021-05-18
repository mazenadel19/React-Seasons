import React, { Component } from 'react';
import './App.css';
import Loader from './components/Loader';
import SeasonDisplay from './components/SeasonDisplay';

export default class App extends Component {
	state = {
		lat: null,
		errMsg: '',
	};

	//responsible for the initial data loading
	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({ lat: position.coords.latitude }),
			err => this.setState({ errMsg: err.message }),
		);
	}

	//responsible for the in response (multiple) data loading like when u send props or setState
	//example network request(calling api) after user's action .. click button, enter text in input
	componentDidUpdate() {}

	renderContent() {
		if (this.state.lat) return <SeasonDisplay lat={this.state.lat} />;

		if (this.state.errMsg) return <> Error:{this.state.errMsg}</>;

		return (
			<>
				<Loader message='Please accept location request' />
			</>
		);
	}

	render() {
		return <>{this.renderContent()}</>;
	}
}
