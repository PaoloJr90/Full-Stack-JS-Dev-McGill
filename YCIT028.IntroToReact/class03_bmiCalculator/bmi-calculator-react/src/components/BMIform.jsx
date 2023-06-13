import calculateBmi from "../common/calculateBMI";

const BmiForm = (props) => {
  const { height, weight, setHeight, setWeight, setResult } = props;
  // debugger;
  return (
    <form>
      <div>
        <label htmlFor="height">Height:</label>
        <input
          id="height"
          type="text"
          className="form-control"
          placeholder="Cm"
          value={height}
          onChange={(event) => {
            // console.log("height changed");
            // console.log(event.target.value);
            setHeight(event.target.value);
          }}
        />
      </div>

      <div>
        <label htmlFor="weight">Weight:</label>
        <input
          id="weight"
          type="text"
          className="form-control"
          placeholder="Kg"
          value={weight}
          onChange={(event) => {
            // console.log("weight changed");
            // console.log(event.target.value);
            setWeight(event.target.value);
          }}
        />
      </div>

      <button
        className="btn btn-success w-100"
        onClick={() => {
          if (height < 100) {
            alert("Height must be greater than 100");
            return;
          }
          if (weight < 50) {
            alert("Weight must be greater than 50");
            return;
          }
          const result = calculateBmi(height, weight);
          console.log(result);
          // console.log("clicked");
          setResult(result);
        }}
        type="button"
      >
        Calculate
      </button>
    </form>
  );
};

export default BmiForm;
