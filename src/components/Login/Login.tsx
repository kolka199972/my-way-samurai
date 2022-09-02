import React from 'react'
import {connect} from 'react-redux'
import {Navigate} from 'react-router-dom'
import {Field, reduxForm} from 'redux-form'
import {IState} from '../../models'
import {login} from '../../redux/authReducer'
import {required} from '../../utils/validators'
import {Input} from '../common/FormsControl/FormsControl'
import s from './Login.module.css'

interface LoginFormProps {
  handleSubmit: any
  error: string
}

const LoginForm = ({handleSubmit, error}: LoginFormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          component={Input}
          validate={[required]}
          type='text'
          placeholder='Email'
          name='email'
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
      {error && <div className={s.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

interface LoginProps {
  login: (email: string, password: string, rememberMe: boolean) => void
  isAuth: boolean
}

const Login = ({login, isAuth}: LoginProps) => {
  const onSubmit = (data: any) => {
    login(data.email, data.password, data.rememberMe)
  }

  if (isAuth) {
    return <Navigate to='/profile' />
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = (state: IState) => {
  return {
    isAuth: state.auth.isAuth
  }
}

const mapObjectDispatchToProps = {
  login
}

export default connect(mapStateToProps, mapObjectDispatchToProps)(Login)
