import "./styles.css";
import { useReducer } from "react";

export default function App() {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "yell":
          return {
            message: `Hey! I said ${state.message}`
          };
        case "whisper":
          return {
            message: `Excuse me! I said ${state.message}`
          };
        default:
          return {
            message: `Hello!`
          };
      }
    },
    {
      message: "Hi"
    }
  );

  return (
    <div className="App">
      <p>Message: {state.message}</p>
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "yell" })}
      >
        yell
      </button>
      <button
        className="btn btn-primary mx-2"
        onClick={() => dispatch({ type: "whisper" })}
      >
        whisper
      </button>
    </div>
  );
}
