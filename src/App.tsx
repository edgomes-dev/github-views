import "./styles/global.scss";
import { Router } from "./router";
import { Provider } from "react-redux";
import store from "./redux";

export const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);
