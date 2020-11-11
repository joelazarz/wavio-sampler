import { useForm } from '../../hooks/useForm';
import { AuthForm,
  AuthFormInput, 
  AuthFormLabel, 
  AuthFormButton, 
  AuthFormTitle } from '../../css/authForm';
import Preview from './Preview';

const Register = () => {
  const [values, handleChange] = useForm({username:'', email: '', password: ''})

  return (
    <>
    <AuthForm>
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
      <AuthFormButton type="submit" value='Register'></AuthFormButton>
    </AuthForm>
    <Preview />
    </>
  )
}

export default Register
