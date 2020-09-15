import moment from 'moment'

export const formatedDate = values => {
  const formatedBirthdate = moment(values.birthdate).format('DD/MM/YYYY')
  const formatedAdmissionDate = moment(values.admission_date).format('DD/MM/YYYY')
  return { ...values, birthdate: formatedBirthdate, admission_date: formatedAdmissionDate }
}

export const calcAge = date => {
  const now = moment()
  const selectedDate = moment(date)
  const duration = moment.duration(now.diff(selectedDate))
  return `${duration.years()} anos`
}

export const calcDate = date => {
  const now = moment()
  const selectedDate = moment(date)
  const duration = moment.duration(now.diff(selectedDate))

  if (duration.years() === 0) {
    if (duration.months() === 0) {
      if (duration.days() > 1) {
        return `${duration.days()} dias`
      } else {
        return `${duration.days()} dia`
      }
    } else {
      if (duration.months() > 1) {
        return `${duration.months()} meses`
      } else {
        return `${duration.months()} mes`
      }
    }
  } else {
    if (duration.years() > 1) {
      if (duration.months() > 1) {
        return `${duration.years()} anos e ${duration.months()} meses`
      } else {
        return `${duration.years()} anos e ${duration.months()} mes`
      }
    } else {
      if (duration.months() > 1) {
        return `${duration.years()} ano e ${duration.months()} meses`
      } else {
        return `${duration.years()} ano e ${duration.months()} mes`
      }
    }
  }
}
