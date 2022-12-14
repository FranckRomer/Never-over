// import jwt from 'jsonwebtoken';
// import { serialize } from "cookie";
var cookie = require('cookie');
var jwt = require('jsonwebtoken');
import { NextApiRequest, NextApiResponse } from "next"

export default function loginHandler(req: NextApiRequest, res:NextApiResponse) {
    console.log(req.body)
    const { username, password } = req.body
    // check if email and password are valid

    // if email exists, check if password is correct
    
    // if password is correct

    if (username == 'admin' && password === '123') {
        console.log("!!!!! CONFIRMED  !!!!!")
        const token = jwt.sign({
            exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 30),  //seg min hora dia
            username: username,
            correo: 'franck'
        }, "secret")

        const serialized = cookie.serialize('myTokenName', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 1000 * 60 * 60 * 24 * 30,
            path: '/'
        })

        res.setHeader('Set-Cookie', serialized)
        return res.json('login succesfully')
    } 

    return res.status(401).json({error: 'invalid email or password'})


}