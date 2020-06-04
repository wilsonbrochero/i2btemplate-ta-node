
"use strict";

const loginRepo = require("../../domain/login/LoginRepository");

/**
 * @method 
 * @desc metodo que funciona como acceso al dominio login.
 * @version 1.0.0
 * @param {object} [req] objeto de tipo request con los datos del usuario a crear.
 * @returns {resolve} retorna una promesa con el estado de la transacción.
 * @throws {Error} Error general 
 */

exports.authentication = (req) => {
    return new Promise(resolve => {
        loginRepo.authentication(req).then((resp) => {
            resolve (resp);
        }, (error) => {
            resolve (error);
        })
    })

}
