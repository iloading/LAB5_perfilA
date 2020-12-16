import React, { useState } from "react";
import YTSearch from "youtube-api-search";
import Video from "./Video";
import VerVideo from "./VerVideo";
import "./App.css";

function App() {
  let API_KEY = ""; //por a vossa API key aqui... por exemplo "acbdefghijklmnop";

  const [videos, setVideos] = useState();
  const [frameID, setFrameID] = useState();

  const inputHandler = (e) => {
    e.preventDefault();
    let texto = e.target.parentElement[0].value;

    pesquisarVideos(texto);
  };

  const pesquisarVideos = (pesquisa) => {
    YTSearch({ key: API_KEY, term: pesquisa }, (videos) => {
      setVideos(videos);
    });
  };

  return (
    <div className="App">
      <div className="lista">
        <form action="">
          <p>Faz uma pesquisa no Youtube:</p>
          <input type="text" placeholder="RicFazeres" />
          <button type="submit" onClick={inputHandler}>
            Search
          </button>
        </form>
        <div className="todos">
          {videos &&
            videos.map((video) => (
              <Video video={video} key={video.etag} setFrameID={setFrameID} />
            ))}
        </div>
      </div>
      {frameID && <VerVideo id={frameID} />}
    </div>
  );
}

export default App;
