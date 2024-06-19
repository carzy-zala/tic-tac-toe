import "./App.css";
import Board from "./components/Board";
import { Provider } from "react-redux";
import store from "./store/index";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Board />
        
      </div>
    </Provider>
  );
}

export default App;
