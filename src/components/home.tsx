import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DailyUnseenWord from "./dailyUnseenWord";
import WordsOfTheDay from "./wordsOfTheDay";
import httpRequest from "../services/httpRequest"


function Home() {
  const navigate = useNavigate();
  const [words, setWords] = useState([])
  const [isDailyWordsSeen, setIsDailyWordsSeen] = useState(true)

  const updateData = () => {
    const data = {
      'timezone': Intl.DateTimeFormat().resolvedOptions().timeZone
    }

    return httpRequest('POST', `words/update/`, data)
  }

  const fetchData = () => {
    httpRequest('GET', `words/`)
      .then(response => {
        setWords(response.data)
        return response.data
      })
      .then((response: Array<any>) => {
        setIsDailyWordsSeen(response.every(word => word.is_seen))
      })
  }

  useEffect(() => {
    updateData()
      .then(fetchData)
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
