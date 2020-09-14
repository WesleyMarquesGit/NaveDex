import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import moment from 'moment'

import Container from 'components/Container'
import Input from 'components/Input'
import Button from 'components/Button'
import Header from 'components/Header'
import BackLink from 'components/BackLink'

import { updateNaver, showNaver } from 'services/navers'
import { naverSchema } from 'helpers/yup-schemas'
import { formatedDate } from 'helpers/formatDate'

const EditNaver = ({ match: { params } }) => {
  const history = useHistory()

  const { register, handleSubmit, errors, formState, setValue } = useForm({
    validationSchema: naverSchema
  })

  useEffect(() => {
    const fetchNavers = async () => {
      try {
        const { name, job_role, birthdate, admission_date, project, url } = await showNaver(params.id)

        setValue('name', name)
        setValue('job_role', job_role)
        setValue('birthdate', moment(birthdate).format('YYYY-MM-DD'))
        setValue('admission_date', moment(admission_date).format('YYYY-MM-DD'))
        setValue('project', project)
        setValue('url', url)
      } catch (err) {
        console.log(err)
      }
    }
    fetchNavers()
  }, [params])

  const onSubmit = async values => {
    try {
      const data = formatedDate(values)
      await updateNaver(params.id, data)
      history.push('/home')
      toast.success('Editado com sucesso!')
    } catch (err) {
      toast.error(err.response.data.message)
      console.log(err)
    }
  }

  return (
    <Container display='flex'>
      <Header />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <BackLink>EDITAR NAVER</BackLink>
        <FormInputs>
          <Input name='name' label='Nome' register={register} error={errors.name?.message} />
          <Input
            placeholder='Cargo'
            name='job_role'
            label='Cargo'
            register={register}
            error={errors.job_role?.message}
          />
          <Input
            type='date'
            placeholder='DD/MM/YYYY'
            name='birthdate'
            label='Data de Nascimento'
            register={register}
            error={errors.birthdate?.message}
          />
          <Input
            type='date'
            placeholder='DD/MM/YYYY'
            name='admission_date'
            label='Data de Admissão'
            register={register}
            error={errors.admission_date?.message}
          />
          <Input
            placeholder='Projetos que participou'
            name='project'
            label='Projetos'
            register={register}
            error={errors.project?.message}
          />
          <Input
            placeholder='URL da foto do Naver'
            name='url'
            label='Foto'
            register={register}
            error={errors.url?.message}
          />
          <Button variant='primary' isLoading={formState.isSubmitting}>
            Salvar
          </Button>
        </FormInputs>
      </Form>
    </Container>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 650px;
  min-width: 300px;
  align-self: center;
`

const FormInputs = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export default EditNaver
