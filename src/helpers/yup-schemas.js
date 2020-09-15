import * as yup from 'yup'
import moment from 'moment'

const MIN_AGE = 18

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
  birthdate: yup
    .string()
    .required()
    .test('validateDate', 'Data superior ao dia atual', value => {
      const now = moment()
      return moment(value).isBefore(now)
    })
    .test('validadeAge', 'Deve ter mais de 18 anos', value => {
      const subDate = moment().subtract(MIN_AGE, 'years')
      const minDate = moment(subDate).format('YYYY-MM-DD')
      return moment(value).isBefore(minDate)
    }),
  admission_date: yup
    .string()
    .required()
    .test('validateDate', 'Data superior ao dia atual', value => {
      const now = moment()
      return moment(value).isBefore(now)
    }),
  project: yup.string().required(),
  url: yup.string().required()
})
