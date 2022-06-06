import passport from "passport";
import passportGoogle from "passport-google-oauth20";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "../../utils/secrets";
const GoogleStrategy = passportGoogle.Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: "206911355505-3918ep0qtnemtbt10gololkhg5r9a62b.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "/auth/google/redirect",
    },
    (accessToken, refreshToken, profile, done) => {
        return done(null, profile)
    }
  )
);