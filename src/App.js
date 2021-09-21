import React, { useState } from "react";
import "./styles.css";
const emojiDictionary = {
  "🐴": "Horse Face",
  "🐮": "Cow Face",
  "🐶": "Dog Face",
  "🐱": "Cat Face",
  "🐵": "Monkey Face",
  "🐯": "Tiger Face",
  "🐷": "Pig Face",
  "🐭": "Mouse Face",
  "🐰": "Rabbit Face",
  "🐲": "Dragon Face"
};
var faceEmojis = Object.keys(emojiDictionary);
export default function App() {
  const [inputEmoji, setinputEmoji] = useState("");

  function inputEmojiHandler(event) {
    var a = event.target.value;
    var inputEmoji = emojiDictionary[a];
    if (inputEmoji === undefined) {
      inputEmoji = "This face is Not in DATABASE, find a new one";
    }
    setinputEmoji(inputEmoji);
  }

  function emojiClickHandler(emoji) {
    var inputEmoji = emojiDictionary[emoji];
    setinputEmoji(inputEmoji);
  }
  return (
    <div className="App">
      <h1
        style={{
          color: "#F3F4F6",
          fontSize: "4rem",
          backgroundColor: "#1F2937"
        }}
      >
        Facemoji
      </h1>
      <p
        style={{
          color: "#F3F4F6",
          fontSize: "larger",
          backgroundColor: "#1F2937"
        }}
      >
        we keep on making faces all the time, here are some of those...
      </p>
      <input onChange={inputEmojiHandler}></input>
      <h2
        style={{
          color: "#92400E",
          padding: ".5rem",
          fontSize: "2rem",
          backgroundColor: "#FBBF24"
        }}
      >
        {inputEmoji}
      </h2>
      <div style={{ padding: "1em" }}></div>
      {faceEmojis.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: ".5rem",
              cursor: "pointer",
              backgroundColor: "#9CA3AF"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
      <div style={{ padding: "1em" }}></div>
      <h2>
        “I call my pets ‘divine mirrors’—they reflect back the emotions you put
        in. If you put in love and respect and kindness and curiosity, the pet
        will return that.” –Allan Hamilton
      </h2>
    </div>
  );
}
