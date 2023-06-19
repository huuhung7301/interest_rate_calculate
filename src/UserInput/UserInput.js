import { useState } from "react";

const initialUserInput = {
  "current-saving": 10000,
  "yearly-contribution": 1200,
  "expected-return": 7,
  duration: 10,
};

const UserInput = () => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("onSubmit");
  };

  const onResetHandler = () => {
    setUserInput(initialUserInput);
  };

  const onInputChange = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmitHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              id="current-savings"
              onChange={(event) =>
                onInputChange("current-saving", event.target.value)
              }
              value={userInput['current-saving']}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              id="yearly-contribution"
              onChange={(event) =>
                onInputChange("yearly-contribution", event.target.value)
              }
              value={userInput['yearly-contribution']}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              id="expected-return"
              onChange={(event) =>
                onInputChange("expected-return", event.target.value)
              }
              value={userInput['expected-return']}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              id="duration"
              onChange={(event) =>
                onInputChange("duration", event.target.value)
              }
              value={userInput['duration']}
            />
          </p>
        </div>
        <p className="actions">
          <button type="reset" className="buttonAlt" onClick={onResetHandler}>
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
};

export default UserInput;
