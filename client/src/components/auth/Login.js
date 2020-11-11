import { useForm } from '../../hooks/useForm';
import { AuthForm,
  AuthFormInput, 
  AuthFormLabel, 
  AuthFormButton, 
  AuthFormTitle } from '../../css/authForm';
import Preview from './Preview';

const Login = () => {
  const [values, handleChange] = useForm({email: '', password: ''});

  const { email, password } = values;

  const onSubmit = e => {
    e.preventDefault();
    if (email === '' || password === '') {
      // set alert
      console.log('set alert for failed login');
    } else {
      // login
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
  )
}

export default Login
