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
          fontSize: "3rem",
          backgroundColor: "#1F2937"
        }}
      >
        Facemoji
        <p
          style={{
            color: "#F3F4F6",
            fontSize: "1rem",
            backgroundColor: "#1F2937"
          }}
        >
          we keep on making faces all the time, here are some of those...
        </p>
      </h1>
      <div style={{ padding: "1rem" }}> Enter your favourite Face:</div>
      <input
        onChange={inputEmojiHandler}
        style={{ height: "50px", width: "50px" }}
      />
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
      <h4>
        “I call my pets ‘divine mirrors’—they reflect back the emotions you put
        in. If you put in love and respect and kindness and curiosity, the pet
        will return that.” –Allan Hamilton
      </h4>
    </div>
  );
}
