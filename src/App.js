// import FunctionalComp from "./components/FunctionalComp";
import FunctionalContextComp from "./components/FunctionalContextComp";
// import ContextHook from "./components/ContextHook";
// import { UseRefHook } from "./components/UseRefHook";
// import UseMemoHook from "./components/UseMemoHook";
import UseReducer from "./components/UseReducer";

import "./App.css";
function App() {
  return (
    <div className="App">
      <UseReducer />

      <FunctionalContextComp />
    </div>
  );
}

export default App;
