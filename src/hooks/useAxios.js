import axios from 'axios'
import{useEffect, useState} from 'react'

axios.defaults.baseURL = "http://0.0.0.0:3002"

const useAxios = ({url, data}) => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchData = () => {
            axios
            .post(url, data)
            .then(res => setResponse(res.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
        }
        fetchData()
    }, [url])
    return {response, error, loading}
}

export default useAxios