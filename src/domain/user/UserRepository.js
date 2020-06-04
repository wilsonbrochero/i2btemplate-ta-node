"use strict";

const loginRepo = require("../../domain-detail/user/UserRepositoryImpl");

/**
 * @method 
 * @desc metodo que funciona como acceso (Interfaz) a la immeplentación [UserRepositoryImpl:userSave].
 * @version 1.0.0
 * @param {object} [req] objeto de tipo request con los datos del usuario a crear.
 * @returns {resolve} retorna una promesa con el estado de la transacción.
 * @throws {Error} Error general 
 */

exports.userSave = (req) => {
    return new Promise(resolve => {
        loginRepo.userSave(req).then((resp) => {
            resolve(resp);
        }, (error) => {
            resolve(error);
        })
    })
}


/**
 * @method 
 * @desc metodo que funciona como acceso (Interfaz) a la immeplentación en la [UserRepositoryImpl:getUsers].
 * @version 1.0.0
 * @param {object} [req] objeto de tipo request con los datos del usuario a crear.
 * @returns {resolve} retorna una promesa con el con en listado de los usuarios creados.
 * @throws {Error} Error general 
 */

exports.getUsers = (req) => {
    return new Promise(resolve => {
        loginRepo.getUsers(req).then((resp) => {
            resolve(resp);
        }, (error) => {
            resolve(error);
        })
    })
}