'use strict';
const jwt = require("jsonwebtoken");
const config = require("config")
module.exports = class jwtService {
    constructor() { }
    // createToken(user) {
    // let token = this.createJwtToken(user);
    // let refreshToken = jwt.sign({ user }, process.env.SECRET, {
    //     algorithm: 'HS256',
    //     expiresIn: '5h',
    //     issuer: 'jonu',
    //     audience: 'jonu bhai'
    // });
    // return [token, refreshToken];
    // }
    createJwtToken(user) {
        return jwt.sign({ user }, process.env.SECRET, {
            algorithm: config.get("jwt.algorithm"),
            expiresIn: config.get("jwt.expiresIn"),
            issuer: config.get("jwt.issuer"),
            audience: config.get("jwt.audience")
        });
    }
};
