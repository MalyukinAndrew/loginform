import React from 'react'
import { useFormik } from 'formik'
import { registerValidationSchema as validationSchema } from '../../constants/schemas'
import FormFieldWrapper from '../FormFieldWrapper/FormFieldWrapper'
import { Button, Input } from 'antd'

function RegisterForm() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirm: '',
    },
    validationSchema,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log(values)
    },
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label>Name</label>
        <FormFieldWrapper error={formik.errors.name}>
          <Input
            bordered={false}
            name="name"
            placeholder="Andrew"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </FormFieldWrapper>
        <label>
          Email <span>*</span>
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
        <label>
          Confirm password <span>*</span>
        </label>
        <FormFieldWrapper error={formik.errors.confirm}>
          <Input.Password
            bordered={false}
            name="confirm"
            value={formik.values.confirm}
            onChange={formik.handleChange}
          />
        </FormFieldWrapper>

        <div>
          <Button htmlType="submit">Register</Button>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm
