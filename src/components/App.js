import React, { useState, useEffect } from "react";
import StyledDrumContainer from "./StyledDrumContainer";
import StyledDisplay from "./StyledDisplay";
import StyledButtonContainer from "./StyledButtonContainer";

import "../styles/App.css";

const App = () => {
  const [displayText, setDisplayText] = useState("");
  const [volume, setVolume] = useState(50);

  const buttonClicked = e => {
    const { name, value, innerHTML } = e.target;
    console.log(innerHTML);
    const audio = document.getElementById(name);
    audio.play();
    setDisplayText(value);
  };

  useEffect(() => {
    const audios = document.getElementsByTagName("audio");
    for (let i = 0; i < audios.length; i++) {
      audios[i].volume = volume / 100;
    }
  }, [volume]);

  const buttonDown = e => {
    const { keyCode } = e;
    if (
      keyCode === 81 ||
      keyCode === 87 ||
      keyCode === 69 ||
      keyCode === 65 ||
      keyCode === 83 ||
      keyCode === 68 ||
      keyCode === 89 ||
      keyCode === 88 ||
      keyCode === 67
    ) {
      const audio = document.getElementById(String.fromCharCode(keyCode));
      setDisplayText(
        document.getElementById(String.fromCharCode(keyCode)).parentNode.value
      );
      audio.play();
    }
  };

  const volumeChange = e => {
    let { value } = e.target;
    setVolume(parseInt(value, 10));
  };

  return (
    <StyledDrumContainer onKeyDown={buttonDown}>
      <StyledDisplay
        style={{ fontFamily: "Digital dream" }}
        id="display"
        value={displayText}
        type="text"
        readOnly
      />
      <div className="drum-controls-wrapper">
        <StyledButtonContainer>
          <button
            className="drum-pad"
            name="Q"
            value="Heater-1"
            onClick={buttonClicked}
          >
            <audio
              id="Q"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            />
            Q
          </button>
          <button
            className="drum-pad"
            name="W"
            value="Heater-2"
            onClick={buttonClicked}
          >
            <audio
              id="W"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
            />
            W
          </button>
          <button
            className="drum-pad"
            name="E"
            value="Heater-3"
            onClick={buttonClicked}
          >
            <audio
              id="E"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
            />
            E
          </button>
          <button
            className="drum-pad"
            name="A"
            value="Heater-4"
            onClick={buttonClicked}
          >
            <audio
              id="A"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
            />
            A
          </button>
          <button
            className="drum-pad"
            name="S"
            value="Heater-6"
            onClick={buttonClicked}
          >
            <audio
              id="S"
              src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
            />
            S
          </button>
          <button
            className="drum-pad"
            name="D"
            value="Cev-H2"
            onClick={buttonClicked}
          >
            <audio
              id="D"
              src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
            />
            D
          </button>
          <button
            className="drum-pad"
            name="Y"
            value="Bld-H1"
            onClick={buttonClicked}
          >
            <audio
              id="Y"
              src="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
            />
            Y
          </button>
          <button
            className="drum-pad"
            name="X"
            value="RP4-Kick"
            onClick={buttonClicked}
          >
            <audio
              id="X"
              src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
            />
            X
          </button>
          <button
            className="drum-pad"
            name="C"
            value="Bld-H1"
            onClick={buttonClicked}
          >
            <audio
              id="C"
              src="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
            />
            C
          </button>
        </StyledButtonContainer>
        <div className="volume-control-container">
          <input
            type="range"
            min={0}
            max={100}
            step={1}
            value={volume}
            className="volume-control"
            onChange={volumeChange}
          />
        </div>
      </div>
    </StyledDrumContainer>
  );
};

export default App;
