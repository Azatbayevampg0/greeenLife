import * as yup from 'yup'

const registerSchema = yup.object().shape({
	first_name: yup.string(),
	last_name: yup.string(),
	email: yup.string().email(),
	username: yup.string(),
	password: yup.string(),
	role: yup.string(),	
})
export default registerSchema
