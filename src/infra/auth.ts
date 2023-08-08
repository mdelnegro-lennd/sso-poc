import fs from "fs";
import passport from "passport";
import { Strategy as SamlStrategy } from "passport-saml";
import path from "path";

const samlStrategy = new SamlStrategy(
  {
    callbackUrl: "http://localhost:4000/sso/saml/callback",
    entryPoint:
      "https://trial-1154370.okta.com/app/trial-1154370_avixassopoc_1/exk6u1l3pcAK0HPll697/sso/saml",
    issuer: "http://www.okta.com/exk6u1l3pcAK0HPll697",
    cert: fs.readFileSync(path.join(__dirname, "../certs/okta.cert"), "utf8"),
  },
  (req, profile: any, done) => {
    console.log("samlStrategy");
    done(null, profile);
  }
);

passport.serializeUser((user: any, done) => {
  console.log("serializeUser");
  done(null, user);
});

passport.deserializeUser((user: any, done) => {
  console.log("serializeUser");
  done(null, user);
});

passport.use("samlStrategy", samlStrategy);

export { passport, samlStrategy };
