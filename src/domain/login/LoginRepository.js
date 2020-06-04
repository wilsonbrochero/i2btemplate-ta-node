"use strict";

const loginRepo = require("../../domain-detail/login/LoginRepositoryImpl");

/**
 * @method 
 * @desc metodo que funciona como acceso (Interfaz) a la immeplentación en la (login/LoginRepositoryImpl).
 * @version 1.0.0
 * @param {object} [req] objeto de tipo request con los datos del usuario a consultar.
 * @returns {resolve} retorna una promesa con el estado de la transacción.
 * @throws {Error} Error general 
 */

exports.authentication = (req) => {
    return new Promise(resolve => {
        loginRepo.authentication(req).then((resp) => {
            resolve(resp);
        }, (error) => {
            resolve(error);
        })
    })
}