import { Navigate, Route } from 'react-router-dom'
import { axiosInstance } from '../axios';

export default function PrivateRoute({ children }: any) {
	const loggedIn = 'Authorization' in axiosInstance.defaults.headers.common

	return loggedIn ? children : <Navigate to="/login" />
}
