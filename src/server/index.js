import axios from 'axios'

const $axios = axios.create({
	baseURL: `${import.meta.env.VITE_API_URL}
`,
	timeout: 10000,
	// withCredentials: true,
})

export default $axios
