"use strict";

//const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const user = require("./UserEntity");
const genericResp = require("../../utils/response/GenericResponse");
const userResp = require("../../utils/response/UserResponse");

/**
 * @method 
 * @desc metodo que permite la creación en base de datos de un usuario.
 * @version 1.0.0
 * @param {object} [req] objeto de tipo request con los datos del usuario a crear.
 * @returns {resolve} retorna una promesa con el estado de la transacción.
 * @throws {Error} Error general 
 */
exports.userSave = (req) => {
    return new Promise(resolve => {
        try {

            let body = req.body;
            let newUser = new user({
                name: body.name,
                email: body.email,
                //password: bcrypt.hashSync(body.password, 10),
                password: body.password,
                role: body.role
            });

            newUser.save((err, userDB) => {
                if (err) {
                    resolve(genericResp.response(400, err, false))
                }
                resolve(userResp.response(200, true, '', userDB, null))
            });


        } catch (error) {          
            resolve(genericResp.response(500, error, false))
        }

    });
}


/**
 * @method 
 * @desc metodo que permite la la consulta en base de datos de los usuarios creados.
 * @version 1.0.0
 * @param {object} [req] objeto de tipo request con los datos del usuario a crear.
 * @returns {resolve} retorna listado de los usuarios.
 * @throws {Error} Error general 
 */
exports.getUsers = (req) => {
    return new Promise(resolve => {
        try {

            let limit = req.query.limit || process.env.DATABASE_CONECCTION || 20;
            limit = Math.max(0, Number(limit));

            let offset = req.query.offset || 0;
            offset = Math.max(0, Number(offset));
            offset = limit * offset;

            let fields = req.query.fields || '';

            user.find({}, fields)
                .skip(offset)
                .limit(limit)
                .exec().then(response => {
                    user.count().then(itemTotal => {
                        resolve({code:200, OK: true,user: response,itemTotal})
                    });
                }).catch(error => {
                    resolve({code:400, OK: false,error})                   
                });

        } catch (error) {          
            resolve(genericResp.response(500, error, false))
        }

    });
}