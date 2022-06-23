import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';


function WordsOfTheDay({words}: {words: Array<any>}) {
	return (
    <>
      <Typography variant='h4' sx={{fontWeight: 600}}>Words of the day</Typography>
      <Stack spacing={2}>
        {words.map((word, counter) =>
          <Card raised sx={{maxWidth: 500}}>
            <CardContent>
              <Typography variant="h5" component="div">
                {word['original_word']}
              </Typography>
              <Typography color="text.secondary">
                {word['translated_word']}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        )}
      </Stack>
    </>
  );
}

export default WordsOfTheDay;
