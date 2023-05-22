import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";

import Login from "./routes/login";
// import Sign_up from "./routes/sign_up";
// import Main1_ui from "./routes/main1_ui";
// import Main2_ui from "./routes/main2_ui";
// import Main2_result from "./routes/main2_result";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={process.env.PUBLIC_URL + "/"} element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
