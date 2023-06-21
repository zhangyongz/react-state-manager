import React from 'react'
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <nav>
          <ul>
            <li>
              <Link to={`/context`}>context</Link>
            </li>
            <li>
              <Link to={`/redux`}>redux</Link>
            </li>
            <li>
              <Link to={`/mobx`}>mobx</Link>
            </li>
            <li>
              <Link to={`/recoil`}>recoil</Link>
            </li>
            <li>
              <Link to={`/zustand`}>zustand</Link>
            </li>
          </ul>
        </nav>
    </div>
  );
}

export default App;
