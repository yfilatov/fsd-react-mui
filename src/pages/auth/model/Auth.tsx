import { FormEventHandler, useContext, useEffect } from 'react';
import LoginForm from '../ui/LoginForm';
import { createToken } from 'shared/util/jwt';
import { AuthUser, authContext } from 'entities/auth';

const Auth = () => {
  const { loginDispatch, checkAuth } = useContext(authContext);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const authHandler: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const userPassword = data.get('password');
    const userName = data.get('name');

    console.debug('userName: ', userName);
    console.debug('userPassword: ', userPassword);

    // TODO: call api to login user

    try {
      const userData: AuthUser = { name: 'Test User', login: userName?.toString() || '' };
      const token = createToken(userData);
      loginDispatch(token);
    } catch (error) {
      console.error('Error logging in user: ', error);
    }
  };

  return <LoginForm onSubmit={authHandler}/>;
};

export default Auth;
