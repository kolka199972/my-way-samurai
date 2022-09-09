import React from 'react'
import {connect} from 'react-redux'
import {Navigate} from 'react-router-dom'
import {Field, reduxForm} from 'redux-form'
import {IState} from '../../models'
import {login} from '../../redux/authReducer'
import {required} from '../../utils/validators'
import {Input} from '../common/FormsControl/FormsControl'
import s from './Login.module.css'

const LoginForm = ({handleSubmit, error, captchaUrl}: any) => {
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
      {captchaUrl && <img src={captchaUrl} alt='ava'></img>}
      {captchaUrl && (
        <div>
          <Field
            component={Input}
            type='text'
            placeholder='Symbols from page'
            validate={[required]}
            name='captcha'
          />
        </div>
      )}
      {error && <div className={s.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm: any = reduxForm<any>({form: 'login'})(LoginForm)

interface LoginProps {
  login: (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string
  ) => void
  isAuth: boolean
  captchaUrl: string | undefined
}

const Login = ({login, isAuth, captchaUrl}: LoginProps) => {
  const onSubmit = (data: any) => {
    login(data.email, data.password, data.rememberMe, data.captcha)
  }

  if (isAuth) {
    return <Navigate to='/profile' />
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm captchaUrl={captchaUrl} onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = (state: IState) => {
  return {
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
  }
}

const mapObjectDispatchToProps = {
  login
}

export default connect(mapStateToProps, mapObjectDispatchToProps)(Login)
