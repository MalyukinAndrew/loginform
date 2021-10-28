import React from 'react'
import { Button, Input } from 'antd'
import { useFormik } from 'formik'
import { loginValidationSchema as validationSchema } from '../../constants/schemas'
import FormFieldWrapper from '../FormFieldWrapper/FormFieldWrapper'
import styles from './LoginForm.module.scss'

function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log(values)
    },
  })

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={formik.handleSubmit}>
        <label>
          Login <span>*</span>
        </label>
        <FormFieldWrapper error={formik.errors.email}>
          <Input
            bordered={false}
            name="email"
            placeholder="email@domainname"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </FormFieldWrapper>
        <label>
          Password <span>*</span>
        </label>
        <FormFieldWrapper error={formik.errors.password}>
          <Input.Password
            bordered={false}
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </FormFieldWrapper>

        <div>
          <Button htmlType="submit">Log in</Button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
