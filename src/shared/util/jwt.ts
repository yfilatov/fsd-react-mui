import { AuthUser } from '../../entities/auth';

const userData: AuthUser = { name: 'Test User', login: '12345569'?.toString() || '' };
const fakeToken = '12324560987';


export const createToken = (user: AuthUser) => {
  return fakeToken+user.login;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const decodeToken = (token: string) : AuthUser | null => {
  return userData;
}
