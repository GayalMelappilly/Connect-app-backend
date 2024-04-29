import express, { json } from 'express'
import { failed, signup } from '../controllers/auth.controller.js'
import passport from 'passport'
import cookieSession from 'cookie-session';
import { logout } from '../controllers/auth.controller.js';


const router = express.Router()

// function isLoggedIn(req, res, next) {
//     req.user ? next() : res.sendStatus(401);
// }

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'], prompt: 'select_account' }), (req, res, next) => {
    next()
})
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/auth/failure' }), signup)

router.get('/failure', failed)

router.post('/logout', logout)


export default router
