'use strict';

/**
 * @method 
 * @desc metodo que funciona como endpoint para la autenticacion de usuarios.
 * @version 1.0.0
 * @param {object} [req] objeto de tipo request con los datos del usuario a crear.
 * @returns {res} retorna estado http y formato json con datos del usuario
 * @throws {Error} Error general 
 */

module.exports.authentication = (event, context, callback) => {
    console.log('info', '[HANDLER] [MESSAGE] authentication ...');
  
    let response = {statusCode: 500, body: 'error general'};
   
    try {
        loginServ.authentication(event.body).then((msg) => { 
            response = {statusCode: 200, body: JSON.stringify(msg)};     
            callback(null, response);              
        }, (error) => {            
            response = {statusCode: 500, body: error};
            callback(null, response);
        })
    } catch (error) {       
        response = {statusCode: 500, body: error};
        callback(null, response);
    }
  };