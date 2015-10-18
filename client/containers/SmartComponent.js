import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStarted } from '../actions';
import DumbComponent from '../components/DumbComponent';

class SmartComponent extends Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		this.props.dispatch(getStarted());
	}
	render() {
		return (
			<div>
				<DumbComponent welcomeText={ this.props.welcomeText } />
			</div>
		);
	}
}

export default connect(state => state)(SmartComponent);