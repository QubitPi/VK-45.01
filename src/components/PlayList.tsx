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
import React from "react";

import "./PlayingVideo.css"
import playIcon from "./images/play.svg";

import "./PlayList.css"

interface PlayListProps {
  playingTitle: string;
  videos: { title: string, duration: string, transcript: JSX.Element }[]
  listItemOnClick: (video: { title: string, duration: string, transcript: JSX.Element }) => void
}

export default function PlayList(props: PlayListProps) {
  return (
      <div className="playlist">
        <h3 className="title">Generation War</h3>
        <p>{props.videos.length} Videos</p>
        <div className="videos">
          {
            props.videos.map(video => {
              return <div
                  className={video.title === props.playingTitle ? "video active" : "video"}
                  onClick={() => props.listItemOnClick(video)}
              >
                <img src={playIcon} alt=""/>
                <h3 className="title">{video.title}</h3>
                <p className="time">{video.duration}</p>
              </div>
            })
          }
        </div>
      </div>
  )
}
