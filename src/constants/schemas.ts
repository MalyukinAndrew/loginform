import * as Yup from 'yup'

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email is invalid')
    .min(1, 'Too Short!')
    .max(40, 'Too Long!')
    .required('Field is required'),
  password: Yup.string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .required('Field is required'),
})
