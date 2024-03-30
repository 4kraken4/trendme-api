import passport from '../../services/oauth2/aouth2.service.js'

const oauth2 = {
  authenticate: passport.authenticate('oauth2', { session: false }),

  callback: passport.authenticate('oauth2', {
    session: false,
    failureRedirect: '/login',
  }),
}

export default oauth2
