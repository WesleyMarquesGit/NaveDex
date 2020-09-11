import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

import Container from 'components/Container'
import Input from 'components/Input'
import Button from 'components/Button'
import Text from 'components/Text'
import Header from 'components/Header'
import Image from 'components/Image'

import { updateNaver, showNaver } from 'services/navers'
import { naverSchema } from 'helpers/yup-schemas'

const EditNaver = ({ match: { params } }) => {
  const history = useHistory()
  const [naver, setNaver] = useState({})

  useEffect(() => {
    const fetchNavers = async () => {
      try {
        const data = await showNaver(params.id)
        setNaver(data)
        Object.keys(data).forEach(item => {
          setValue(item, data[item])
        })
      } catch (err) {
        console.log(err)
      }
    }
    fetchNavers()
  }, [params])

  const { register, handleSubmit, errors, formState, setValue } = useForm({
    validationSchema: naverSchema
  })

  const onSubmit = async values => {
    try {
      await updateNaver(naver.id, values)
      history.push('/home')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Container display='flex'>
      <Header />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Text marginBottom='30px'>EDITAR NAVER</Text>
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
            placeholder='DD/MM/YYYY'
            name='birthdate'
            label='Data de Nascimento'
            register={register}
            error={errors.birthdate?.message}
          />
          <Input
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
          <Button bg='blueviolet' isLoading={formState.isSubmitting}>
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
