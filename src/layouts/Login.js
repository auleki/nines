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
import { colors, fonts } from '../components/constants'
import { useInput } from '../hooks/useInput'

const RegisterForm = ({ setToRegister, setResetPassword }) => {
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

  function registerUser (e, user) {
    e.preventDefault()
    alert('Registering User...')
  }

  return (
    <Form marginTop={2.5} onSubmit={registerUser}>
      <div className='inputGroup'>
        <label htmlFor='username'>Username</label>
        <input type='text' placeholder='jeremiah' {...bindUsername} />
      </div>
      <div className='inputGroup'>
        <label htmlFor='email'>Email</label>
        <input type='email' placeholder='jeremiah' {...bindUsername} />
      </div>
      <div className='inputGroup'>
        <label htmlFor='password'>Password</label>
        <input type='password' placeholder='*******' {...bindPassword} />
      </div>
      {/* <div className='inputGroup'>
        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input type='password' placeholder='*******' {...bindPassword} />
      </div> */}
      <div className='inputGroup'>
        <Button>Register Now</Button>
      </div>
      <Row>
        {/* <TextLink href='/forgot-password'>Forget your password?</TextLink> */}
        <TextLink onClick={() => setResetPassword(true)}>
          Forget password?
        </TextLink>

        <TextLink onClick={() => setToRegister(false)}>Login now</TextLink>
      </Row>
    </Form>
  )
}

const LoginForm = ({ setResetPassword, setToRegister }) => {
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

        <TextLink onClick={() => setToRegister(true)}>Register now</TextLink>
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
        <TextLink onClick={() => setResetPassword(false)}>Login now</TextLink>
      </div>
    </Form>
  )
}

const Login = () => {
  const [resetPassword, setResetPassword] = useState(false)
  const [toRegister, setToRegister] = useState(false)
  return (
    <BasicPage centered full bg={colors.lightBlack}>
      <Box>
        <Title font={fonts.charmonman}>
          {resetPassword ? 'Reset Password' : 'Login Page'}
        </Title>
        {resetPassword ? (
          <PasswordResetForm setResetPassword={setResetPassword} />
        ) : toRegister ? (
          <RegisterForm
            setToRegister={setToRegister}
            setResetPassword={setResetPassword}
          />
        ) : (
          <LoginForm
            setToRegister={setToRegister}
            setResetPassword={setResetPassword}
          />
        )}
      </Box>
    </BasicPage>
  )
}

export default Login
