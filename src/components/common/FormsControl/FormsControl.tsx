import React from 'react'
import s from './FormsControl.module.css'

const Element =
  (Element: any) =>
  ({input, meta, ...props}: any) => {
    const hasError = meta.touched && meta.error
    return (
      <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
        <div>
          <Element {...input} {...props} />
        </div>
        <div>{hasError && <span> {meta.error} </span>}</div>
      </div>
    )
  }

export const Textarea = Element('textarea')
export const Input = Element('input')
