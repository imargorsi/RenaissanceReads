import { createRoot } from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store.js";
import { Provider } from "react-redux";

import App from "./App.jsx";
import "./stylesheets/global.css";
import "./stylesheets/Header.css";
import "./stylesheets/Hero.css";
import "./stylesheets/Features.css";
import "./stylesheets/Information.css";
import "./stylesheets/Profile.css";
import "./stylesheets/Form.css";
import "./stylesheets/Blogpage.css";
import "./stylesheets/Library.css";
import "./stylesheets/SubmitBook.css";
import "./stylesheets/FullSingleBook.css";
import "./stylesheets/Reviews.css";
import "./stylesheets/utils.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <App />
    </PersistGate>
  </Provider>
);
