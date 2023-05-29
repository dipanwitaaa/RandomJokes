import { useState, useEffect } from "react";
//import Axios from "axios";
import "./App.css";

function Index() {
  const [joke, setJoke] = useState("");
  const [loading, isLoading] = useState(true);
  const fetchJokes = async () => {
    isLoading(true);
    var res = await fetch("https://api.chucknorris.io/jokes/random");
    var data = await res.json();
    console.log(data.value);
    setJoke(data.value);
    isLoading(false);
  };
  useEffect(() => {
    fetchJokes();
    isLoading(false);
  }, []);
  return (
    <>
      <div>
        <h1>Generate random jokes 😅😅</h1>
        {loading ? <p className="p">loading ↻</p> : <p>{joke}</p>}

        <button className="button" onClick={fetchJokes}>
          New jokes
        </button>
      </div>
    </>
  );
}

export default Index;
