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

import "./PlayingVideo.css"

interface PlayingVideoProps {
  videoTitle: string;
  transcript: JSX.Element
  googleDriveVideoId: string;
}

export default function PlayingVideo(props: PlayingVideoProps) {
  return (
      <div className="playingVideo">
        <h3 className="title">{props.videoTitle}</h3>
        <video src={`https://www.googleapis.com/drive/v3/files/${props.googleDriveVideoId}?alt=media&key=AIzaSyDyfx-znEdHqX1PhBgfOVXkBnjioffkgTs`} controls autoPlay muted></video>
        <div className="transcriptTitle">Clip Transcript</div>
        <div className="transcript">{props.transcript}</div>
      </div>
  )
}
