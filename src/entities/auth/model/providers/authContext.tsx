import { AuthContext } from '../data/AuthContext';
import { createContext } from 'react';

const defaultAuthContext: AuthContext = {
  currentUser: null,
  checkAuth: () => {
  },
  loginDispatch: () => {
  },
  logoutDispatch: () => {
  },
};

// Auth context
export const authContext = createContext<AuthContext>(defaultAuthContext);

