"use strict";

//const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const user = require("../user/UserEntity");
const genericResp = require("../../utils/response/GenericResponse");
const userResp = require("../../utils/response/UserResponse");

require('dotenv').config()

/**
 * @method 
 * @desc metodo que permite la consulta de un usuario en base de datos.
 * @version 1.0.0
 * @param {object} [req] objeto de tipo request con los datos del usuario a validar.
 * @returns {resolve} retorna una promesa con el estado de consulta.
 * @returns {userDB} objeto con datos del usuario.
 * @returns {token} token para el uso de los otros metodos del api.
 * @throws {Error} Error general 
 */

exports.authentication = (req) => {

    return new Promise(resolve => {

        try {          

            let body = req.body;               

            user.findOne({ email: body.email }, (err, userDB) => {                
                

                if (err) {
                    console.log('-->1');
                    resolve(genericResp.response(400, err, false))
                }

                if (!userDB) {
                    console.log('-->2');
                    resolve(genericResp.response(400, 'Usuario o contraseña incorrectos', false))
                }

                /*if( !bcrypt.compareSync(body.password, userDB.password ) ) {
                    return res.status(400).json({
                        ok: false,
                        err: {
                            message: 'Usuario o contraseña incorrectos'
                        }
                    });
                }*/

                let token = jwt.sign({
                    user: userDB
                }, process.env.SEED, { expiresIn: process.env.EXPIRES_TOKEN });


                resolve(userResp.response(200, true, '', userDB, token))

            });
        } catch (error) {                    
            resolve(genericResp.response(500, error, false))
        }

    });
}