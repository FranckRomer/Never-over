import { NextApiRequest, NextApiResponse } from "next"
const jwt = require('jsonwebtoken')
// import { verify } from "jsonwebtoken"

export default function profileHandler(req: NextApiRequest, res: NextApiResponse) {
    //
    try {
        const { myTokenName } = req.cookies
        if (!myTokenName) {
            return res.status(401).json({error: 'no token'})
        } 
        const user = jwt.verify(myTokenName, 'secret')
        return res.json({
            email: user.email,
            username: user.username
        })
    } catch (error) {
        return res.status(401).json({
            error: 'invalid token'
        })
    }


}