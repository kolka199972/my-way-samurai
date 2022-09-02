import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {required} from '../../utils/validators'
import {Input} from '../common/FormsControl/FormsControl'
// import s from './Login.module.css'

interface LoginFormProps {
  handleSubmit: any
}

const LoginForm = ({handleSubmit}: LoginFormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          component={Input}
          validate={[required]}
          type='text'
          placeholder='Login'
          name='login'
        />
      </div>
      <div>
        <Field
          component={Input}
          validate={[required]}
          type='text'
          placeholder='Password'
          name='password'
        />
      </div>
      <div>
        <Field
          component={Input}
          validate={[required]}
          type='checkbox'
          name='rememberMe'
        />{' '}
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = () => {
  const onSubmit = (data: any) => {
    console.log(data)
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

export default Login
