import React from 'react'
import { Button, Input, Modal } from 'antd'
import { useFormik } from 'formik'
import { loginValidationSchema as validationSchema } from '../../constants/schemas'
import FormFieldWrapper from '../FormFieldWrapper/FormFieldWrapper'
import styles from './LoginForm.module.scss'
import RegisterForm from '../RegisterForm/RegisterForm'

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

  const [isModalVisible, setIsModalVisible] = React.useState(false)

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible)
  }

  return (
    <div className={styles.formWrapper}>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="email">
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
        <label htmlFor="password">
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
      <div className={styles.div}>OR</div>
      <Button type="link" onClick={toggleModal}>
        Register
      </Button>
      <Modal
        title="Register"
        visible={isModalVisible}
        onCancel={toggleModal}
        footer={null}
      >
        <RegisterForm />
      </Modal>
    </div>
  )
}

export default LoginForm
