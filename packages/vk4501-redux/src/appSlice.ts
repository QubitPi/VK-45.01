/**
 * Copyright 2025 Jiaqi Liu
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

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type RootState } from "./store";
import { videos } from "./videos";

export interface Video {
  title: string;
  duration: string;
  transcript: JSX.Element;
  youTubeVideoId?: string;
  googleDriveVideoId?: string;
}

interface AppState {
  playingVideo: Video;
}

const initialState: AppState = {
  playingVideo: videos[0],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPlayingVideo: (state, action: PayloadAction<Video>) => {
      state.playingVideo = action.payload;
    },
  },
});

export const { setPlayingVideo } = appSlice.actions;

export const selectPlayingVideo = (state: RootState): Video => state.app.playingVideo;

export default appSlice.reducer;
