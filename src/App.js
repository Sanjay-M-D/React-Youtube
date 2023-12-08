import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
