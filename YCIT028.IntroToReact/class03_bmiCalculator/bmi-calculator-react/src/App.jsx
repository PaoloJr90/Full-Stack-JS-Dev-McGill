import "./app.scss";

function App() {
  return (
    <>
      <div class="container">
        <h1>Calculate BMI</h1>

        <form>
          <div>
            <label for="height">Height:</label>
            <input
              id="height"
              type="text"
              class="form-control"
              placeholder="Cm"
            />
          </div>

          <div>
            <label for="weight">Weight:</label>
            <input
              id="weight"
              type="text"
              class="form-control"
              placeholder="Kg"
            />
          </div>

          <button class="btn btn-success w-100">Calculate</button>
        </form>

        <p id="result"></p>
      </div>
    </>
  );
}

export default App;
