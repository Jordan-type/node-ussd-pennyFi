import express from 'express';
import { ussdRouter } from 'ussd-router';

const router = express.Router()


router.post("/", async(req, res, next) => {
    res.set('Content-Type: text/plain')
    
    const { body: { phoneNumber: phoneNumber, sessionId: sessionId, serviceCode: serviceCode  }} = req
    const { body: { text: rawText } } = req

    const text = ussdRouter(rawText)
    var data = text.split('*')
    const footer = '\n0: Back 00: Home';
    const home = '\n00: Home';
    let msg = ''

    if ("") {
        // logic registration

    } else if (text === '') {
        msg = `Welcome to PennFi 
        \n1: Create Wallet
        \n2: Get Balance
        \n3: Transfer`
    }

 next()
})

export default router


