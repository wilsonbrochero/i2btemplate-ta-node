'use strict'

exports.response = (code, description, status, user, token) => {    
    return {
        code: code,
        description: description,
        status: status,
        user : user,
        token: token
    };
}
