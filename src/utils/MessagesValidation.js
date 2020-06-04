'use strict'

class messagesValidation {

    constructor() {
        this.type = '';
        this.message = '';
    }

    getMessage(type = 'required', message = '') {

        switch (type) {
            case 'required': 
                this.message = typeof message != 'undefined' && message != '' ? message : 'This field is required'; 
                break; 
            case 'email_invalid': 
                this.message = typeof message != 'undefined' && message != '' ? message : 'Email is invalid'; 
                break;
            case 'valid_rol':
                this.message = typeof message != 'undefined' && message != '' ? message : 'The role is not valid'; 
                break;
            case 'valid_rol':
                this.message = typeof message != 'undefined' && message != '' ? message : 'The role is not valid'; 
                break;
            default: 
                this.message = typeof message != 'undefined' && message != '' ? message : 'This field is required'; 
                break; 
        }

        return this.message;

    }
}

module.exports = messagesValidation;