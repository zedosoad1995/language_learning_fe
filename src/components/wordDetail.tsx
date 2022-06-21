import Card from 'react-bootstrap/Card'  
import { useEffect, useState } from "react";
import _ from 'lodash'
import { Button, ButtonGroup, ToggleButton, ButtonToolbar, ListGroupItem, Form } from 'react-bootstrap';
import httpRequest from '../services/httpRequest';
import { useParams } from 'react-router-dom';


function WordDetail() {
	const [word, setWord]: [any, any] = useState()
	const [knowledge, setKnowledge] = useState(1)
	const [relevance, setRelevance] = useState(1)
	const [wordLearned, setWordLearned] = useState(false)

	const { id } = useParams()

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
							onChange={() => {setWordLearned(!wordLearned)}}
							type='checkbox'
							label='I already know this word'
							checked={wordLearned}
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
										onChange={(e) => {word['knowledge'] = parseInt(e.currentTarget.value); setWord(word)}}
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
										onChange={(e) => {word['relevance'] = parseInt(e.currentTarget.value); setWord(word)}}
									>
										{val}
									</ToggleButton>
								))}
							</ButtonGroup>
						</ButtonToolbar>
						<Button>Next</Button>
					</Card.Body>
				</Card>
			}
		</>
  );
}

export default WordDetail;
