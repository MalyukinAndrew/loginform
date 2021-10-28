import React, { ReactChild } from 'react'
import styles from './FormFieldWrapper.module.scss'
import cn from 'classnames'

interface IFormFieldWrapperProps {
  error: string | undefined
  children: ReactChild
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
