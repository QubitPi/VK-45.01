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
// import huggingFaceIcon from "./images/huggingface.svg";
// import GitHubSvg from './images/github.svg';

import { ReactComponent as HuggingFaceIcon} from './images/huggingface.svg';
import { ReactComponent as GitHubSvg } from './images/github.svg';

import "./Footer.css"

export default function Footer() {
  return (
      <div className="footer">
        <div className="footerInfo">
          <p>Study German with movie</p>
          <div className="navigation">
            <ul>
              <li className="listItem">
                <a href="https://tiger.qubitpi.org">
                  <span className="listItemIcon"><HuggingFaceIcon /></span>
                  <span className="listItemText">QubitPi/tiger</span>
                </a>
              </li>
              <li className="listItem">
                <a href="https://qubitpi.org">
                  <span className="listItemIcon"><GitHubSvg /></span>
                  <span className="listItemText">QubitPi</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="logo">
          <img src="/logo512.png" alt="logo"/>
        </div>
      </div>
  )
}
