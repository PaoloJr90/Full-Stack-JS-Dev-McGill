import { useImmer } from "use-immer";
import { passwordStrength } from "check-password-strength";
import "./app.scss";

function App() {
  const [state, setState] = useImmer({
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showInvalidEmail: false,
    isPasswordShort: false,
    passwordStrength: {
      color: "",
      value: "",
    },
  });

  return (
    <div id="app" className="container">
      <form id="my-form" className="shadow">
        <h4>Form Validator</h4>

        <div className="mb-4">
          <label>Email</label>
          <input
            className="form-control"
            type="text"
            data-rules="required|digits:5|min:5"
            placeholder="Please enter email here"
            value={state?.email || ""}
            onChange={(event) =>
              setState((draft) => {
                draft.email = event.target.value;
              })
            }
            onBlur={() => console.log("blur")}
          />
        </div>
        <div className="mb-4">
          <label>Password</label>
          <input
            className="form-control"
            type={state.showPassword ? "text" : "password"}
            data-rules="required|string|min:5"
            placeholder="Please enter password here"
            value={state?.password || ""}
            onChange={(event) =>
              setState((draft) => {
                draft.password = event.target.value;
              })
            }
          />
          <button
            style={{
              position: "absolute",
              top: 25,
              right: 10,
              width: 50,
              padding: "0px !important",
              margin: 0,
              fontSize: 12,
              border: "0px !important",
            }}
            type="button"
            onClick={() => {
              setState((draft) => {
                draft.showPassword = !state.showPassword;
              });
            }}
          >
            eye
          </button>
        </div>
        <div className="mb-4">
          <label>Password Confirm</label>
          <input
            className="form-control"
            type="password"
            data-rules="required|string|min:5"
            value={state?.confirmPassword || ""}
            onChange={(event) =>
              setState((draft) => {
                draft.confirmPassword = event.target.value;
              })
            }
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
