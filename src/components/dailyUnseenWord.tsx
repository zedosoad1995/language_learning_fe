import Card from 'react-bootstrap/Card'  
import { useEffect, useState } from "react";
import axios from 'axios';
import _ from 'lodash'
import settings from '../settings.json'
import { ButtonGroup, ToggleButton, ButtonToolbar, ListGroupItem, Form } from 'react-bootstrap';
const backend_api = settings['backend_api']


function DailyUnseenWord() {
	const [word, setWord]: [any, any] = useState({})
	const [knowledge, setKnowledge] = useState(1)
	const [relevance, setRelevance] = useState(1)

  const fetchData = () => {
    axios.get(`${backend_api}/words/`)
      .then(response => {
				const unseenWord = response.data.results.find((word: any) => !word.is_seen)
        setWord(unseenWord)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

	return (
    <>
			{Object.keys(word).length > 0 &&
				<Card
					border='primary'
					key={word.pk}
					style={{ width: '22rem' }}
					className='mb-2'
					onClick={() => console.log(`Hello from here: ${word.original_word}`)}
				>
					<Card.Body>
						<Card.Title>{word['original_word']}</Card.Title>
						<Card.Text>
							Translation: {word['translated_word']}
						</Card.Text>
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
										checked={knowledge === val}
										onChange={(e) => setKnowledge(parseInt(e.currentTarget.value))}
									>
										{val}
									</ToggleButton>
								))}
							</ButtonGroup>
						</ButtonToolbar>
						<Form.Check 
							type='checkbox'
							label='I already know this word'
						/>
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
										checked={relevance === val}
										onChange={(e) => setRelevance(parseInt(e.currentTarget.value))}
									>
										{val}
									</ToggleButton>
								))}
							</ButtonGroup>
						</ButtonToolbar>
					</Card.Body>
				</Card>
			}
    </>
  );
}

export default DailyUnseenWord;
