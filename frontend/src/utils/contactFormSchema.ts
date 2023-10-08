import * as yup from 'yup'
export const contactFormSchema = yup.object().shape({
  id: yup.number().nullable(),
  name: yup.string().required('Name is requried').nullable().default(''),
  email: yup.string().nullable().default(''),
  phone: yup.string().nullable().default(''),
  pictureUrl: yup.string().nullable().default('')
})
