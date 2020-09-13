import client from 'providers/fetchClient'

export const getNavers = () => client.get('/v1/navers')

export const showNaver = id => client.get(`/v1/navers/${id}`)

export const createNaver = data => client.post('/v1/navers/', data)

export const deleteNaver = id => client.delete(`/v1/navers/${id}`)

export const updateNaver = (id, data) => client.put(`/v1/navers/${id}`, data)
