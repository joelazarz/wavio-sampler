import { useForm } from '../../hooks/useForm';
import { AuthForm,
  AuthFormInput, 
  AuthFormLabel, 
  AuthFormButton, 
  AuthFormTitle } from '../../css/authForm';
import Preview from './Preview';

const Login = () => {
  const [values, handleChange] = useForm({email: '', password: ''})

  return (
    <>
    <AuthForm>
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
      <AuthFormButton type="submit" value='Login'></AuthFormButton>
    </AuthForm>
    <Preview />
    </>
  )
}

export default Login
