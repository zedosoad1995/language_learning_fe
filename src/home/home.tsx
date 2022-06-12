import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate("/add_word")}>
        Add Word
      </button>
    </>
  );
}

export default Home;