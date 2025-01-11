/**
 * Copyright Jiaqi Liu
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React, {useState} from 'react';
import './App.css';
import {videos as data} from "./videos"
import {Footer, Header, MovieList, PlayingVideo, PlayList} from "./components";

function App() {
  const videos: { title: string, duration: string, transcript: JSX.Element, youTubeVideoId: string }[] = data
  const [playingTitle, setPlayingTitle] = useState<string>(videos[0].title)

  return (
      <div className="container">
        <div className="headerSection">
          <Header/>
        </div>
        <div className="mainSection">
          <div className="metaSection">
            <div className="moviesSection">
              <MovieList/>
            </div>
            <div className="playListSection">
              <PlayList
                  playingTitle={playingTitle}
                  videos={videos}
                  listItemOnClick={(video) => setPlayingTitle(video.title)}
              />
            </div>
          </div>
          <div className="playingVideoSection">
            <PlayingVideo
                videoTitle={playingTitle}
                transcript={videos.filter(video => video.title === playingTitle)[0].transcript}
                youTubeVideoId={videos.filter(video => video.title === playingTitle)[0].youTubeVideoId}
            />
          </div>
        </div>
        <div className="footerSection">
          <Footer/>
        </div>
      </div>
  );
}

export default App;
