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

import "./Header.css"
import { ReactComponent as GitHubSvg } from './images/github.svg';


export default function Header() {
  return (
      <div className="header">
        <div className="logo">
          <img src="/logo512.png" alt="logo"/>
          <div className="title">
            VK-45.01
          </div>
        </div>

        <div className="GitHub">
          <a href="https://github.com/QubitPi/VK-45.01">
            <GitHubSvg />
          </a>
        </div>
      </div>
  )
}
