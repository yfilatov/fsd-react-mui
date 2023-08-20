import { Reducer } from 'react';
import { AuthAction } from '../data/AuthActions';
import { decodeToken } from 'shared/util/jwt';
import { AuthUser } from '../../index';


const authReducer: Reducer<AuthUser | null, AuthAction> = (state, action) => {
  // user successfully authenticated
  if (action.type === 'LOG_IN') {
    const token = action.payload.authToken;
    localStorage.setItem('jwtToken', token);
    return decodeToken(token);
  }

  // log out user
  if (action.type === 'LOG_OUT') {
    localStorage.removeItem('jwtToken');
    return null;
  }

  return null;
};

export default authReducer;
