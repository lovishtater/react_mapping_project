import React from "react";
import Entry from "./entry";
import Emojipedia from "../emojipedia";

function createEmoji(emojiElement) {
  return (
    <Entry
      name={emojiElement.name}
      id={emojiElement.id}
      emoji={emojiElement.emoji}
      description={emojiElement.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{Emojipedia.map(createEmoji)}</dl>
    </div>
  );
}

export default App;
