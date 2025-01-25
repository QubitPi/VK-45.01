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

export const GERMAN = "German";
export const ANCIENT_GREEK = "Ancient Greek";
export const LATIN = "Latin";
export const CLASSICAL_HEBREW = "Classical Hebrew";
export const CLASSICAL_SANSKRIT = "Classical Sanskrit";

export type Language =
  | typeof GERMAN
  | typeof ANCIENT_GREEK
  | typeof LATIN
  | typeof CLASSICAL_HEBREW
  | typeof CLASSICAL_SANSKRIT;

interface AppState {
  language: Language;
  cardModalShow: boolean;
}

const initialState: AppState = {
  language: ANCIENT_GREEK,
  cardModalShow: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
    setCardModalShow: (state, action: PayloadAction<boolean>) => {
      state.cardModalShow = action.payload;
    },
  },
});

export const { setLanguage, setCardModalShow } = appSlice.actions;

export const selectLanguage = (state: RootState): string => state.app.language;
export const selectCardModalShow = (state: RootState): string => state.app.cardModalShow;

export default appSlice.reducer;
