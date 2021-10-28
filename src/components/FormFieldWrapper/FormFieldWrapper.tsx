import React from 'react'
import 'antd/dist/antd.css'

import styles from './FormFieldWrapper.module.scss'
import cn from 'classnames'

interface IFormFieldWrapperProps {
  error: string | undefined
  children: any
}

function FormFieldWrapper({ error, children }: IFormFieldWrapperProps) {
  return (
    <>
      <div className={cn(styles.fieldWrapper, error && styles.error)}>
        {children}
      </div>
      <p className={styles.errorText}>{error}</p>
    </>
  )
}

export default FormFieldWrapper
