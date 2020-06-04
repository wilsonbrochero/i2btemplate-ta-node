'use strict';

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const messagesValidation = require('../../utils/MessagesValidation.js');
let messages = new messagesValidation();

let validRoles = {
	values: ['ADMIN_ROLE', 'DOER_ROLE'],
	messages: '{VALUE}' + messages.getMessage('valid_rol')
}

let Schema = mongoose.Schema;

let usersSchema = new Schema({
	name: {
		type: String,
		require: [true, messages.getMessage('require')]
	},
	email: {
		type: String,
		unique: true,
		require: [true, messages.getMessage('require')]
	},
	password: {
		type: String,
		required: [true, messages.getMessage('require')]
	},
	img: {
		type: String,
		require: false
	},
	role: {
		type: String,
		default: 'DOER_ROLE',
		enum: validRoles
	},
	google: {
		type: Boolean,
		default: false
	},
	active: {
		type: Boolean,
		default: true
	}
});

usersSchema.methods.toJSON = function() {

	let user = this;
	let userObject = user.toObject();
	delete userObject.password;
	
	return userObject;
}

usersSchema.plugin(uniqueValidator, { messages: '{PATH} must be unique' });

module.exports = mongoose.model('users', usersSchema);
