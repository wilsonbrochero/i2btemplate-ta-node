'use strict'

class httpResponseCodes {

    constructor() {
        this.typeHttp = '';
        this.internalMessage = '';
    }

    getHttpResponseCode(code = 200, message = '') {
         
        switch (code) {
            case 100: 
                this.internalMessage = typeof message != 'undefined' && message != '' ? message : 'Continue' ; 
                break; 
            case 101: 
                this.internalMessage = typeof message != 'undefined' && message != '' ? message :  'Switching Protocols'; 
                break; 
            case 200: 
                this.internalMessage = typeof message != 'undefined' && message != '' ? message : 'OK';
                this.typeHttp = 'successfull';
                break; 
            case 201: 
                this.internalMessage = typeof message != 'undefined' && message != '' ? message : 'Created';
                this.typeHttp = 'successfull';
                break; 
            case 202: 
                this.internalMessage = typeof message != 'undefined' && message != '' ? message :  'Accepted'; 
                this.typeHttp = 'successfull';
                break; 
            case 203: 
                this.internalMessage = typeof message != 'undefined' && message != '' ? message :  'Non-Authoritative Information'; 
                this.typeHttp = 'successfull';
                break; 
            case 204: 
                this.internalMessage = typeof message != 'undefined' && message != '' ? message :  'No Content';
                this.typeHttp = 'successfull';
                break; 
            case 205: 
                this.internalMessage = typeof message != 'undefined' && message != '' ? message :  'Reset Content';
                this.typeHttp = 'successfull';
                break; 
            case 206:                     
                this.internalMessage = typeof message != 'undefined' && message != '' ? message :  'Partial Content';
                this.typeHttp = 'successfull';
                break; 
            case 300:                     
                this.internalMessage = typeof message != 'undefined' && message != '' ? message :  'Multiple Choices'; 
                this.typeHttp = 'redirection';
                break; 
            case 301:                     
                this.internalMessage = typeof message != 'undefined' && message != '' ? message :  'Moved Permanently'; 
                this.typeHttp = 'redirection';
                break; 
            case 302: 
                this.internalMessage = typeof message != 'undefined' && message != '' ? message :  'Moved Temporarily'; 
                this.typeHttp = 'redirection';
                break; 
            case 303: 
                this.internalMessage = typeof message != 'undefined' && message != '' ? message :  'See Other'; 
                this.typeHttp = 'redirection';
                break;
            case 304: 
                this.internalMessage = typeof message != 'undefined' && message != '' ? message :  'Not Modified';
                this.typeHttp = 'redirection'; 
                break; 
            case 305: 
                this.internalMessage = typeof message != 'undefined' && message != '' ? message :  'Use Proxy'; 
                this.typeHttp = 'redirection';
                break; 
            case 306: 
                this.internalMessage = typeof message != 'undefined' && message != '' ? message :  'Use Proxy'; 
                this.typeHttp = 'redirection';
                break; 
            case 307: 
                this.internalMessage = typeof message != 'undefined' && message != '' ? message :  'Use Proxy'; 
                this.typeHttp = 'redirection';
                break; 
            case 400: 
                this.internalMessage = typeof message != 'undefined' && message != '' ? message :  'Bad Request';
                this.typeHttp = 'client-error';
                break; 
            case 401: 
                this.internalMessage = typeof message != 'undefined' && message != '' ? message :  'Unauthorized'; 
                this.typeHttp = 'client-error';
                break; 
            case 402: 
                this.internalMessage = typeof message != 'undefined' && message != '' ? message :  'Payment Required'; 
                this.typeHttp = 'client-error';
                break; 
            case 403: 
                this.internalMessage = typeof message != 'undefined' && message != '' ? message :  'Forbidden';
                this.typeHttp = 'client-error';
                break; 
            case 404: 
                this.internalMessage = typeof message != 'undefined' && message != '' ? message :  'Not Found'; 
                this.typeHttp = 'client-error';
                break; 
            case 405: 
                this.internalMessage = typeof message != 'undefined' && message != '' ? message :  'Method Not Allowed'; 
                this.typeHttp = 'client-error';
                break; 
            case 406: 
                this.internalMessage = typeof message != 'undefined' && message != '' ? message :  'Not Acceptable'; 
                this.typeHttp = 'client-error';
                break; 
            case 407: 
                this.internalMessage = typeof message != 'undefined' && message != '' ? message :  'Proxy Authentication Required';
                this.typeHttp = 'client-error';
                break; 
            case 408: 
                this.internalMessage = typeof message != 'undefined' && message != '' ? message :  'Request Time-out'; 
                this.typeHttp = 'client-error';
                break; 
            case 409: 
                this.internalMessage = typeof message != 'undefined' && message != '' ? message :  'Conflict'; 
                this.typeHttp = 'client-error';
                break; 
            case 410: 
                this.internalMessage = typeof message != 'undefined' && message != '' ? message :  'Gone';
                this.typeHttp = 'client-error';
                break; 
            case 411: 
                this.internalMessage = typeof message != 'undefined' && message != '' ? message :  'Length Required'; 
                this.typeHttp = 'client-error';
                break; 
            case 412: 
                this.internalMessage = typeof message != 'undefined' && message != '' ? message :  'Precondition Failed';
                this.typeHttp = 'client-error';
                break; 
            case 413: 
                this.internalMessage = typeof message != 'undefined' && message != '' ? message :  'Request Entity Too Large'; 
                this.typeHttp = 'client-error';
                break; 
            case 414: 
                this.internalMessage = typeof message != 'undefined' && message != '' ? message :  'Request-URI Too Large'; 
                this.typeHttp = 'client-error';
                break; 
            case 415: 
                this.internalMessage = typeof message != 'undefined' && message != '' ? message :  'Unsupported Media Type'; 
                this.typeHttp = 'client-error';
                break; 
            case 416: 
                this.internalMessage = typeof message != 'undefined' && message != '' ? message :  'Request Range Not Satisfiable'; 
                this.typeHttp = 'client-error';
                break; 
            case 417: 
                this.internalMessage = typeof message != 'undefined' && message != '' ? message :  'Expectation Failed'; 
                this.typeHttp = 'client-error';
                break; 
            case 500: 
                this.internalMessage = typeof message != 'undefined' && message != '' ? message :  'Internal Server Error'; 
                this.typeHttp = 'server-error';
                break; 
            case 501: 
                this.internalMessage = typeof message != 'undefined' && message != '' ? message :  'Not Implemented'; 
                this.typeHttp = 'server-error';
                break; 
            case 502: 
                this.internalMessage = typeof message != 'undefined' && message != '' ? message :  'Bad Gateway';
                this.typeHttp = 'server-error';
                break; 
            case 503: 
                this.internalMessage = typeof message != 'undefined' && message != '' ? message :  'Service Unavailable'; 
                this.typeHttp = 'server-error';
                break; 
            case 504: 
                this.internalMessage = typeof message != 'undefined' && message != '' ? message :  'Gateway Time-out'; 
                this.typeHttp = 'server-error';
                break; 
            case 505: 
                this.internalMessage = typeof message != 'undefined' && message != '' ? message :  'HTTP Version not supported'; 
                this.typeHttp = 'server-error';
                break; 
            default: 
                this.internalMessage = typeof message != 'undefined' && message != '' ? message :  'Internal Server Error'; 
                this.typeHttp = 'server-error';
                break;                 
        }

        let messageResonse = [{
            'code': code,
            'internalMessage': this.internalMessage,
            'class_css': this.typeHttp
        }];

        return messageResonse;
    }
}

module.exports = httpResponseCodes