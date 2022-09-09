import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Input, Textarea} from '../../../common/FormsControl/FormsControl'

const ProfileDataForm = ({handleSubmit}: any) => {
  return (
    <form>
      <div>
        <Field component={Input} name='fullName' placeholder='Full Name' />
      </div>
      <div>
        <Field component={Input} type='checkbox' name='lookingForAJob' />{' '}
        Looking for a job?
      </div>
      <div>
        <Field
          component={Textarea}
          name='lookingForAJobDescription'
          placeholder='Skills'
        />
      </div>
      <div>
        <Field component={Textarea} name='aboutMe' placeholder='About me...' />
      </div>
      <button onClick={handleSubmit}>Save</button>
    </form>
  )
}

const ReduxProfileDataForm = reduxForm({form: 'ProfileData'})(ProfileDataForm)

export default ReduxProfileDataForm
