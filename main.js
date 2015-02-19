var React = require('react');
var Actions = require('./actions');
var Store = require('./store');

var App = React.createClass({
	getInitialState: function() {
		return {
			pets: Store.getPets()
		};
	},
	componentDidMount: function() {
		Store.on('change', this._onChange);

		setInterval(function () {
			Actions.create('bird' + Math.random());
		}, 500);
	},
	componentWillUnmount: function() {
		Store.removeListener('change', this._onChange);
	},
	render: function () {
		var pets = this.state.pets.map(function (pet) {
			return <li key={pet}>{pet}</li>
		});
		return (
			<div>
				<ul>
					{pets}
				</ul>
			</div>
		)
	},
	_onChange: function () {
		this.setState({
			pets: Store.getPets()
		});
	},
	_add: function () {
		Actions.create('bird' + Math.random());
	}
});

React.render(<App />, document.body);