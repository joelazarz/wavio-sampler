import { AuthForm,
  AuthFormInput, 
  AuthFormLabel, 
  AuthFormButton, 
  AuthFormTitle } from '../../css/authForm';
import Preview from './Preview';

const Register = () => {
  return (
    <>
    <AuthForm>
      <AuthFormTitle>Register</AuthFormTitle>
      <AuthFormLabel htmlFor='email'>Email Address</AuthFormLabel>
      <AuthFormInput type="email" required></AuthFormInput>
      <AuthFormLabel htmlFor='email'>Password</AuthFormLabel>
      <AuthFormInput type="password" required></AuthFormInput>
      <AuthFormButton type="submit" value='Register'></AuthFormButton>
    </AuthForm>
    <Preview />
    </>
  )
}

export default Register
