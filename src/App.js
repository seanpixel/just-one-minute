import React, { useState, useEffect } from'react';
import './App.css';
import Timer from './components/timer';
import TextBox from './components/text';

function App() {

  const [text, setText] = useState("In a few seconds, there will be something here for you to read.\n\nPlease try to take just 60 seconds reading it, focusing on each word, visualizing a scene.\n\nIt will be hard given how much attention span you have lost recently.\n\nNotice how uncomfortable you get and how you want to divert your attention to something else.\n\nEven this wait feels like a long time, doesn't it?");
  const [flag, setFlag] = useState(false);

    // Fetch text from the server
    useEffect(() => {
        console.log("fetching text")
        fetchText();
    }, []);

    async function fetchText() {
        try {
            const response = await fetch('/paragraph');
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            setText(data.text);
            setFlag(true);
        } catch (error) {
            console.error("Failed to fetch text:", error);
        }
    }

  return (
    <div className="App">
      <Timer startFlag={flag}></Timer>
      <TextBox paragraph={text}></TextBox>
    </div>
  );
}

export default App;
