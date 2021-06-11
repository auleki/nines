import { useState } from 'react'
import {
  BasicPage,
  Title,
  Box,
  Form,
  Button,
  TextLink
} from '../components/styledComponents'
import { useInput } from '../hooks/useInput'

const LoginForm = ({ loginUser, setResetPassword }) => {
  const {
    value: username,
    bind: bindUsername,
    reset: resetUsername
  } = useInput('')
  const {
    value: password,
    bind: bindPassword,
    reset: resetPassword
  } = useInput('')

  return (
    <Form marginTop={2.5} onSubmit={loginUser}>
      <div className='inputGroup'>
        <label htmlFor='username'>Username</label>
        <input type='text' placeholder='jeremiah' />
      </div>
      <div className='inputGroup'>
        <label htmlFor='password'>Password</label>
        <input type='password' placeholder='*******' />
      </div>
      <div className='inputGroup'>
        <Button>Login Now</Button>
      </div>
      <div className='inputGroup'>
        {/* <TextLink href='/forgot-password'>Forget your password?</TextLink> */}
        <TextLink onClick={() => setResetPassword(true)}>
          Forget your password?
        </TextLink>
      </div>
    </Form>
  )
}

const PasswordResetForm = ({ passwordReset, setResetPassword }) => {
  const [email, setPassword] = useState()

  return (
    <Form marginTop={2.5} onSubmit={passwordReset}>
      <div className='inputGroup'>
        <label htmlFor='email'>email</label>
        <input type='email' placeholder='jeremiah@example.com' />
      </div>
      <div className='inputGroup'>
        <Button>Reset Password</Button>
      </div>
      <div className='inputGroup'>
        <TextLink onClick={() => setResetPassword(false)}>Login Now</TextLink>
      </div>
    </Form>
  )
}

const Login = () => {
  const [resetPassword, setResetPassword] = useState(false)

  function loginUser (e) {
    e.preventDefault()
    alert('To login')
  }

  function passwordReset (e) {
    e.preventDefault()
    alert('Resetting Password')
  }

  return (
    <BasicPage centered full>
      <Box>
        <Title>Login Page</Title>
        {resetPassword ? (
          <PasswordResetForm
            passwordReset={passwordReset}
            setResetPassword={setResetPassword}
          />
        ) : (
          <LoginForm
            loginUser={loginUser}
            setResetPassword={setResetPassword}
          />
        )}
      </Box>
    </BasicPage>
  )
}

export default Login
