import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import Divider from '@mui/material/Divider'
import { useEffect, useState } from "react"
import httpRequest from '../services/httpRequest'


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
				<Card key={word.id}>
					<CardContent>
						<Typography variant="h5">
							{word['original_word']}
						</Typography>
						<Typography color="text.secondary">
							{word['translated_word']}
						</Typography>
						<Divider sx={{my: 2}}/>
						<Typography>
							Knowledge
						</Typography>
						<Rating
							value={knowledge}
							onChange={(_, newValue: any) => {
								setKnowledge(newValue);
							}}
						/>
						<Typography>
							Relevance
						</Typography>
						<Rating
							value={relevance}
							onChange={(_, newValue: any) => {
								setRelevance(newValue);
							}}
						/>
						<FormControlLabel 
							sx={{display: 'block'}}
							control={
								<Checkbox onChange={() => {setWordLearned(!wordLearned)}} checked={wordLearned} />
							} 
							label='I already know this word' 
						/>
					</CardContent>
					<CardActions>
						<Button onClick={nextWord}>Next Word</Button>
					</CardActions>
				</Card>}
    </>
  );
}

export default DailyUnseenWord;
