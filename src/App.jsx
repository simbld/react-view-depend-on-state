import { useState } from 'react';
import './App.css';
import MyBtn from './components/MyBtn';
import Subtitle from './components/Subtitle';
import Title from './components/Title';

function App() {
  const [showTitle, setShowTitle] = useState("title");

  return (
    <div className="App">
      {/* {showTitle === "title" ?
        <MyBtn setShowTitle={setShowTitle} nextTitle="subtitle" label="Vers subtitle" />
        :
        <MyBtn setShowTitle={setShowTitle} nextTitle="title" label="Vers title" />
      } */}
      {showTitle === "title" && <Title setShowTitle={setShowTitle} nextTitle="subtitle" label="Vers subtitle" />}
      {showTitle === "subtitle" && <Subtitle />}
    </div>
  )
}

export default App
