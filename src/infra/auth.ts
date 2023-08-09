import fs from "fs";
import passport from "passport";
import { Strategy as SamlStrategy, VerifiedCallback } from "passport-saml";
import path from "path";

const samlStrategy = new SamlStrategy(
  {
    callbackUrl: "/auth/sso/saml/callback",
    entryPoint:
      "https://trial-1154370.okta.com/app/trial-1154370_avixassopoc_1/exk6u1l3pcAK0HPll697/sso/saml",
    issuer: "http://www.okta.com/exk6u1l3pcAK0HPll697",
    cert: fs.readFileSync(path.join(__dirname, "../certs/okta.cert"), "utf8"),
  },
  (profile: any, done: VerifiedCallback) => {
    console.log("Succesfully Profile", profile);
    done(null, profile);
  }
);

passport.serializeUser(function (user: any, done) {
  console.log("serializeUser");
  done(null, user);
});

passport.deserializeUser(function (user: any, done) {
  console.log("serializeUser");
  done(null, user);
});

passport.use("saml", samlStrategy);

export { passport, samlStrategy };
