import { useForm } from '../../hooks/useForm';
import { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import { AuthForm,
  AuthFormInput, 
  AuthFormLabel, 
  AuthFormButton, 
  AuthFormTitle } from '../../css/authForm';
import Preview from './Preview';

const Login = (props) => {
  const authContext = useContext(AuthContext);

  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    };

    if(error === 'Invalid Credentials') {
      console.log(error);
      // setAlert
      clearErrors();
    };
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [values, handleChange] = useForm({email: '', password: ''});

  const { email, password } = values;

  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      // set alert
      console.log('set alert for failed login');
    } else {
      login({
        email,
        password
      });
    };
  };

  return (
    <>
    <AuthForm onSubmit={onSubmit}>
      <AuthFormTitle>Login</AuthFormTitle>
      <AuthFormLabel htmlFor='email'>Email Address</AuthFormLabel>
      <AuthFormInput
      name="email" 
      type="email" 
      value={values.email}
      onChange={handleChange}
      required
      />
      <AuthFormLabel htmlFor='email'>Password</AuthFormLabel>
      <AuthFormInput
      name="password"
      type="password" 
      value={values.password}
      onChange={handleChange}
      required
      />
      <AuthFormButton type="submit" value='login'/>
    </AuthForm>
    <Preview />
    </>
  );
};

export default Login;
