import { useEffect, useState } from "react"
import _ from 'lodash'
import Button from '@mui/material/Button'
import httpRequest from '../services/httpRequest'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import WordCard from './wordCard'


function WordDetail() {
	const [word, setWord]: [any, any] = useState()
	
	const navigate = useNavigate()

	const { id } = useParams()

	const onEdit = () => {
		const data = {
			knowledge: word.knowledge,
			relevance: word.relevance,
			is_learned: word.is_learned
		}
		httpRequest('PATCH', `words/${id}/`, data)
			.then(() => navigate(-1))
	}

	const onRemove = () => {
		httpRequest('DEL', `words/${id}/`)
			.then(() => navigate(-1))
	}

	useEffect(() => {
		httpRequest('GET', `words/${id}/`)
			.then(response => {
				setWord(response.data)
			})
	}, [])

	return (
		<WordCard singleWord={word} cardActions={
			<>
				<Button onClick={onEdit}>Edit</Button>
				<Button onClick={onRemove}>Remove</Button>
			</>
		}/>
  );
}

export default WordDetail;
