import { AuthUser } from './AuthUser';

/*
 * AuthContext is used to provide the current user's authentication state to the app.
 */

export interface AuthContext {
  currentUser: AuthUser | null;
  checkAuth: () => void;
  loginDispatch: (token: string) => void;
  logoutDispatch: () => void;
}
