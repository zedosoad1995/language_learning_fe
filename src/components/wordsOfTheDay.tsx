import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


function WordsOfTheDay({words}: {words: Array<any>}) {
  const navigate = useNavigate()

  const wordDetails = (e: any) => {
    const id = e.currentTarget.getAttribute('data-index')
    navigate(`/word/${id}`)
  }

	return (
    <>
      <Typography variant='h4' sx={{fontWeight: 600, m: 3}}>Words of the day</Typography>
      <Stack spacing={2}>
        {words.map((word) =>
          <Card raised sx={{maxWidth: 500}} key={word.id} data-index={word.id} onClick={(e) => wordDetails(e)}>
            <CardContent>
              <Typography variant="h5" component="div">
                {word['original_word']}
              </Typography>
              <Typography color="text.secondary">
                {word['translated_word']}
              </Typography>
            </CardContent>
          </Card>
        )}
      </Stack>
    </>
  );
}

export default WordsOfTheDay;
