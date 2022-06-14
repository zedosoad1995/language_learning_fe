import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DailyUnseenWord from "./dailyUnseenWord";
import WordsOfTheDay from "./wordsOfTheDay";
import settings from '../settings.json'
const backend_api = settings['backend_api']

function Home() {
  const navigate = useNavigate();
  const [words, setWords] = useState([])
  const [isDailyWordsSeen, setIsDailyWordsSeen] = useState(true)

  const fetchData = () => {
    axios.get(`${backend_api}/words/`)
      .then(response => {
        setWords(response.data)
        return response.data
      })
      .then((response: Array<any>) => {
        setIsDailyWordsSeen(response.every(word => word.is_seen))
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const onUpdateDailyUnseenWords = () => {
    fetchData()
  }

  return (
    <>
      <button onClick={() => navigate("/add_word")}>
        Add Word
      </button>
      { isDailyWordsSeen ? 
      <WordsOfTheDay words={words}/> 
      : <DailyUnseenWord words={words} onUpdateWords={onUpdateDailyUnseenWords}/>}
    </>
  );
}

export default Home;