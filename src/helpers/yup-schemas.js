import * as yup from 'yup'

yup.setLocale({
  mixed: {
    required: 'Campo obrigatório'
  }
})

export const loginSchema = yup.object().shape({
  email: yup.string().email('Insira um e-mail válido').required(),
  password: yup.string().required()
})

export const naverSchema = yup.object().shape({
  name: yup.string().required(),
  job_role: yup.string().required(),
  birthdate: yup.string().required(),
  admission_date: yup.string().required(),
  project: yup.string().required(),
  url: yup.string().required()
})
