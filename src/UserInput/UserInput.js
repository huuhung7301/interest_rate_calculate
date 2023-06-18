const UserInput = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("onSubmit");
  };

  const onResetHandler = () => {
    console.log("onReset");
  };

  const onInputChange = (input, value) => {
    console.log(input, value);
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
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" onChange={(event) =>
                onInputChange("yearly-contribution", event.target.value)
              }/>
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" onChange={(event) =>
                onInputChange("expected-return", event.target.value)
              }/>
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" onChange={(event) =>
                onInputChange("duration", event.target.value)
              }/>
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
