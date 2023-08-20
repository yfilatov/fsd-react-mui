import React, { useCallback, useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import authReducer from '../reducers/authReducer';
import { AuthActionEnum } from '../data/AuthActionEnum';
import { authContext } from './authContext';

type AuthProviderProps = {
  children: React.ReactElement;
};

const AuthContextProvider = (props: AuthProviderProps) => {
  const { children } = props;
  const [currentUser, authDispatch] = useReducer(authReducer, null);
  const navigate = useNavigate();

  // Check if user detail is persisted, mostly catering for refreshing of the browser
  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      authDispatch({ type: AuthActionEnum.LOG_IN, payload: { authToken: token } });
    }
  }, []);

  const loginDispatch = useCallback(
    (token: string) => {
      authDispatch({
        type: AuthActionEnum.LOG_IN,
        payload: {
          authToken: token,
        },
      });
      navigate('/app');
    }, [navigate]);

  const logoutDispatch = useCallback(() => {
    authDispatch({ type: AuthActionEnum.LOG_OUT, payload: null });
    navigate('/login');
  }, [navigate]);

  const checkAuth = useCallback(() => {
    const token = localStorage.getItem('jwtToken');
    if (!token && currentUser) {
      logoutDispatch();
      return;
    }

    if (!currentUser && token) {
      loginDispatch(token);
      return;
    }
  }, [logoutDispatch, currentUser, loginDispatch]);

  // context values to be passed down to children
  const ctx = {
    currentUser,
    checkAuth,
    loginDispatch,
    logoutDispatch,
  };

  return <authContext.Provider value={ctx}>{children}</authContext.Provider>;
};

export default AuthContextProvider;


