import { useState, useEffect } from "react";
import facts from "../../facts";

function Information() {
  const [randomFact, setRandomFact] = useState(getRandomFact());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRandomFact(getRandomFact());
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup the interval when the component is unmounted
  }, []); // Empty dependency array to run the effect only once when the component mounts

  function getRandomFact() {
    return facts[Math.floor(Math.random() * facts.length)];
  }

  return (
    <div className="information container">
      <div className="information__container">
        <h2 className="information__container__heading">Did You Know?</h2>
        <p className="information__container__desc">{randomFact.fact}</p>
        {/* Make sure to limit the word count to 75 words or 426 characters */}
      </div>
    </div>
  );
}

export default Information;
