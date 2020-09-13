import moment from 'moment'

export const formatedDate = values => {
  const formatedBirthdate = moment(values.birthdate).format('DD/MM/YYYY')
  const formatedAdmissionDate = moment(values.admission_date).format('DD/MM/YYYY')
  return { ...values, birthdate: formatedBirthdate, admission_date: formatedAdmissionDate }
}
