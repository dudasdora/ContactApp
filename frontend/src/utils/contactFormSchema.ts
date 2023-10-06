import * as yup from 'yup'
export const contactFormSchema = yup
  .object()
  .shape({
    name: yup.string().required('Name is requried'),
    email: yup.string(),
    phone: yup.string()
  })
  .required()
