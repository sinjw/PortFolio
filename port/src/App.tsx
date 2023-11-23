import Main from "./components/mainComponent";
import { Provider } from "react-redux";
import store from "./store/config";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Intro from "./components/intropage/intro";
function App() {
  return (
    <Provider store={store}>
      <>
        <Main />
      </>
    </Provider>
  );
}

export default App;
