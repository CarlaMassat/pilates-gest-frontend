import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/Router";
import { Provider } from "react-redux";
import { store } from "./store/store";

export const PilatesApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
};
