import { Router, Request, Response } from "express";
import passport from "passport";
import passportGoogle from "passport-google-oauth20";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "../../utils/secrets";
const GoogleStrategy = passportGoogle.Strategy;

passport.use(
  new GoogleStrategy(
    {
      clientID: "",
      clientSecret: "",
      callbackURL: "/auth/google/redirect",
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);
passport.serializeUser(function(user, done) {
  return done(null, user);
});

passport.deserializeUser(function(obj, done) {
  return done(null);
});

const router: Router = Router();

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);

router.get(
  "/auth/google/redirect",
  passport.authenticate("google"),
  (req: Request, res: Response) => {
    res.redirect("https://www.google.com/android/find?u=0")
  }
);

router.get("/success", (req, res) => {
  res.send(`Welcome`);
});

router.get(
  "/google/success",
  passport.authenticate("google", { failureRedirect: "/failed" }),
  (req: Request, res: Response) => {
    res.redirect("/success");
  }
);

// router.get("/login/redirect", passport.authenticate("google"), userLoggin);

export const Routers: Router = router;
