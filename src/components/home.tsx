import { useNavigate } from "react-router-dom";
import DailyUnseenWord from "./dailyUnseenWord";
import WordsOfTheDay from "./wordsOfTheDay";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate("/add_word")}>
        Add Word
      </button>
      <WordsOfTheDay />
      <DailyUnseenWord />
    </>
  );
}

export default Home;