import React, { useState } from "react";

function App() {
  var [input, changeInput] = useState({
    fName: "",
    lName: ""
  });

  function handleInput(event) {
    var { name, value } = event.target;

    changeInput(function (previousValue) {
      if (name === "fName") {
        return {
          fName: value,
          lName: previousValue.lName
        };
      } else {
        return {
          fName: previousValue.fName,
          lName: value
        };
      }
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {input.fName} {input.lName}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={handleInput}
          value={input.fName}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={handleInput}
          value={input.lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
