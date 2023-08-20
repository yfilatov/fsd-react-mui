import { AuthActionEnum } from './AuthActionEnum';

export type AuthAction = {
    type: AuthActionEnum.LOG_IN,
    payload: {
        authToken: string;
    }
} | {
    type: AuthActionEnum.LOG_OUT,
    payload: null,
}
