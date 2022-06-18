import { useEffect } from 'react';
import { axiosInstance } from '../axios';
import { useNavigate } from 'react-router-dom';


export default function Logout(){
    const navigate = useNavigate();

	useEffect(() => {
		localStorage.removeItem('access_token')
		localStorage.removeItem('refresh_token')
		delete axiosInstance.defaults.headers.common['Authorization']
		navigate('/login')
	});

    return <></>
}