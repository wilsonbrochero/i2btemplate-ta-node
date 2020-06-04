'use strict'

exports.response = (code, description, status) => {
    return {
        code: code,
        description: description,
        status: status
    };
}