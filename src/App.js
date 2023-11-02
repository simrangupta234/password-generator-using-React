import { useState } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(10);
  const [addSymbols, setAddSymbols] = useState(false);
  const [addNumbers, setAddNumbers] = useState(false);
  const [addUppercaseLetters, setUppercaseLetters] = useState(false);
  const [addLowercaseLetters, setLowercaseLetters] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const generatePassword = () => {
    let character = "";
    let generatedPassword = "";
    if (addSymbols) {
      character += "!@#$%^&*()[]?";
    }
    if (addNumbers) {
      character += "01234567689";
    }
    if (addLowercaseLetters) {
      character += "qwertyuiopasfghjklzxcvbnm";
    }
    if (addUppercaseLetters) {
      character += "QWERTYUIOPASDFGHJKLZXCVBNM";
    }
    for (let i = 0; i < passwordLength; i++) {
      generatedPassword += character.charAt(
        Math.floor(Math.random() * character.length)
      );
    }
    setPassword(generatedPassword);
  };

  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(password);
  };
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="App d-flex justify-content-center align-items-center ">
      <div className="box h-75 w-50">
        <h1 className="m-4" style={{color: "orange"}}>Password Generator</h1>
        <div>
        <div className="rows w-100">
          <input
            type="text"
            placeholder="generated Password"
            value={password}
            readOnly
          />

          <button
            onClick={() => {
              handleCopyClick();
              handleClick();
            }}
          >
            {isClicked ? (
              <i class="fa-solid fa-check" />
              // setInterval(function () {<i class="fa-solid fa-check" />}, 1000)
            ) : (
              <i class="fa-solid fa-clipboard" />

              
            )}
          </button>
        </div>

        <div>
          <label>Password Length </label>
          <input
            type="number"
            max={32}
            min={2}
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
          />
        </div>

        <div>
          <label>
            Symbols
            </label>
            <input className="filledin"
              type="checkbox"
              checked={addSymbols}
              onChange={() => setAddSymbols(!addSymbols)}
            />
          
        </div>

        <div>
          <label>
            UpperCase Letters
            </label>
            <input className="filledin"
              type="checkbox"
              checked={addUppercaseLetters}
              onChange={() => setUppercaseLetters(!addUppercaseLetters)}
            />

        </div>

        <div>
          <label>
            LowerCase Letters
            </label>
            <input className="filledin"
              type="checkbox"
              checked={addLowercaseLetters}
              onChange={() => setLowercaseLetters(!addLowercaseLetters)}
            />
          
        </div>

        <div>
          <label>
            Numbers
            </label>
            <input className="filledin"
              type="checkbox"
              checked={addNumbers}
              onChange={() => setAddNumbers(!addNumbers)}
            />
          
        </div>
        </div>
        <div>
          <button onClick={generatePassword}>Generate Password</button>
        </div>
      </div>
    </div>
  );
}

export default App;
