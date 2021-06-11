import { useState } from 'react'
import {
  BasicPage,
  Title,
  Box,
  Form,
  Button,
  TextLink,
  Row
} from '../components/styledComponents'
import { useInput } from '../hooks/useInput'

const LoginForm = ({ setResetPassword }) => {
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

  function loginUser (e) {
    e.preventDefault()
    alert(`user with username of ${username} and password ${password} to login`)
  }

  return (
    <Form marginTop={2.5} onSubmit={loginUser}>
      <div className='inputGroup'>
        <label htmlFor='username'>Username</label>
        <input type='text' placeholder='jeremiah' {...bindUsername} />
      </div>
      <div className='inputGroup'>
        <label htmlFor='password'>Password</label>
        <input type='password' placeholder='*******' {...bindPassword} />
      </div>
      <div className='inputGroup'>
        <Button>Login Now</Button>
      </div>
      <Row>
        {/* <TextLink href='/forgot-password'>Forget your password?</TextLink> */}
        <TextLink onClick={() => setResetPassword(true)}>
          Forget password?
        </TextLink>

        <TextLink onClick={() => setResetPassword(true)}>Register Now</TextLink>
      </Row>
    </Form>
  )
}

const PasswordResetForm = ({ setResetPassword }) => {
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput('')

  function passwordReset (e) {
    e.preventDefault()
    alert(`Resetting password for ${email}`)
  }

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
  return (
    <BasicPage centered full>
      <Box>
        <Title>Login Page</Title>
        {resetPassword ? (
          <PasswordResetForm setResetPassword={setResetPassword} />
        ) : (
          <LoginForm setResetPassword={setResetPassword} />
        )}
      </Box>
    </BasicPage>
  )
}

export default Login
