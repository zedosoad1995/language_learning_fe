import Card from 'react-bootstrap/Card'  
import { useEffect, useState } from "react";
import _ from 'lodash'
import { Button, ButtonGroup, ToggleButton, ButtonToolbar, ListGroupItem, Form } from 'react-bootstrap';
import httpRequest from '../services/httpRequest';


function DailyUnseenWord({words, onUpdateWords}: {words: Array<any>, onUpdateWords: any}) {
	const [word, setWord]: [any, any] = useState()
	const [knowledge, setKnowledge] = useState(1)
	const [relevance, setRelevance] = useState(1)
	const [wordLearned, setWordLearned] = useState(false)


	const getUnseenWord = () => {
		const unseenWord = words.find((word: any) => !word.is_seen)
		if(!unseenWord){
			setWord()
			return
		}

		setWordLearned(false)
		setWord(unseenWord)
		setKnowledge(unseenWord.knowledge)
		setRelevance(unseenWord.relevance)
	}

	const nextWord = () => {
		if(word && 'id' in word){
			const data = {
				knowledge,
				relevance,
				is_seen: true,
				is_learned: wordLearned
			}

			httpRequest('PATCH', `words/${word.id}/`, data)
				.then(() => {
					onUpdateWords()
				})
		}
	}

  useEffect(() => {
    getUnseenWord()
		onUpdateWords()
  }, [JSON.stringify(words)])

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
										checked={knowledge === val}
										onChange={(e) => setKnowledge(parseInt(e.currentTarget.value))}
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
										checked={relevance === val}
										onChange={(e) => setRelevance(parseInt(e.currentTarget.value))}
									>
										{val}
									</ToggleButton>
								))}
							</ButtonGroup>
						</ButtonToolbar>
						<Button onClick={nextWord}>Next</Button>
					</Card.Body>
				</Card>}
    </>
  );
}

export default DailyUnseenWord;
