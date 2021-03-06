import passport from 'passport';
import { Strategy as GitHubStrategy } from 'passport-github2';
import User from '../models/User';

passport.serializeUser((user, done) => done(null, user));

passport.deserializeUser((user: User, done) => done(null, user));

export default function (
  id: string,
  secret: string,
  url: string
): GitHubStrategy {
  return new GitHubStrategy(
    {
      clientID: id,
      clientSecret: secret,
      callbackURL: url
    },
    async function (
      accessToken: any,
      refreshToken: any,
      profile: { id: number },
      done: (err: any, user?: any) => any
    ) {
      let user: User | null;

      try {
        user = (await User.findOne(profile.id)) ?? null;
      } catch (e) {
        return done(e, null);
      }

      if (!user) {
        user = new User();
        user.id = profile.id;
        user.groups = [];
        await user.save();
      }

      return done(null, user);
    }
  );
}
