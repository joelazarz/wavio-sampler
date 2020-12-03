import { useForm } from '../../hooks/useForm';
import { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import { 
  ContainerLeft,
  ContainerRight,
  AuthForm,
  AuthFormInput, 
  AuthFormLabel, 
  AuthFormButton, 
  AuthFormTitle 
} from '../../css/authForm';
import Preview from './Preview';

const Register = ({theme, ...props}) => {
  const authContext = useContext(AuthContext);

  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    };

    if(error === 'User already exists') {
      console.log(error);
      // setAlert 
      clearErrors();
    };
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [values, handleChange] = useForm({username:'', email: '', password: ''});

  const { username, email, password } = values;

  const onSubmit = e => {
    e.preventDefault();
    if (username === '' || email === '' || password === '') {
      // set alert
      console.log('set alert for failed register');
    } else {
      register({
        username,
        email,
        password
      });
    };
  };

  return (
    <>
      <ContainerLeft>
        <AuthForm onSubmit={onSubmit}>
          <AuthFormTitle>Register</AuthFormTitle>
          <AuthFormLabel htmlFor='username'>Username</AuthFormLabel>
          <AuthFormInput 
          name="username"
          type="text" 
          value={values.username}
          onChange={handleChange}
          required
          />
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
          <AuthFormButton type="submit" value='Register'>Register</AuthFormButton>
        </AuthForm>
      </ContainerLeft>

      <ContainerRight>
        <Preview theme={theme}/>
      </ContainerRight>
    </>
  )
}

export default Register
