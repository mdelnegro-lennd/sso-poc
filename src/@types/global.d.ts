import { Profile } from "@node-saml/node-saml";

declare global {
  namespace Express {
    export interface Request {
      // [REDACTED: lots of properties we already had defined]

      // Patch express.Request to match what @node-saml/passport-saml expects
      // (Monitor https://github.com/node-saml/passport-saml/issues/549 to see if this improves)
      samlLogoutRequest: Profile;
    }

    export interface User {
      // [REDACTED: lots of properties we already had defined]

      // Patch express.User to match what @node-saml/passport-saml expects
      // (Monitor https://github.com/node-saml/passport-saml/issues/549 to see if this improves)
      [key: string]: unknown;
    }
  }
}
