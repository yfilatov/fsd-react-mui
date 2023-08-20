import { FormEventHandler } from 'react';
import styles from './LoginForm.module.scss';


type Props = {
  onSubmit: FormEventHandler<HTMLFormElement>;
};

const LoginForm = (props: Props) => {
  const { onSubmit } = props;
  return (
    <form onSubmit={onSubmit}>
      <div className={styles.logincontainer}>
        <h2>Login</h2>
        <div className={styles.inputcontainer}>
          <input
            id="login"
            name="login"
            type="text"
            placeholder="Username"
          />
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
          />
        </div>
        <button className={styles.loginbutton} type="submit">
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
