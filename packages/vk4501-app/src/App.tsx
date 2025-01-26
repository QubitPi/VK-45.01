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
import "./App.css";
import { Footer, Header, MovieList, PlayingVideo, PlayList } from "./components";
import { selectPlayingVideo, setPlayingVideo, useAppDispatch, useAppSelector, videos } from "vk4501-redux";

export default function App(): JSX.Element {
  const dispatch = useAppDispatch();

  const playingVideo = useAppSelector(selectPlayingVideo);

  return (
    <div className="container">
      <div className="headerSection">
        <Header />
      </div>
      <div className="mainSection">
        <div className="metaSection">
          <div className="moviesSection">
            <MovieList />
          </div>
          <div className="playListSection">
            <PlayList
              playingTitle={playingVideo.title}
              videos={videos}
              listItemOnClick={(video) => dispatch(setPlayingVideo(video))}
            />
          </div>
        </div>
        <div className="playingVideoSection">
          <PlayingVideo
            videoTitle={playingVideo.title}
            transcript={playingVideo.transcript}
            youTubeVideoId={playingVideo.youTubeVideoId}
            googleDriveVideoId={playingVideo.googleDriveVideoId}
          />
        </div>
      </div>
      <div className="footerSection">
        <Footer />
      </div>
    </div>
  );
}
