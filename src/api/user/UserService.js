
"use strict";

const userRepo = require("../../domain/user/UserRepository");

/**
 * @method 
 * @desc metodo que funciona como acceso al dominio {user} [UserRepository:userSave].
 * @version 1.0.0
 * @param {object} [req] objeto de tipo request con los datos del usuario a crear.
 * @returns {resolve} retorna una promesa con el estado de la transacción.
 * @throws {Error} Error general 
 */

exports.userSave = (req) => {
    return new Promise(resolve => {
        userRepo.userSave(req).then((resp) => {
            resolve(resp);
        }, (error) => {
            resolve(error);
        })
    })
}


/**
 * @method 
 * @desc metodo que funciona como acceso al dominio {user} [UserRepository:getUsers].
 * @version 1.0.0
 * @param {object} [req] objeto de tipo request con los datos del usuario a crear.
 * @returns {resolve} retorna una promesa con el con en listado de los usuarios creados.
 * @throws {Error} Error general 
 */

exports.getUsers = (req) => {
    return new Promise(resolve => {
        userRepo.getUsers(req).then((resp) => {
            resolve(resp);
        }, (error) => {
            resolve(error);
        })
    })
}
