var Dispatcher = require('./dispatcher');

module.exports = {
	create: function (data) {
		Dispatcher.dispatch({
			type: "CREATE",
			data: data
		});
	},
	getPets: function () {
		Dispatcher.dispatch({
			type: "GET",
			data: null
		});
	}
}