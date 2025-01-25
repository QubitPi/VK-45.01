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
import playIcon from "./images/play.svg";

import "./PlayList.css";

interface PlayListProps {
  playingTitle: string;
  videos: Array<{ title: string; duration: string; transcript: JSX.Element }>;
  listItemOnClick: (video: { title: string; duration: string; transcript: JSX.Element }) => void;
}

export default function PlayList(props: PlayListProps): JSX.Element {
  return (
    <div className="playlist">
      <h3 className="title">Generation War</h3>
      <p>{props.videos.length} Videos</p>
      <div className="videos">
        {props.videos.map((video): JSX.Element => {
          return (
            <div
              key={video.title}
              className={video.title === props.playingTitle ? "video active" : "video"}
              onClick={() => {
                props.listItemOnClick(video);
              }}
            >
              <img src={playIcon} alt="" />
              <h3 className="videoTitle">{video.title}</h3>
              <p className="time">{video.duration}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
