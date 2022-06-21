import Card from 'react-bootstrap/Card'  
import { useEffect, useState } from "react";
import _ from 'lodash'
import { Button, ButtonGroup, ToggleButton, ButtonToolbar, ListGroupItem, Form } from 'react-bootstrap';
import httpRequest from '../services/httpRequest';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


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
		<>
			{word &&
				<Card
					border='primary'
					key={word.pk}
					style={{ width: '22rem' }}
					className='mb-2'
				>
					<Card.Body>
						<Card.Title>{word['original_word']}</Card.Title>
						<Card.Text>
							Translation: {word['translated_word']}
						</Card.Text>
						<Form.Check
							onChange={() => setWord({...word, is_learned: !word.is_learned})}
							type='checkbox'
							label='I already know this word'
							checked={word.is_learned}
						/>
						<ButtonToolbar>
							<ListGroupItem>Knowledge:</ListGroupItem>
							<ButtonGroup>
								{_.range(1, 5+1).map((val, idx) => (
									<ToggleButton
										key={idx}
										id={`knowledge-${idx}`}
										type="radio"
										name="knowledge-buttons"
										value={val}
										checked={word['knowledge'] === val}
										onChange={(e) => setWord({...word, knowledge: parseInt(e.currentTarget.value)})}
									>
										{val}
									</ToggleButton>
								))}
							</ButtonGroup>
						</ButtonToolbar>
						<ButtonToolbar>
							<ListGroupItem>Relevance:</ListGroupItem>
							<ButtonGroup>
								{_.range(1, 5+1).map((val, idx) => (
									<ToggleButton
										key={idx}
										id={`relevance-${idx}`}
										type="radio"
										name="relevance-buttons"
										value={val}
										checked={word['relevance'] === val}
										onChange={(e) => setWord({...word, relevance: parseInt(e.currentTarget.value)})}
									>
										{val}
									</ToggleButton>
								))}
							</ButtonGroup>
						</ButtonToolbar>
						<Button onClick={onEdit}>Edit</Button>
						<Button onClick={onRemove}>Remove</Button>
					</Card.Body>
				</Card>
			}
		</>
  );
}

export default WordDetail;
