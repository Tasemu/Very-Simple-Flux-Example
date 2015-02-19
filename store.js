var EventEmitter = require('events').EventEmitter;
var Dispatcher = require('./dispatcher');
var merge = require('react/lib/merge');

var _dispatchToken;
var _pets = ['cat', 'dog'];

var Store = merge(EventEmitter.prototype, {
	getPets: function () {
		return _pets;
	},
	addPet: function (pet) {
		_pets.push(pet);
		this.emit('change');
	}
});

Dispatcher.register(function (action) {
	switch (action.type) {
		case "CREATE":
			Store.addPet(action.data)
			break;
	}
}),

module.exports = Store;

